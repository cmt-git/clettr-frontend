import style from "../../../styles/component/settings-component/popup/settings-popup-component.module.scss";
import PageBlockComponent from "../../pageblock-component";

const ActivitySettingsComponent = () => {
  const activityBlock = () => {
    return (
      <div className={style.session_block}>
        <div className={style.session_info_bar}>
          <p className={style.transparent_text}>Time (UTC)</p>
          <p>May 16, 2022 | 7:24:34 PM</p>
        </div>
        <div
          className={style.session_info_bar}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <p className={style.transparent_text}>Description</p>
          <p style={{ marginTop: "10px" }}>
            Withdrawed 358 Ettr to BSC Address
            0xd6077eA337b8c1B3EFd929EAA2c530C05Afd5136
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={style.settings_popup_root}>
      <div className={style.settings_popup_header}>
        <p>Activity</p>
        <p className={style.transparent_text}>
          Username <span>test-</span>
        </p>
      </div>
      <div className={style.line} />
      <div className={style.session_container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p className={style.transparent_text}>Activity</p>
          <p>Last 30 days</p>
        </div>
        <div className={style.session_block_container}>
          {(() => {
            let arr_session_block: any = [];

            for (let i = 0; i < 10; i++) {
              arr_session_block.push(activityBlock());
            }

            return arr_session_block;
          })()}
        </div>
        <div style={{ marginTop: "-15px" }}>
          <PageBlockComponent cut="settings" />
        </div>
      </div>
    </div>
  );
};

export default ActivitySettingsComponent;
