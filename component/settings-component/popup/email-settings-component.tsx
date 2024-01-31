import style from "../../../styles/component/settings-component/popup/settings-popup-component.module.scss";

const EmailSettingsComponent = () => {
  return (
    <div className={style.settings_popup_root}>
      <div className={style.settings_popup_header}>
        <p>Email</p>
        <p className={style.transparent_text}>
          Username <span>test-</span>
        </p>
      </div>
      <div className={style.line} />
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Email</p>
          <p>test@gmail.com</p>
        </div>
        <div className={style.input_box}>
          <input type="text" placeholder="Email Address" />
        </div>
      </div>
      <div className={style.input_container} style={{ marginTop: "15px" }}>
        <div className={style.input_info}>
          <p className={style.transparent_text}>Password</p>
          <p>&nbsp;</p>
        </div>
        <div className={style.input_box}>
          <input type="password" placeholder="Password" />
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

export default EmailSettingsComponent;
