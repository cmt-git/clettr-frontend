import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import style from '../../styles/component/index-components/index-default-block-component-style.module.scss';
import LoginPopupComponent from '../navbar-component/popups/login-popup-component';
import { openPopup } from '../popup-component/popup-container-component';
import WelcomeBlockComponent from './welcome-block-component';
import { RootState } from '../../scripts/redux/rootReducer';
import { phpPrice } from '../navbar-component/subcomponents/navbar-price-counter-component';
import { decimalFormatter } from '../../scripts/misc/stringFormatter';

const IndexDefaultBlockComponent = () => {

    const queryState = useSelector((state: RootState) => {
        return state.queryState.value
    });

    const router = useRouter();

    return(
        <div className={style.index_default_block_component_root}>
            <div className={style.top_block_container}>
                <div className={`${style.idbc_logo_container}`}>
                    <img src="./images/svgs/clettr-logo.svg" alt="clettr-logo" 
                        className={style.logo}
                    />
                    <img src="./images/svgs/clettr-word-logo.svg" alt="clettr-word-logo" 
                        className={style.word_logo}
                    />
                </div>
                <div className={`${style.float_element}`} style={{margin:"20px 0px"}}>
                    <WelcomeBlockComponent priceonly={true}/>
                </div>
                <div className={style.line}/>
            </div>
            <div className={style.earn_container}>
                <p style={{fontSize:"50px", fontWeight:"700", marginTop:"50px", textShadow:"0px 5px 5px rgba(0, 0, 0, 0.1)"}}>
                    Earn an Income by Playing. 
                </p>
                <p style={{marginBottom:"50px", marginTop:"-20px", fontSize:"30px", fontWeight:"700", color:"rgba(255, 255, 255, 0.5)", textShadow:"0px 5px 5px rgba(0, 0, 0, 0.1)"}}>
                    Play passive, or active.
                </p>
                <div className={style.info_block_container}>
                    <div className={style.grey_info_block}>
                        <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                            Players
                        </p>
                        <p>
                            {
                                queryState != null ?
                                    decimalFormatter(queryState.misc.total_players)
                                :
                                    "---"
                            }
                        </p>
                    </div>
                    <div className={style.grey_info_block}>
                        <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                            NFT Circulation
                        </p>
                        <p>
                            {
                                queryState != null ?
                                    decimalFormatter(queryState.misc.nft_circulation)
                                :
                                    "---"
                            }
                        </p>
                    </div>
                </div>
                <div className={style.info_block_container}>
                    <div className={style.grey_info_block}>
                        <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                            Ettr Minted
                        </p>
                        <p>
                            {
                                queryState != null ?
                                    decimalFormatter(queryState.misc.ettr_minted)
                                :
                                    "---"
                            }
                        </p>
                    </div>
                    <div className={style.grey_info_block}>
                        <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                            Market Cap
                        </p>
                        <p>
                            4,557,044.09
                            &nbsp;USD
                        </p>
                    </div>
                </div>
                <div className={`${style.colored_button} ${style.light_grey_button}`} style={{padding:"15px", fontSize:"16px", marginBottom:"50px"}}
                    onClick={() => openPopup(<LoginPopupComponent/>)}
                >
                    Join
                </div>
                <div className={style.line}/>
            </div>
            <div className={style.bottom_block_container} style={{marginBottom:"200px"}}>
                <p>
                    Learn More
                </p>
                <div style={{display:"flex", alignItems:"center", gap:"15px", marginTop:"15px"}}>
                    <div className={`${style.colored_button} ${style.grey_button}`}
                        onClick={() => router.push("/marketplace")}
                    >
                        See Marketplace
                    </div>
                    <div className={`${style.colored_button} ${style.grey_button}`}
                        onClick={() => router.push("/docs")}
                    >
                        See Docs
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexDefaultBlockComponent;