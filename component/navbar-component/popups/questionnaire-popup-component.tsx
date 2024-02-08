import { useRef } from "react";
import {
  connectWallet,
  loginAccount,
} from "../../../scripts/router/user/user-request";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import {
  closePopup,
  openPopup,
} from "../../popup-component/popup-container-component";
import RegisterPopup from "./register-popup-component";
import SelectBoxComponent from "../../select-box-component/select-box-component";

export default function QuestionnairePopupComponent() {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  return (
    <div
      className={style.popup_content_root}
      style={{
        width: "100vw",
        maxWidth: "500px",
        gap: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{ width: "100%", marginBottom: "10px" }}
        onClick={() => closePopup()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.05"
          height="14.048"
          viewBox="0 0 14.05 14.048"
          className={style.close_button}
        >
          <path
            d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z"
            fill="#d08080"
          />
        </svg>
      </div>
      <p style={{ width: "100%", textAlign: "center", fontSize: "15px" }}>
        Questionnaire
      </p>
      <p>
        1. How many years have you been actively involved in the cryptocurrency
        space?
      </p>
      <SelectBoxComponent
        style={style}
        data={["0-1 Years", "2-5 Years", "5+ Years"]}
      />
      <p>
        2. On a scale of 1 to 10, how would you rate your overall knowledge of
        cryptocurrencies and blockchain technology?
      </p>
      <SelectBoxComponent
        style={style}
        data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
      />
      <p>
        3. Have you ever participated in cryptocurrency trading or investment
        activities?
      </p>
      <SelectBoxComponent style={style} data={["Yes", "No"]} />
      <p>
        4. Do you understand the concept of private keys and public addresses in
        cryptocurrency transactions?
      </p>
      <SelectBoxComponent style={style} data={["Yes", "No"]} />
      <p>
        5. How familiar are you with the potential risks associated with
        investing in cryptocurrencies, such as market volatility and regulatory
        uncertainties?
      </p>
      <SelectBoxComponent
        style={style}
        data={["No Idea", "Some Idea", "Extensive Idea"]}
      />
      <p>
        6. Have you experienced any significant gains or losses in your
        cryptocurrency portfolio? If comfortable, please share a brief example.
      </p>
      <SelectBoxComponent style={style} data={["Yes", "No"]} />
      <p>
        7. How often do you stay updated on cryptocurrency market trends, news,
        and developments?
      </p>
      <SelectBoxComponent style={style} data={["Yes", "Sometimes", "No"]} />
      <p>
        8. Are you aware of and understand the security measures necessary for
        safeguarding your cryptocurrency holdings, such as using hardware
        wallets and implementing two-factor authentication?
      </p>
      <SelectBoxComponent style={style} data={["Yes", "No"]} />
      <p>
        9. This crypto game does not guarantee 100% profit, and may pose some
        risk to your investment. Do you still wish to continue?
      </p>
      <SelectBoxComponent style={style} data={["Yes", "No"]} />
      <div className={`${style.colored_button} ${style.grey_button}`}>
        Continue
      </div>
      {/* <p
        style={{
          fontSize: "13px",
          width: "100%",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Login/Register with Metamask
      </p>
      <div
        className={`${style.grey_button} ${style.colored_button}`}
        style={{ marginBottom: "20px" }}
        onClick={() => connectWallet(openPopup, RegisterPopup)}
      >
        <img
          src={"./images/svgs/metamask.svg"}
          alt="metamask-logo"
          style={{ width: "20px", marginRight: "8px" }}
        />
        <p>Metamask</p>
      </div>
      <p
        style={{
          fontSize: "13px",
          width: "100%",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Login with Email & Password
      </p>
      <form
        onSubmit={() => {
          loginAccount({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          });
        }}
      >
        <div className={style.input_box} style={{ marginBottom: "10px" }}>
          <input
            placeholder="Email"
            type={"email"}
            maxLength={100}
            ref={emailRef}
            autoFocus
          />
        </div>
        <div className={style.input_box} style={{ marginBottom: "10px" }}>
          <input
            placeholder="Password"
            type="password"
            maxLength={100}
            ref={passwordRef}
          />
        </div>
        <div
          className={`${style.grey_button} ${style.colored_button}`}
          style={{ marginBottom: "20px" }}
          onClick={() =>
            loginAccount({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            })
          }
        >
          Login
        </div>
      </form>
      <p
        className={style.p_hover}
        style={{
          fontSize: "13px",
          width: "100%",
          textAlign: "center",
          margin: "0px",
        }}
      >
        Forgot Password
      </p> */}
    </div>
  );
}
