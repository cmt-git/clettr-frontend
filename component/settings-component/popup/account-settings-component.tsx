import { useSelector } from "react-redux";
import style from "../../../styles/component/settings-component/popup/settings-popup-component.module.scss";
import { link_setSettingsPopupIndex } from "../settings-block-component";
import { RootState } from "../../../scripts/redux/rootReducer";
import { useRef } from "react";
import { usernameModify } from "../../../scripts/router/user/user-request";

function handleUpdate(_data: {
  username: string;
  password: string;
  bsc_address: string;
}) {
  usernameModify({
    username: _data.username,
    password: _data.password,
    bsc_address: _data.bsc_address,
  });
}
const AccountSettingsComponent = () => {
  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const usernameRef: any = useRef();
  const passwordRef: any = useRef();

  return (
    <div className={style.settings_popup_root}>
      <div className={style.settings_popup_header}>
        <p>Account</p>
        <p className={style.transparent_text}>
          Username <span>{queryState?.user?.username}</span>
        </p>
      </div>
      <div className={style.line} />
      <div className={style.input_container}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Blockchain</p>
          <p>Binance Smart Chain</p>
        </div>
        <div className={style.input_box}>
          <img
            src={"./images/svgs/bsc-chain-logo.svg"}
            alt="bsc-chain-logo"
            style={{ width: "20px", marginRight: "5px" }}
          />
          <p>{queryState?.user?.bsc_address}</p>
        </div>
      </div>
      <div className={style.line} />
      <div className={style.input_container}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Email</p>
          <p>{queryState?.user?.email}</p>
        </div>
        <div
          className={`${style.colored_button} ${style.light_grey_button}`}
          style={{ marginTop: "5px" }}
          onClick={() => link_setSettingsPopupIndex(2)}
        >
          Change
        </div>
      </div>
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Password</p>
          <p>&nbsp;</p>
        </div>
        <div
          className={`${style.colored_button} ${style.light_grey_button}`}
          style={{ marginTop: "5px" }}
          onClick={() => link_setSettingsPopupIndex(3)}
        >
          Change
        </div>
      </div>
      <div className={style.line} />
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Username</p>
          <p>{queryState?.user?.username}</p>
        </div>
        <div className={style.input_box}>
          <input type="text" placeholder="Username" ref={usernameRef} />
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
        onClick={() => {
          handleUpdate({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            bsc_address: queryState?.user?.bsc_address,
          });
        }}
      >
        Update
      </div>
    </div>
  );
};

export default AccountSettingsComponent;
