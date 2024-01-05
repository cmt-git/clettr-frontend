import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "../../../pages/_app";
import { decimalFormatter } from "../../../scripts/misc/stringFormatter";
import { RootState } from "../../../scripts/redux/rootReducer";
import { logoutAccount } from "../../../scripts/router/user/user-request";
import style from "../../../styles/component/navbar-component/popup/account-dashboard-popup.module.scss";
import { openPopup } from "../../popup-component/popup-container-component";
import ProfilePopupComponent from "./profile-popup-component";
import WithdrawPopupComponent from "./withdraw-popup-component";

const AccountDashboardPopup = () => {
  const router = useRouter();

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  return (
    <div className={style.account_dashboard_popup_root}>
      <div className={style.account_dashboard_main}>
        <div className={style.account_dashboard_logged_in}>
          <img
            src="./images/svgs/profile-logo.svg"
            alt="profile-logo"
            style={{ width: "35px", margin: "15px 0px" }}
          />
          <p style={{ opacity: 0.5 }}>Logged in as</p>
          <p style={{ marginBottom: "10px" }}>{queryState.user.username}</p>
          <div className={style.points_div}>
            <p style={{ fontWeight: 600 }}>
              <span style={{ opacity: 0.5 }}>Rank</span> #1
            </p>
            <p>
              8,454,433 <span style={{ opacity: 0.5 }}>Total Gains</span>
            </p>
          </div>
          <div className={style.line} />
          <div className={style.account_dashboard_button_container}>
            <div
              className={`${style.colored_button} ${style.light_black_button}`}
              onClick={() => {
                openPopup(<WithdrawPopupComponent />);
              }}
            >
              <img
                src={"./images/svgs/clettr-token.svg"}
                alt="clettr-token"
                style={{ width: "20px", marginRight: "5px" }}
              />
              <p>
                {decimalFormatter(queryState.user_info.unclaimed_ettr)}{" "}
                <span style={{ opacity: "0.5" }}>
                  {decimalFormatter(
                    Number(queryState.user_info.unclaimed_ettr) *
                      Number(store.getState().tickerPriceState.value)
                  )}{" "}
                  {store.getState().currentCurrencyState.value.toUpperCase()}
                </span>
              </p>
            </div>
            <div
              className={`${style.colored_button} ${style.light_black_button}`}
              onClick={() => {
                openPopup(<ProfilePopupComponent />);
              }}
            >
              Profile
            </div>
            <div
              className={`${style.colored_button} ${style.light_black_button}`}
              onClick={() => router.push("/settings")}
            >
              Settings
            </div>
            <div
              className={`${style.colored_button} ${style.light_black_button}`}
              onClick={() => router.push("/reports")}
              style={{}}
            >
              Reports
            </div>
          </div>
          <div className={style.line} />
          <div
            className={`${style.colored_button} ${style.red_button}`}
            onClick={() => logoutAccount()}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboardPopup;
