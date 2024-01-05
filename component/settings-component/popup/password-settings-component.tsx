import style from '../../../styles/component/settings-component/popup/settings-popup-component.module.scss';

const PassportSettingsComponent = () => {
    return(
        <div className={style.settings_popup_root}>
            <div className={style.settings_popup_header}>
                <p>
                    Password
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
                        Old Password
                    </p>
                    <p>
                        &nbsp;
                    </p>
                </div>
                <div className={style.input_box}>
                    <input type="password" placeholder='Old Password'/>
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        New Password
                    </p>
                    <p>
                        &nbsp;
                    </p>
                </div>
                <div className={style.input_box}>
                    <input type="password" placeholder='New Password'/>
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Confirm Password
                    </p>
                    <p>
                        &nbsp;
                    </p>
                </div>
                <div className={style.input_box}>
                    <input type="password" placeholder='Confirm Password'/>
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

export default PassportSettingsComponent;