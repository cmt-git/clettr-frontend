import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../scripts/redux/rootReducer";
import style from "../../styles/component/navbar-component/navbar-component-style.module.scss";
import { openPopup } from "../popup-component/popup-container-component";
import SupportPopupComponent from "./popups/support-popup-component";
import AccountDashboardPopup from "./popups/account-dashboard-popup";
import EnergyDashboardPopup from "./popups/energy-dashboard-popup";
import { useRouter } from "next/router";
import LeaderboardPopupComponent from "./popups/leaderboard-popup-component";
import SwitchCurrencyPopupComponent from "./popups/switch-currency-popup-component";
import LoginPopupComponent from "./popups/login-popup-component";
import PlayPopupComponent from "../play-component/popups/play-popup-component";
import NavbarPriceCounterComponent from "./subcomponents/navbar-price-counter-component";
import { store } from "../../pages/_app";
import { link_messageBoxShow } from "../messagebox-component/messagebox-component";
import { getFormattedTime } from "../../scripts/misc/stringFormatter";
import { SetContracts } from "../../scripts/misc/contractManager";

const NavbarComponent = () => {
  const router = useRouter();

  const [popupIndex, setPopupIndex]: any = useState(null);

  const ref: any = [useRef(), useRef()]; // -> [0] = Beastgems, [1] Account
  const buttonRef: any = [useRef(), useRef()]; // -> [0] = Beastgems, [1] Account

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const loggedState = useSelector((state: RootState) => {
    return state.loggedState.value;
  });

  const colorThemeState = useSelector((state: RootState) => {
    return state.colorThemeState.value;
  });

  useEffect(() => {
    SetContracts();

    if (localStorage.getItem("selected-currency") == null) {
      localStorage.setItem("selected-currency", "usd");
    }
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (popupIndex != null) {
        if (popupIndex == 1) {
          if (
            ref[0].current &&
            !ref[0].current.contains(e.target) &&
            !buttonRef[0].current.contains(e.target)
          ) {
            setPopupIndex(0);
          }
        }

        if (popupIndex == 2) {
          if (
            ref[1].current &&
            !ref[1].current.contains(e.target) &&
            !buttonRef[1].current.contains(e.target)
          ) {
            setPopupIndex(0);
          }
        }
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });

  //? energy refill timer ⤵
  const [currentTime, setCurrentTime]: any = useState(new Date().getTime());
  useEffect(() => {
    setTimeout(() => {
      const formattedTime = getFormattedTime(currentTime);
      if (formattedTime == "00:00:00") {
        setCurrentTime(new Date().getTime());
      } else {
        setCurrentTime(currentTime + 1000);
      }
    }, 1000);
  }, [currentTime]);
  //? energy refill timer ⤴

  return (
    <div className={style.navbar_component_root}>
      {loggedState ? (
        <div className={style.navbar_component_main_container}>
          <div className={style.navbar_component_left_container}>
            <NavbarPriceCounterComponent />
            <div
              className={style.logo_container}
              onClick={() => router.push("/")}
            >
              <img
                src={
                  colorThemeState == "dark"
                    ? "/images/svgs/clettr-logo.svg"
                    : "/images/svgs/clettr-dark-logo.svg"
                }
                alt="clettr-logo"
              />
            </div>
            <p
              className={style.p_hover}
              style={
                router.asPath.toString().split("/play")[1] == ""
                  ? {
                      color:
                        colorThemeState == "dark"
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(0, 0, 0, 1)",
                      cursor: "default",
                    }
                  : {}
              }
              onClick={() => {
                if (
                  store.getState().queryState.value.user_set != null &&
                  store.getState().queryState.value.user_set.user_set[0] != null
                ) {
                  openPopup(<PlayPopupComponent />);
                } else {
                  link_messageBoxShow(
                    "Please create a set before playing.",
                    false
                  );
                }
              }}
            >
              Play
            </p>
            <p
              className={style.p_hover}
              style={
                router.asPath.toString().split("/inventory")[1] == ""
                  ? {
                      color:
                        colorThemeState == "dark"
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(0, 0, 0, 1)",
                      cursor: "default",
                    }
                  : {}
              }
              onClick={() => router.push("/inventory")}
            >
              Inventory
            </p>
            <p
              className={style.p_hover}
              style={
                router.asPath.toString().split("/marketplace")[1] == ""
                  ? {
                      color:
                        colorThemeState == "dark"
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(0, 0, 0, 1)",
                      cursor: "default",
                    }
                  : {}
              }
              onClick={() => router.push("/marketplace")}
            >
              Marketplace
            </p>
            <p
              className={style.p_hover}
              style={
                router.asPath.toString().split("/load")[1] == ""
                  ? {
                      color:
                        colorThemeState == "dark"
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(0, 0, 0, 1)",
                      cursor: "default",
                    }
                  : {}
              }
              onClick={() => router.push("/load")}
            >
              Load
            </p>
            <p
              className={style.p_hover}
              onClick={() => openPopup(<LeaderboardPopupComponent />)}
            >
              Leaderboards
            </p>
          </div>
          <div className={style.navbar_component_right_container}>
            <p
              className={style.p_hover}
              style={
                router.asPath.toString().split("/docs")[1] == ""
                  ? {
                      color:
                        colorThemeState == "dark"
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(0, 0, 0, 1)",
                      cursor: "default",
                    }
                  : {}
              }
              onClick={() => router.push("/docs")}
            >
              Docs
            </p>
            <p
              className={style.p_hover}
              onClick={() => openPopup(<SupportPopupComponent />)}
            >
              Support
            </p>
            <div
              className={style.energy_container}
              onClick={() => setPopupIndex(popupIndex != 1 ? 1 : null)}
              ref={buttonRef[0]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.546"
                height="58.389"
                viewBox="0 0 40.546 58.389"
              >
                <g data-name="Group 6" transform="translate(0 58.389)">
                  <path
                    d="M25.073-58.389,0-23.127l17.52.188L15.473,0,40.546-35.367H23.025Z"
                    fill="#ffac05"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
              <p style={{ margin: "0px 5px", marginRight: "10px" }}>
                {queryState.user_info.current_energy}/
                {queryState.user_info.max_energy}
              </p>
              <p style={{ opacity: 0.5, width: "130px", textAlign: "left" }}>
                Resets In {getFormattedTime(currentTime)}
              </p>
            </div>
            <img
              onClick={() => setPopupIndex(popupIndex != 2 ? 2 : null)}
              ref={buttonRef[1]}
              className={style.profile_button}
              src="./images/svgs/profile-logo.svg"
              alt="profile-logo"
            />
            {popupIndex == 1 ? (
              <div ref={ref[0]}>
                <EnergyDashboardPopup />
              </div>
            ) : popupIndex == 2 ? (
              <div ref={ref[1]}>
                <AccountDashboardPopup />
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className={style.navbar_component_main_container}>
          <div className={style.navbar_component_left_container}>
            <NavbarPriceCounterComponent />
            <div
              className={style.logo_container}
              onClick={() => router.push("/")}
            >
              <img src="./images/svgs/clettr-logo.svg" alt="clettr-logo" />
            </div>
            <p
              className={style.p_hover}
              style={
                router.asPath.toString().split("/marketplace")[1] == ""
                  ? { color: "rgba(255, 255, 255, 1)", cursor: "default" }
                  : {}
              }
              onClick={() => router.push("/marketplace")}
            >
              Marketplace
            </p>
            <p
              className={style.p_hover}
              onClick={() => {
                openPopup(<LeaderboardPopupComponent />);
              }}
            >
              Leaderboards
            </p>
          </div>
          <div className={style.navbar_component_right_container}>
            <p
              className={style.p_hover}
              style={
                router.asPath.toString().split("/docs")[1] == ""
                  ? { color: "rgba(255, 255, 255, 1)", cursor: "default" }
                  : {}
              }
              onClick={() => router.push("/docs")}
            >
              Docs
            </p>
            <p
              className={style.p_hover}
              onClick={() => openPopup(<SupportPopupComponent />)}
            >
              Support
            </p>
            <div
              className={`${style.colored_button} ${style.black_button}`}
              style={{ maxWidth: "100px", marginLeft: "10px", padding: "8px" }}
              onClick={() => {
                openPopup(<LoginPopupComponent />);
              }}
            >
              Login
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
