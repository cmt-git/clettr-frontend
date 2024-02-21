import { useRef } from "react";
import style from "../../../styles/component/settings-component/popup/settings-popup-component.module.scss";
import { passwordModify } from "../../../scripts/router/user/user-request";
import { useSelector } from "react-redux";
import { RootState } from "../../../scripts/redux/rootReducer";

const PassportSettingsComponent = () => {
  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const oldPasswordRef: any = useRef();
  const newPasswordRef: any = useRef();
  const confirmPasswordRef: any = useRef();

  return (
    <div className={style.settings_popup_root}>
      <div className={style.settings_popup_header}>
        <p>Password</p>
        <p className={style.transparent_text}>
          Username <span>test-</span>
        </p>
      </div>
      <div className={style.line} />
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Old Password</p>
          <p>&nbsp;</p>
        </div>
        <div className={style.input_box}>
          <input
            type="password"
            placeholder="Old Password"
            ref={oldPasswordRef}
          />
        </div>
      </div>
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>New Password</p>
          <p>&nbsp;</p>
        </div>
        <div className={style.input_box}>
          <input
            type="password"
            placeholder="New Password"
            ref={newPasswordRef}
          />
        </div>
      </div>
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Confirm Password</p>
          <p>&nbsp;</p>
        </div>
        <div className={style.input_box}>
          <input
            type="password"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
        </div>
      </div>
      <div
        className={`${style.colored_button} ${style.light_grey_button}`}
        style={{ marginTop: "15px" }}
        onClick={() => {
          passwordModify({
            old_password: oldPasswordRef.current.value,
            new_password: newPasswordRef.current.value,
            confirm_password: confirmPasswordRef.current.value,
            bsc_address: queryState?.user?.bsc_address,
          });
        }}
      >
        Update
      </div>
    </div>
  );
};

export default PassportSettingsComponent;
