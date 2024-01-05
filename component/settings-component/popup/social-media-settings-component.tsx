import style from '../../../styles/component/settings-component/popup/settings-popup-component.module.scss';

const SocialMediaSettingsComponent = () => {
    return(
        <div className={style.settings_popup_root}>
            <div className={style.settings_popup_header}>
                <p>
                    Social Media
                </p>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                    Username <span>test-</span>
                </p>
            </div>
            <div className={style.line}/>
            <div className={style.input_container}>
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Discord
                    </p>
                    <p>
                        @hehe #4333
                    </p>
                </div>
                <div className={style.input_box}>
                    <img src={"./images/svgs/circle-discord-logo.svg"} alt="discord-logo" 
                        style={{marginLeft:"15px", width:"25px", marginRight:"-7.5px", zIndex:"2"}}
                    />
                    <input type="text" placeholder='Discord Tag'/>
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Facebook
                    </p>
                    <p>
                        @test-facebook
                    </p>
                </div>
                <div className={style.input_box}>
                    <img src={"./images/svgs/circle-facebook-logo.svg"} alt="facebook-logo" 
                        style={{marginLeft:"15px", width:"25px", marginRight:"-7.5px", zIndex:"2"}}
                    />
                    <input type="text" placeholder='Facebook Handle'/>
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Instagram
                    </p>
                    <p>
                        @test-instagram
                    </p>
                </div>
                <div className={style.input_box}>
                    <img src={"./images/svgs/circle-instagram-logo.svg"} alt="instagram-logo" 
                        style={{marginLeft:"15px", width:"25px", marginRight:"-7.5px", zIndex:"2"}}
                    />
                    <input type="text" placeholder='Facebook Handle'/>
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Tiktok
                    </p>
                    <p>
                        @test-tiktok
                    </p>
                </div>
                <div className={style.input_box}>
                    <img src={"./images/svgs/circle-tiktok-logo.svg"} alt="tiktok-logo" 
                        style={{marginLeft:"15px", width:"25px", marginRight:"-7.5px", zIndex:"2"}}
                    />
                    <input type="text" placeholder='Tiktok Handle'/>
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Twitter
                    </p>
                    <p>
                        @test-twitter
                    </p>
                </div>
                <div className={style.input_box}>
                    <img src={"./images/svgs/circle-twitter-logo.svg"} alt="twitter-logo" 
                        style={{marginLeft:"15px", width:"25px", marginRight:"-7.5px", zIndex:"2"}}
                    />
                    <input type="text" placeholder='Twitter Handle'/>
                </div>
            </div>
            <div className={style.input_container}
                style={{marginTop:"15px"}}
            >
                <div className={style.input_info}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Youtube
                    </p>
                    <p>
                        @test-youtube
                    </p>
                </div>
                <div className={style.input_box}>
                    <img src={"./images/svgs/circle-youtube-logo.svg"} alt="youtube-logo" 
                        style={{marginLeft:"15px", width:"25px", marginRight:"-7.5px", zIndex:"2"}}
                    />
                    <input type="text" placeholder='Youtube Handle'/>
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

export default SocialMediaSettingsComponent;