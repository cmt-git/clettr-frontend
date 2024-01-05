import { useRef } from "react";
import { connectWallet, loginAccount } from "../../../scripts/router/user/user-request";
import style from '../../../styles/component/popup-component/popup-content-style.module.scss';
import { closePopup, openPopup } from "../../popup-component/popup-container-component";
import RegisterPopup from "./register-popup-component";

const LoginPopupComponent= () => {

    const emailRef: any = useRef();
    const passwordRef: any = useRef();

    return(
        <div className={style.popup_content_root} style={{width:"100vw", maxWidth:"500px"}}>
            <div style={{width:"100%", marginBottom:"10px"}} onClick={() => closePopup()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.05" height="14.048" viewBox="0 0 14.05 14.048"
                    className={style.close_button}
                >
                    <path d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z" fill="#d08080"/>
                </svg>
            </div>
            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>
                Login
            </p>
            <div className={style.line} style={{margin:"20px 0px"}}></div>
            <p style={{fontSize:"13px", width:"100%", textAlign:"center", marginBottom:"10px"}}>
                Login/Register with Metamask
            </p>
            <div className={`${style.grey_button} ${style.colored_button}`} style={{marginBottom:"20px"}}
                onClick={() => connectWallet(openPopup, RegisterPopup)}
            >
                <img src={"./images/svgs/metamask.svg"} alt="metamask-logo"
                    style={{width:"20px", marginRight:"8px"}}
                />
                <p>
                    Metamask
                </p>
            </div>
            <p style={{fontSize:"13px", width:"100%", textAlign:"center", marginBottom:"10px"}}>
                Login with Email & Password
            </p>
            <form onSubmit={() => {
                loginAccount({"email": emailRef.current.value, "password": passwordRef.current.value})
            }}>
                <div className={style.input_box} style={{marginBottom:"10px"}}>
                    <input placeholder="Email" type={"email"} maxLength={100} ref={emailRef} autoFocus/>
                </div>
                <div className={style.input_box} style={{marginBottom:"10px"}}>
                    <input placeholder="Password" type="password" maxLength={100} ref={passwordRef}/>
                </div>
                <div className={`${style.grey_button} ${style.colored_button}`} style={{marginBottom:"20px"}}
                    onClick={() => loginAccount({"email": emailRef.current.value, "password": passwordRef.current.value})}
                >
                    Login
                </div>
            </form>
            <p className={style.p_hover} style={{fontSize:"13px", width:"100%", textAlign:"center", margin:"0px"}}>
                Forgot Password
            </p>
        </div>
    )  
}

export default LoginPopupComponent;
