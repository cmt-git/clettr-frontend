import { useSelector } from "react-redux";
import style from "../../../styles/component/settings-component/popup/settings-popup-component.module.scss";
import { RootState } from "../../../scripts/redux/rootReducer";
import { useRef } from "react";
import {
  authGenerate,
  emailModify,
} from "../../../scripts/router/user/user-request";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import { openPopup } from "../../popup-component/popup-container-component";
import AuthenticationPopupComponent from "../../popup-component/popups/authenticationPopup-component";

const EmailSettingsComponent = () => {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  return (
    <div className={style.settings_popup_root}>
      <div className={style.settings_popup_header}>
        <p>Email</p>
        <p className={style.transparent_text}>
          Username <span>{queryState?.user?.username}</span>
        </p>
      </div>
      <div className={style.line} />
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Email</p>
          <p>{queryState?.user?.email}</p>
        </div>
        <div className={style.input_box}>
          <input type="text" placeholder="Email Address" ref={emailRef} />
        </div>
      </div>
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Password</p>
          <p>&nbsp;</p>
        </div>
        <div className={style.input_box}>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
      </div>
      <div
        className={`${style.colored_button} ${style.light_grey_button}`}
        style={{ marginTop: "15px" }}
        onClick={async () => {
          if (passwordRef.current.value && emailRef.current.value) {
            const auth = await authGenerate({
              email: emailRef.current.value,
            });

            link_messageBoxShow(auth.message, auth.success);
            if (auth.success == true) {
              openPopup(
                <AuthenticationPopupComponent
                  json={{
                    email: emailRef.current.value,
                    new_email: emailRef.current.value,
                  }}
                  request={async (_data: any) => {
                    await emailModify({
                      email: emailRef.current.value,
                      bsc_address: queryState?.user?.bsc_address,
                      ..._data,
                    });
                  }}
                  type={0}
                />
              );
            }
          } else {
            link_messageBoxShow("Email and Password must be valid.", false);
          }
        }}
      >
        Update
      </div>
    </div>
  );
};

export default EmailSettingsComponent;
