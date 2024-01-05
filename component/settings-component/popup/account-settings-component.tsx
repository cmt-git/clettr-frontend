import style from '../../../styles/component/settings-component/popup/settings-popup-component.module.scss';
import { link_setSettingsPopupIndex } from '../settings-block-component';

const AccountSettingsComponent = () => {
    return(
        <div className={style.settings_popup_root}>
            <div className={style.settings_popup_header}>
                <p>
                    Account
                </p>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                    Username <span>test-</span>
                </p>
            </div>
            <div className={style.line}/>
            <div className={style.input_container}>
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Blockchain
                    </p>
                    <p>
                        Binance Smart Chain
                    </p>
                </div>
                <div className={style.input_box}>
                    <img src={"./images/svgs/bsc-chain-logo.svg"} alt="bsc-chain-logo"
                        style={{width:"20px", marginRight:"5px"}}
                    />
                    <p>
                        0xd6077eA337b8c1B3EFd929EAA2c530C05Afd5136
                    </p>
                </div>
            </div>
            <div className={style.line}/>
            <div className={style.input_container}>
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Email
                    </p>
                    <p>
                        test@test.com
                    </p>
                </div>
                <div className={`${style.colored_button} ${style.light_grey_button}`}
                    style={{marginTop:"5px"}}
                    onClick={() => link_setSettingsPopupIndex(2)}
                >
                    Change
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Password
                    </p>
                    <p>
                        &nbsp;
                    </p>
                </div>
                <div className={`${style.colored_button} ${style.light_grey_button}`}
                    style={{marginTop:"5px"}}
                    onClick={() => link_setSettingsPopupIndex(3)}
                >
                    Change
                </div>
            </div>
            <div className={style.line}/>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Username
                    </p>
                    <p>
                        test-
                    </p>
                </div>
                <div className={style.input_box}>
                    <input type="text" placeholder='Username'/>
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Password
                    </p>
                    <p>
                        &nbsp;
                    </p>
                </div>
                <div className={style.input_box}>
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className={`${style.colored_button} ${style.light_grey_button}`}
                style={{marginTop:"15px"}}
            >
                Update
            </div>
        </div>
    )
}

export default AccountSettingsComponent;