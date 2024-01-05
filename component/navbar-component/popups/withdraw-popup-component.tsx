import getScreenWidth from '../../../scripts/misc/getScreenWidth';
import { useSelector } from 'react-redux';
import { decimalFormatter } from '../../../scripts/misc/stringFormatter';
import style from '../../../styles/component/popup-component/popup-content-style.module.scss';
import { closePopup } from '../../popup-component/popup-container-component';
import { RootState } from '../../../scripts/redux/rootReducer';
import { store } from '../../../pages/_app';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { ettrSubtract } from '../../../scripts/router/user/user-request';
import { link_messageBoxShow } from '../../messagebox-component/messagebox-component';

const WithdrawPopupComponent = () => {

    const _width = getScreenWidth();

    const queryState = useSelector((state: RootState) => {
        return state.queryState.value
    });

    const[inputValue, setInputValue]: any = useState(null);
    const[ettrContract, setEttrContract]: any = useState(null);
    const[account, setAccount]: any = useState(null);
    useEffect(() => {
        (async () => {
            const ettr_json = require('../../../abis/Ettr.json');
            const web3 = new Web3('ws://localhost:7545');

            const networkId = await web3.eth.net.getId();
            const networkData = ettr_json.networks[networkId];

            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[store.getState().currentWalletAccountIndexState.value]);

            if (networkData){
                const ettr_abi = ettr_json.abi;
                const address = networkData.address;
                const contract = new web3.eth.Contract(ettr_abi, address);
                setEttrContract(contract);
            } else {
                alert('Smart Contract has not been detected');
            }
        })()
    }, []);

    return(
        <div className={style.popup_content_root} style={{maxWidth:"550px", width:"100vw"}}>
            <div style={{width:"100%", marginBottom:"15px"}} onClick={() => closePopup()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.05" height="14.048" viewBox="0 0 14.05 14.048"
                    className={style.close_button}
                >
                    <path d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z" fill="#d08080"/>
                </svg>
            </div>
            <div style={{display:"flex", flexDirection: _width > 650 ? "row" : "column", justifyContent:"center", alignItems:"center", marginBottom:"15px"}}>
                <p style={{fontSize:"15px", marginBottom: _width > 650 ? "0px" : "10px"}}>
                    Withdraw
                </p>
            </div>
            <div className={style.line}/>
            <p
                style={{
                    color:"rgba(255, 255, 255, 0.5)",
                    marginBottom:'15px'
                }}
            >
                You have (<span style={{color:"white"}}>{decimalFormatter(queryState.user_info.unclaimed_ettr)} <span style={{color:"rgba(255, 255, 255, 0.7)"}}>{decimalFormatter(Number(queryState.user_info.unclaimed_ettr) * Number(store.getState().tickerPriceState.value))} {store.getState().currentCurrencyState.value.toUpperCase()})</span> </span> 
                worth of Ettr. If you proceed on withdrawing, you will not be able to withdraw again in the next 30 days.
            </p>
            <p>
                Wallet Address
            </p>
            <div className={style.black_info_block}
                style={{marginTop:"5px", display:"flex", alignItems:"center"}}
            >
                <img src={"./images/svgs/metamask.svg"} alt="metamask-logo"
                    style={{width:"20px", marginRight:"8px"}}
                />
                <p>
                    {
                        queryState.user.bsc_address
                    }
                </p>
            </div>
            <p style={{marginTop:"15px"}}>
                Blockchain
            </p>
            <div className={style.black_info_block}
                style={{marginTop:"5px", display:"flex", alignItems:"center"}}
            >
                <img src={"./images/svgs/bsc-chain-logo.svg"} alt="bsc-chain-logo"
                    style={{width:"20px", marginRight:"8px"}}
                />
                <p>
                    Binance Smart Chain
                </p>
            </div>
            <div className={style.line}/>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}> 
                <p>
                    Enter Amount
                </p>
                <div style={{display:"flex"}}>
                    <img src={"./images/svgs/clettr-token.svg"} alt="clettr-token-logo"
                        style={{width:"20px", marginRight:"8px"}}
                    />
                    <p>
                    {decimalFormatter(queryState.user_info.unclaimed_ettr)} <span style={{opacity:"0.5"}}>{decimalFormatter(Number(queryState.user_info.unclaimed_ettr) * Number(store.getState().tickerPriceState.value))} {store.getState().currentCurrencyState.value.toUpperCase()}</span>
                    </p>
                </div>
            </div>
            <div className={style.input_box} style={{marginTop:"10px"}}>
                <input type="text" placeholder="Amount"
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
                        const _value: any = Number(e.target.value);
                        if (Number(_value) >= (queryState.user_info.unclaimed_ettr)){
                            e.target.value = decimalFormatter(queryState.user_info.unclaimed_ettr);
                            setInputValue(Number(queryState.user_info.unclaimed_ettr));
                        }
                        else {
                            setInputValue(Number(_value));
                        }
                    }}
                />
            </div>
            <div className={`${style.grey_button} ${style.colored_button}`}
                style={{marginTop:"15px"}}
                onClick={() => {
                    const filtered_iv =  Math.round(inputValue);
                    if (Number(queryState.user_info.unclaimed_ettr) >= filtered_iv && filtered_iv >= 10){
                        ettrContract.methods.ettr_mint(
                            filtered_iv
                        ).send({from: account})
                        .on('transactionHash', (hash: any) => {
                            (async () => {
                                await ettrSubtract({
                                    value:  filtered_iv
                                });
                                window.location.reload();
                            })()
                        });
                    }
                    else {
                        if (filtered_iv < 10){
                            link_messageBoxShow("Amount must be atleast 10 Ettr!", false);
                        }
                        else {
                            link_messageBoxShow("Your input amount is too high!", false);
                        }
                    }
                }}
            >
                Withdraw
            </div>
        </div>
    )
}

export default WithdrawPopupComponent;