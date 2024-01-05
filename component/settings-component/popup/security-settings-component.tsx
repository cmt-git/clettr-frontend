import style from '../../../styles/component/settings-component/popup/settings-popup-component.module.scss';
import PageBlockComponent from '../../pageblock-component';

const SecuritySettingsComponent = () => {

    const sessionBlock = () => {
        return(
            <div className={style.session_block}>
                <div className={style.session_info_bar}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Location
                    </p>
                    <p>
                        Unknown, Unknown
                    </p>
                </div>
                <div className={style.session_info_bar}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Login Time (UTC)
                    </p>
                    <p>
                        May 16, 2022 | 7:24:34 PM
                    </p>
                </div>
                <div className={style.session_info_bar}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        IP Address
                    </p>
                    <p>
                        192.168.24.68
                    </p>
                </div>
                <div className={style.session_info_bar}
                    style={{flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}
                >
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        User Agent
                    </p>
                    <p style={{marginTop:"10px"}}>
                        Mozilla Firefox
                    </p>
                </div>
                <div className={`${style.colored_button} ${style.red_button}`}>
                    Revoke
                </div>
            </div>
        )
    }
    
    return(
        <div className={style.settings_popup_root}>
            <div className={style.settings_popup_header}>
                <p>
                    Security
                </p>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                    Username <span>test-</span>
                </p>
            </div>
            <div className={style.line}/>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        2FA Authentication
                    </p>
                    <p style={{fontWeight:"700", color:"#ddffc7"}}>
                        ON
                    </p>
                </div>
                <div className={`${style.colored_button} ${style.red_button}`} style={{marginTop:"10px"}}>
                    Disable
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Account Privacy
                    </p>
                    <p style={{fontWeight:"700", color:"#fab1c2"}}>
                        OFF
                    </p>
                </div>
                <div className={`${style.colored_button} ${style.green_button}`} style={{marginTop:"10px"}}>
                    Enable
                </div>
            </div>
            <div className={style.line}/>
            <div className={style.session_container}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Sessions
                    </p>
                    <p>
                        Last 30 days
                    </p>
                </div>
                <div className={style.session_block_container}>
                    {
                        (() => {
                            let arr_session_block: any = [];

                            for(let i = 0; i < 10; i++){
                                arr_session_block.push(sessionBlock());
                            }

                            return arr_session_block;
                        })()
                    }
                </div>
                <div style={{marginTop:"-15px"}}>
                    <PageBlockComponent cut="settings"/>
                </div>
            </div>
        </div>
    )
}

export default SecuritySettingsComponent;