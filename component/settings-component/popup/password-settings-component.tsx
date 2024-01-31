import style from "../../../styles/component/settings-component/popup/settings-popup-component.module.scss";

const PassportSettingsComponent = () => {
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
          <input type="password" placeholder="Old Password" />
        </div>
      </div>
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>New Password</p>
          <p>&nbsp;</p>
        </div>
        <div className={style.input_box}>
          <input type="password" placeholder="New Password" />
        </div>
      </div>
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Confirm Password</p>
          <p>&nbsp;</p>
        </div>
        <div className={style.input_box}>
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <div
        className={`${style.colored_button} ${style.light_grey_button}`}
        style={{ marginTop: "15px" }}
      >
        Update
      </div>
    </div>
  );
};

export default PassportSettingsComponent;
