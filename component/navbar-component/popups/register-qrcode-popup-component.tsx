import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../scripts/redux/rootReducers";
import { register2FA } from "../../../scripts/router/user/user-request";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import { closePopup } from "../../popup-component/popup-container-component";

const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

const RegisterQRCodePopupComponent = (props: any) => {
  const codeRef: any = { useRef };
  const [secretCode, setSecretCode]: any = useState(null);
  const [qrImg, setQrImg]: any = useState(null);

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const colorThemeState = useSelector((state: RootState) => {
    return state.colorThemeState.value;
  });

  useEffect(() => {
    const secret = speakeasy.generateSecret({
      name: `Clettr | ${
        queryState.user != null ? queryState.user.username : props.username
      }`,
    });
    setSecretCode(secret["ascii"]);
    qrcode.toDataURL(secret.otpauth_url, (err: any, data: any) => {
      setQrImg(data);
    });
  }, []);

  return (
    <div
      className={style.popup_content_root}
      style={{ width: "100vw", maxWidth: "500px" }}
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
        Register
      </p>
      <div className={style.line} style={{ margin: "20px 0px" }}></div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={qrImg}
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "6px",
            backgroundColor: colorThemeState == "dark" ? "white" : "black",
          }}
        />
        <p style={{ marginTop: "20px" }}>
          Setup 2FA (Two-factor Authentication)
        </p>
      </div>
      <p
        style={{
          color: "#80808E",
          marginTop: "10px",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        Please scan the QR code with your authentication app on mobile phone.
        This step is necessary to make your account more secure!
      </p>
      <p
        style={{
          fontSize: "13px",
          width: "100%",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Authentication Code
      </p>
      <div className={style.input_box} style={{ marginBottom: "20px" }}>
        <input placeholder="Code" ref={codeRef} maxLength={6} />
      </div>
      <div
        className={`${style.grey_button} ${style.colored_button}`}
        onClick={() =>
          register2FA({
            secret: secretCode,
            authentication_code: codeRef.current.value,
          })
        }
      >
        Confirm
      </div>
      {props.type == 1
        ? [
            <p
              style={{
                color: "#80808E",
                marginTop: "30px",
                marginBottom: "20px",
                textAlign: "center",
                fontSize: "13px",
              }}
            >
              ⚠️ Warning skipping this step will make your account least secure!
            </p>,
            <div
              className={`${style.red_button} ${style.colored_button}`}
              onClick={() => {
                link_messageBoxShow(
                  "Account has been registered, Please log in.",
                  true
                );
                closePopup();
              }}
            >
              Skip
            </div>,
          ]
        : null}
    </div>
  );
};

export default RegisterQRCodePopupComponent;
