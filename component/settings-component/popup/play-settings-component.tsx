import style from '../../../styles/component/settings-component/popup/settings-popup-component.module.scss';

const PlaySettingsComponent = () => {
    return(
        <div className={style.settings_popup_root}>
            <div className={style.settings_popup_header}>
                <p>
                    Email
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
                        Email
                    </p>
                    <p>
                        test@gmail.com
                    </p>
                </div>
                <div className={style.input_box}>
                    <input type="text" placeholder='Email Address'/>
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

export default PlaySettingsComponent;