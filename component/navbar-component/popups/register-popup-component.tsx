import style from '../../../styles/component/popup-component/popup-content-style.module.scss';
import { validateAccount } from "../../../scripts/router/user/user-request";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import { closePopup } from "../../popup-component/popup-container-component";

const RegisterPopupComponent = (address: string) => {

    function validateUsername(username: any) {
        const re = /^[a-zA-Z0-9_-]*$/;
        return re.test(String(username).toLowerCase());
    }
    
    function validateEmail(email: any) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const validateInput = () => {
        let selector: any = document.getElementById("username-input");
        const username: any = selector.value.toLowerCase();;

        selector = document.getElementById("email-input");
        const email: any = selector.value.toLowerCase();

        selector = document.getElementById("password-input");
        const password: any = selector.value.toLowerCase();

        selector = document.getElementById("confirm-password-input");
        const confirm_password: any = selector.value.toLowerCase();

        if (username !== "" && email !== "" 
            && password !== "" && confirm_password !== "" 
            && username.length <= 16 && email.length <= 100 
            && ((password.length <= 100 && password.length >= 8) && (confirm_password.length <= 100 && confirm_password.length >= 8))
            && (password == confirm_password)
            && validateUsername(username) && validateEmail(email))
        {
            validateAccount({
                "username": username,
                "email": email,
                "password": password,
                "confirm_password": confirm_password
            })
        }
        else {
            if (username === ""){
                link_messageBoxShow("Username can't be null.", false)
            }
            else if (email === ""){
                link_messageBoxShow("Email can't be null.", false)
            }
            else if (password === ""){
                link_messageBoxShow("Password can't be null.", false)
            }
            else if (confirm_password === ""){
                link_messageBoxShow("Confirm Password can't be null.", false)
            }
            else if (username.length > 16){
                link_messageBoxShow("Username requires max character of 16.", false)
            }
            else if (email.length > 100){
                link_messageBoxShow("Username requires max character of 100.", false)
            }
            else if (password.length > 100 || password.length < 8){
                link_messageBoxShow("Password requires max character of 100, minimum of 8.", false)
            }
            else if (confirm_password.length > 100 || confirm_password.length < 8){
                link_messageBoxShow("Confirm Password requires max character of 100, minimum of 8.", false)
            }
            else if (password !== confirm_password){
                link_messageBoxShow("Passwords doesn't match.", false);
            }
            else if (validateUsername(username) == false){
                link_messageBoxShow("Username is invalid.", false)
            }
            else if (validateEmail(email) == false){
                link_messageBoxShow("Email is invalid.", false)
            }
            
        }
    }

    return (
        <div className={style.popup_content_root} style={{width:"100vw", maxWidth:"500px"}}>
            <div style={{width:"100%", marginBottom:"10px"}} onClick={() => closePopup()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.05" height="14.048" viewBox="0 0 14.05 14.048"
                    className={style.close_button}
                >
                    <path d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z" fill="#d08080"/>
                </svg>
            </div>
            <p style={{width:"100%", textAlign:"center"}}>
                Register
            </p>
            <div className={style.line} style={{margin:"20px 0px"}}></div>
            <p style={{fontSize:"13px", width:"100%", marginBottom:"10px"}}>
                Metamask Address
            </p>
            <div className={style.input_box} style={{marginBottom:"20px"}}>
                <img src={"./images/svgs/metamask.svg"} alt="metamask-logo"
                    style={{width:"20px", marginRight:"8px"}}
                />
                <p style={{fontSize:"14px"}}>
                    {
                        address
                    }
                </p>
            </div>
            <p style={{fontSize:"13px", width:"100%", marginBottom:"10px"}}>
                Username
            </p>
            <div className={style.input_box} style={{marginBottom:"20px"}}>
                <input placeholder="Username" maxLength={16} id="username-input"/>
            </div>
            <p style={{fontSize:"13px", width:"100%", marginBottom:"10px"}}>
                Email Address
            </p>
            <div className={style.input_box} style={{marginBottom:"20px"}}>
                <input placeholder="Email Address" maxLength={100} id="email-input" type={"email"}/>
            </div>
            <p style={{fontSize:"13px", width:"100%", marginBottom:"10px"}}>
                Password
            </p>
            <div className={style.input_box} style={{marginBottom:"20px"}}>
                <input placeholder="Password" type="password" maxLength={100} id="password-input"/>
            </div>
            <p style={{fontSize:"13px", width:"100%", marginBottom:"10px"}}>
                Confirm Password
            </p>
            <div className={style.input_box} style={{marginBottom:"30px"}}>
                <input placeholder="Confirm Password" type="password" maxLength={100} id="confirm-password-input"/>
            </div>
            <div className={`${style.grey_button} ${style.colored_button}`} onClick={() => validateInput()}>
                Continue
            </div>
        </div>
    );
}

export default RegisterPopupComponent;