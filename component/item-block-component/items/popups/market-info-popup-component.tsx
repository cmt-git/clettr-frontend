import { useEffect, useState } from "react";
import Web3 from "web3";
import { store } from "../../../../pages/_app";
import { decimalFormatter } from "../../../../scripts/misc/stringFormatter";
import { marketRevokeNFT, marketSellNFT } from "../../../../scripts/router/nfts/nfts-request";
import style from '../../../../styles/component/popup-component/popup-content-style.module.scss';
import { link_messageBoxShow } from "../../../messagebox-component/messagebox-component";

const MarketInfoPopupComponent = (props: any) => {

    const[marketState, setMarketState]: any = useState("sell");
    const[currency, setCurrency]: any = useState("ettr");
    const[currentAmount, setCurrentAmount]: any = useState(0);

    const[inputValue, setInputValue]: any = useState(null);
    const[CLTRNFTContract, setCLTRNFTContract]: any = useState(null);
    const[account, setAccount]: any = useState(null);
    useEffect(() => {
        (async () => {
            const cltrnft_json = require('../../../../abis/CLTRNFT.json');
            const web3 = new Web3('ws://localhost:7545');

            const networkId = await web3.eth.net.getId();
            const networkData = cltrnft_json.networks[networkId];

            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[store.getState().currentWalletAccountIndexState.value]);

            if (networkData){
                const cltrnft_abi = cltrnft_json.abi;
                const address = networkData.address;
                const contract = new web3.eth.Contract(cltrnft_abi, address);
                setCLTRNFTContract(contract);
            } else {
                alert('Smart Contract has not been detected');
            }
        })()
    }, []);

    return(
        <div>
            {
                props.revoke == null || props.revoke == false ?
                    [
                        <p style={{marginBottom:"10px"}}>
                            Market Sell 
                        </p>,
                        <p style={{color:"rgba(255, 255, 255, 0.5)", marginBottom:"10px"}}>
                            +{currency === "usdc" ? "10%" : "2.5%"} Tax
                        </p>,
                        <div className={style.input_box} style={{height:"50px"}}>
                            <img src={currency === "usdc" ? "./images/svgs/usdc-token.svg" : "./images/svgs/clettr-token.svg"} alt="clettr-logo" 
                                style={{width:"25px", marginLeft:"15px"}}
                                onClick={() => setCurrency(currency == "usdc" ? "ettr" : "usdc")}
                                
                            />
                            <input type="text" placeholder={"Price"} maxLength={6}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const current_tax_value = (currency === "usdc" ? 0.1 : 0.025)
                                    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
                                    const _value: any = Number(e.target.value) + (Number(e.target.value) * current_tax_value) ;

                                    if (_value != NaN) {
                                        if (_value > 10000){
                                            e.target.value = "10000";
                                            setCurrentAmount(10000);
                                        }
                                        else {
                                            setCurrentAmount(Math.round(_value));
                                        }
                                    }
                                    else {
                                        link_messageBoxShow("Price must not have any decimal!", false)
                                    }
                                }}
                            />
                        </div>,
                        <div className={`${style.red_button} ${style.colored_button}`} style={{marginTop:"15px", padding:"15px"}}
                                onClick={() => {
                                    if (currentAmount > 0 && Number.isInteger(currentAmount)){
                                        CLTRNFTContract.methods.cltrnft_market_sell(
                                            props.data.nft_long_id
                                        ).send({from: account, gas:3000000})
                                        .on('transactionHash', (hash: any) => {
                                            (async () => {
                                                await marketSellNFT({
                                                    nft_id: props.data.id,
                                                    price: currentAmount,
                                                    currency: currency.toLowerCase(),
                                                })
                                                window.location.reload();
                                            })()
                                        });
                                    }
                                    else {
                                        let _message = ""
                                        if (currentAmount == 0){
                                            _message = "Price must be above 0"
                                        }
                                        else {
                                            _message = "Price must be an integer"
                                        }
                                        link_messageBoxShow(_message, false);
                                    }
                                }}
                        >
                            Sell for {currentAmount} {currency == "usdc" ? "USDC" : "Ettr"} <span style={{marginLeft:"5px", color:"rgba(255, 255, 255, 0.5)"}}>{decimalFormatter(store.getState().tickerPriceState.value != null ? currentAmount * store.getState().tickerPriceState.value : 0)}</span><span style={{color:"rgba(255, 255, 255, 0.5)"}}>{store.getState().currentCurrencyState.value.toUpperCase()}</span>
                        </div>
                    ]
                :
                props.revoke == true ?
                    <div className={`${style.red_button} ${style.colored_button}`} style={{marginTop:"15px", padding:"15px"}}
                        onClick={() => marketRevokeNFT({nft_id: props.data.id})}
                    >
                        Remove from Market
                    </div>
                :
                    null
            }
        </div>
    )
}

export default MarketInfoPopupComponent;