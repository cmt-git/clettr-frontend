import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import { useEffect, useRef, useState } from "react";
import {
  changePopup,
  closePopup,
  openPopup,
} from "../popup-container-component";
import {
  requestAuthCode,
  requestEmailCode,
} from "../../../scripts/router/user/user-request";
import { useSelector } from "react-redux";
import { RootState } from "../../../scripts/redux/rootReducer";

const AuthenticationPopupComponent = (props: any) => {
  let email =
    props.json["email"].charAt(0) +
    "***@***" +
    props.json["email"]
      .split("@")[1]
      .split(".")[0]
      .charAt(props.json["email"].split("@")[1].split(".")[0].length - 1) +
    ".com";
  let new_email =
    props.type === 3
      ? props.json["new_email"].charAt(0) +
        "***@***" +
        props.json["new_email"]
          .split("@")[1]
          .split(".")[0]
          .charAt(
            props.json["new_email"].split("@")[1].split(".")[0].length - 1
          ) +
        ".com"
      : "";
  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const codeRef: any = useRef();
  const authenticatorRef: any = useRef();
  const emailRef: any = useRef();

  const [seconds, setSeconds]: any = useState(60);
  const startCountDown = async () => {
    setSeconds(60);
    for (let i = 0; i < 60; i++) {
      setSeconds((prevState: any) => prevState - 1);
      await sleep(1000);
    }
  };

  const colorThemeState = useSelector((state: RootState) => {
    return state.colorThemeState.value;
  });

  useEffect(() => {
    startCountDown();
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
      <p style={{ width: "100%", textAlign: "center" }}>Authentication</p>
      <div className={style.line} style={{ margin: "15px 0px" }} />
      {props.type !== 3
        ? [
            <p style={{ color: "#777D8C", marginBottom: "20px" }}>
              For this request to be processed, we need to confirm it is you. We
              have sent you an authentication code in your email&nbsp;
              <span
                style={{ color: colorThemeState == "dark" ? "white" : "black" }}
              >
                {email}
              </span>
            </p>,
            <div>
              <p
                style={{
                  fontSize: "13px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                Authentication Code
              </p>
              <div
                className={`${style.input_box} ${style.authentication_box}`}
                style={{ marginBottom: "20px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.736"
                  height="9.025"
                  viewBox="0 0 22.736 9.025"
                  style={{
                    width: "25px",
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                >
                  <path
                    d="M8.825-3.182A4.517,4.517,0,0,1,4.512,0,4.514,4.514,0,0,1,0-4.512,4.514,4.514,0,0,1,4.512-9.025,4.517,4.517,0,0,1,8.825-5.843H22.111a.624.624,0,0,1,.441.183.624.624,0,0,1,.183.441v1.412a.624.624,0,0,1-.183.442.624.624,0,0,1-.441.183h-.6V-.465A.464.464,0,0,1,21.048,0H18.975a.465.465,0,0,1-.464-.465V-3.182H17.323V-.465A.465.465,0,0,1,16.859,0H14.785a.464.464,0,0,1-.464-.465V-3.182ZM4.512-7.258A2.747,2.747,0,0,1,7.258-4.512,2.747,2.747,0,0,1,4.512-1.766,2.747,2.747,0,0,1,1.766-4.512,2.747,2.747,0,0,1,4.512-7.258Z"
                    transform="translate(0 9.025)"
                    fill="#6b6d7a"
                    fill-rule="evenodd"
                  />
                </svg>
                <input
                  placeholder="Authentication Code"
                  maxLength={7}
                  style={{ paddingLeft: "0px", marginRight: "20px" }}
                  ref={codeRef}
                />
              </div>
            </div>,
          ]
        : [
            <p style={{ color: "#777D8C", marginBottom: "20px" }}>
              Please enter the authentication code we sent to your designated
              new email&nbsp;
              <span
                style={{ color: colorThemeState == "dark" ? "white" : "black" }}
              >
                {new_email}
              </span>
            </p>,
            <div>
              <p
                style={{
                  fontSize: "13px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                Authentication Code
              </p>
              <div
                className={`${style.input_box} ${style.authentication_box}`}
                style={{ marginBottom: "20px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.736"
                  height="9.025"
                  viewBox="0 0 22.736 9.025"
                  style={{
                    width: "25px",
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                >
                  <path
                    d="M8.825-3.182A4.517,4.517,0,0,1,4.512,0,4.514,4.514,0,0,1,0-4.512,4.514,4.514,0,0,1,4.512-9.025,4.517,4.517,0,0,1,8.825-5.843H22.111a.624.624,0,0,1,.441.183.624.624,0,0,1,.183.441v1.412a.624.624,0,0,1-.183.442.624.624,0,0,1-.441.183h-.6V-.465A.464.464,0,0,1,21.048,0H18.975a.465.465,0,0,1-.464-.465V-3.182H17.323V-.465A.465.465,0,0,1,16.859,0H14.785a.464.464,0,0,1-.464-.465V-3.182ZM4.512-7.258A2.747,2.747,0,0,1,7.258-4.512,2.747,2.747,0,0,1,4.512-1.766,2.747,2.747,0,0,1,1.766-4.512,2.747,2.747,0,0,1,4.512-7.258Z"
                    transform="translate(0 9.025)"
                    fill="#6b6d7a"
                    fill-rule="evenodd"
                  />
                </svg>
                <input
                  placeholder="Authentication Code"
                  maxLength={7}
                  style={{ paddingLeft: "0px", marginRight: "20px" }}
                  ref={codeRef}
                />
              </div>
            </div>,
          ]}
      {props.type == 2 || props.type == 3
        ? [
            <p style={{ color: "#777D8C", marginBottom: "20px" }}>
              Please enter authentication code from your authenticator app
            </p>,
            <div>
              <p
                style={{
                  fontSize: "13px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                Authenticator Code
              </p>
              <div
                className={`${style.input_box} ${style.authentication_box}`}
                style={{ marginBottom: "20px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.736"
                  height="9.025"
                  viewBox="0 0 22.736 9.025"
                  style={{
                    width: "25px",
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                >
                  <path
                    d="M8.825-3.182A4.517,4.517,0,0,1,4.512,0,4.514,4.514,0,0,1,0-4.512,4.514,4.514,0,0,1,4.512-9.025,4.517,4.517,0,0,1,8.825-5.843H22.111a.624.624,0,0,1,.441.183.624.624,0,0,1,.183.441v1.412a.624.624,0,0,1-.183.442.624.624,0,0,1-.441.183h-.6V-.465A.464.464,0,0,1,21.048,0H18.975a.465.465,0,0,1-.464-.465V-3.182H17.323V-.465A.465.465,0,0,1,16.859,0H14.785a.464.464,0,0,1-.464-.465V-3.182ZM4.512-7.258A2.747,2.747,0,0,1,7.258-4.512,2.747,2.747,0,0,1,4.512-1.766,2.747,2.747,0,0,1,1.766-4.512,2.747,2.747,0,0,1,4.512-7.258Z"
                    transform="translate(0 9.025)"
                    fill="#6b6d7a"
                    fill-rule="evenodd"
                  />
                </svg>
                <input
                  placeholder="Authenticator Code"
                  maxLength={6}
                  style={{ paddingLeft: "0px", marginRight: "20px" }}
                  ref={authenticatorRef}
                />
              </div>
            </div>,
          ]
        : null}
      {props.type == 3
        ? [
            <p style={{ color: "#777D8C", marginBottom: "20px" }}>
              Please enter the 50 character authentication code we sent from
              your current email&nbsp;
              <span
                style={{ color: colorThemeState == "dark" ? "white" : "black" }}
              >
                {email}
              </span>
            </p>,
            <div>
              <p
                style={{
                  fontSize: "13px",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                Authentication Code
              </p>
              <div
                className={`${style.input_box} ${style.authentication_box}`}
                style={{ marginBottom: "20px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.736"
                  height="9.025"
                  viewBox="0 0 22.736 9.025"
                  style={{
                    width: "25px",
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                >
                  <path
                    d="M8.825-3.182A4.517,4.517,0,0,1,4.512,0,4.514,4.514,0,0,1,0-4.512,4.514,4.514,0,0,1,4.512-9.025,4.517,4.517,0,0,1,8.825-5.843H22.111a.624.624,0,0,1,.441.183.624.624,0,0,1,.183.441v1.412a.624.624,0,0,1-.183.442.624.624,0,0,1-.441.183h-.6V-.465A.464.464,0,0,1,21.048,0H18.975a.465.465,0,0,1-.464-.465V-3.182H17.323V-.465A.465.465,0,0,1,16.859,0H14.785a.464.464,0,0,1-.464-.465V-3.182ZM4.512-7.258A2.747,2.747,0,0,1,7.258-4.512,2.747,2.747,0,0,1,4.512-1.766,2.747,2.747,0,0,1,1.766-4.512,2.747,2.747,0,0,1,4.512-7.258Z"
                    transform="translate(0 9.025)"
                    fill="#6b6d7a"
                    fill-rule="evenodd"
                  />
                </svg>
                <input
                  placeholder="Authenticator Code"
                  maxLength={50}
                  style={{ paddingLeft: "0px", marginRight: "20px" }}
                  ref={emailRef}
                />
              </div>
            </div>,
          ]
        : null}
      <div
        className={`
                ${seconds == 0 ? style.grey_button : style.red_button}

                ${style.colored_button}
            `}
        style={{ marginBottom: "15px" }}
        onClick={() => {
          if (seconds == 0) {
            requestAuthCode(props.json["email"]);
            startCountDown();
          }
        }}
      >
        Request Authentication Code&nbsp;
        {seconds > 0 ? `(${seconds}s)` : null}
      </div>
      {props.type == 2 ? (
        <div
          className={`${style.grey_button} ${style.colored_button}`}
          onClick={() =>
            props.request({
              ...props.json,
              authentication_code: codeRef.current.value,
              authenticator_code: authenticatorRef.current.value,
            })
          }
        >
          Continue
        </div>
      ) : props.type == 3 ? (
        <div
          className={`${style.grey_button} ${style.colored_button}`}
          onClick={() =>
            props.request({
              ...props.json,
              authentication_code: codeRef.current.value,
              authenticator_code: authenticatorRef.current.value,
              email_code: emailRef.current.value,
            })
          }
        >
          Continue
        </div>
      ) : (
        <div
          className={`${style.grey_button} ${style.colored_button}`}
          onClick={() =>
            props.request({
              ...props.json,
              authentication_code: codeRef.current.value,
            })
          }
        >
          Continue
        </div>
      )}
    </div>
  );
};

export default AuthenticationPopupComponent;

export const authenticatePopup = (request: any, json: any) => {
  changePopup(<AuthenticationPopupComponent json={json} request={request} />);
};

export const openAuthenticatePopup = (
  request: any,
  json: any,
  type: number
) => {
  if (type !== 3) {
    requestAuthCode(json.email);
  } else {
    requestEmailCode({
      email: json.email,
      new_email: json.new_email,
      password: json.password,
    });
  }
  openPopup(
    <AuthenticationPopupComponent json={json} request={request} type={type} />
  );
};
