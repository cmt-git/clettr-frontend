import { useEffect, useState } from "react";
import style from "../../styles/component/settings-component/settings-block-component.module.scss";
import AccountSettingsComponent from "./popup/account-settings-component";
import ActivitySettingsComponent from "./popup/activity-settings-component";
import EmailSettingsComponent from "./popup/email-settings-component";
import PassportSettingsComponent from "./popup/password-settings-component";
import SecuritySettingsComponent from "./popup/security-settings-component";
import SocialMediaSettingsComponent from "./popup/social-media-settings-component";
import { logoutAccount } from "../../scripts/router/user/user-request";
import { store } from "../../pages/_app";

export let link_setSettingsPopupIndex: any = null;

const SettingsBlockComponent = () => {
  const [settingsPopupIndex, setSettingsPopupIndex]: any = useState(1);
  link_setSettingsPopupIndex = setSettingsPopupIndex;

  return (
    <div className={style.settings_block_component_root}>
      <div>
        <div className={style.settings_block_navbar}>
          <p style={{ fontSize: "16px" }}>Settings</p>
          <div className={style.line} />
          <div
            className={
              settingsPopupIndex == 1
                ? style.settings_dashboard_selected
                : style.settings_dashboard_button
            }
            onClick={() => setSettingsPopupIndex(1)}
          >
            <div />
            <p>Account</p>
          </div>
          <div
            className={
              settingsPopupIndex == 2
                ? style.settings_dashboard_selected
                : style.settings_dashboard_button
            }
            onClick={() => setSettingsPopupIndex(2)}
          >
            <div />
            <p>Email</p>
          </div>
          <div
            className={
              settingsPopupIndex == 3
                ? style.settings_dashboard_selected
                : style.settings_dashboard_button
            }
            onClick={() => setSettingsPopupIndex(3)}
          >
            <div />
            <p>Password</p>
          </div>
          {/* <div className={settingsPopupIndex == 4 ? style.settings_dashboard_selected : style.settings_dashboard_button}
                        onClick={() => setSettingsPopupIndex(4)}
                    >
                        <div/>
                        <p>
                            Social Media
                        </p>
                    </div> */}
          {/* <div
            className={
              settingsPopupIndex == 5
                ? style.settings_dashboard_selected
                : style.settings_dashboard_button
            }
            onClick={() => setSettingsPopupIndex(5)}
          >
            <div />
            <p>Security</p>
          </div> */}
          {/* <div
            className={
              settingsPopupIndex == 6
                ? style.settings_dashboard_selected
                : style.settings_dashboard_button
            }
            onClick={() => setSettingsPopupIndex(6)}
          >
            <div />
            <p>Activity</p>
          </div> */}
          <div className={style.line} />
          <div
            className={`${style.colored_button} ${style.red_button}`}
            onClick={() => logoutAccount()}
          >
            Logout
          </div>
        </div>
      </div>
      <div>
        <div className={style.settings_popup_container}>
          {settingsPopupIndex == 1 ? (
            <AccountSettingsComponent />
          ) : settingsPopupIndex == 2 ? (
            <EmailSettingsComponent />
          ) : settingsPopupIndex == 3 ? (
            <PassportSettingsComponent />
          ) : settingsPopupIndex == 4 ? (
            <SocialMediaSettingsComponent />
          ) : settingsPopupIndex == 5 ? (
            <SecuritySettingsComponent />
          ) : settingsPopupIndex == 6 ? (
            <ActivitySettingsComponent />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SettingsBlockComponent;
