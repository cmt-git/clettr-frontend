import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../pages/_app";
import { DummyLiveData } from "../../../scripts/misc/dummy-data/dummy-live-data";
import { decimalFormatter } from "../../../scripts/misc/stringFormatter";
import style from "../../../styles/component/navbar-component/navbar-component-style.module.scss";
import { openPopup } from "../../popup-component/popup-container-component";
import SwitchCurrencyPopupComponent from "../popups/switch-currency-popup-component";
import io from "socket.io-client";
import { axiosInstance } from "../../../scripts/router/axios-instance";
import settings from "../../../settings.json";

export const phpPrice = 49.56;
const NavbarPriceCounterComponent = (props: any) => {
  const dispatch = useDispatch();

  const [pastPrice, setPastPrice]: any = useState("0-up-0");
  useEffect(() => {
    dispatch({
      type: "edit/currentCurrencyReducer/SET",
      value: localStorage.getItem("selected-currency"),
    });

    const socket = io(
      `${
        settings.environment == "development"
          ? "http://localhost"
          : "https://clettr.com"
      }/socket`
    );

    // socket.on("connect", () => {
    //   console.log("Connected to Socket.IO");
    // });

    function changePrice(_amount: string) {
      const currentIndex = Number(pastPrice.split("-")[2]);
      const oldPrice = Number(pastPrice.split("-")[0]);
      const currentPrice = Number(_amount);

      dispatch({ type: "edit/tickerPriceReducer/SET", value: currentPrice });
      setPastPrice(
        `${currentPrice}-${oldPrice > currentPrice ? "down" : "up"}-${
          currentIndex + 1 == DummyLiveData().length ? 0 : currentIndex + 1
        }`
      );
    }

    // Add your Socket.IO client event handlers here
    socket.on("price", (msg) => {
      changePrice(msg);
    });

    (async () => {
      await axiosInstance.get("/simulation/currentprice").then((res) => {
        if (res?.data?.data?.open != null) {
          changePrice(res.data.data.open);
        }
      });
    })();

    return () => {
      // Clean up event handlers when the component unmounts
      socket.disconnect();
    };
  }, []);

  return (
    <div
      className={
        props.no_hover === true
          ? style.token_live_price_container_no_hover
          : style.token_live_price_container
      }
      onClick={() => {
        props.no_hover !== true
          ? openPopup(<SwitchCurrencyPopupComponent />)
          : null;
      }}
    >
      <img src="./images/svgs/clettr-token.svg" alt="clettr-logo" />
      <p>
        <span style={{ margin: "0px 5px" }}>
          {decimalFormatter(
            store.getState().tickerPriceState.value != null
              ? store.getState().tickerPriceState.value
              : 0
          )}
        </span>
        <span className={style.transparent_text}>
          {store.getState().currentCurrencyState.value?.toUpperCase()}
        </span>
      </p>
      <svg
        className={
          pastPrice.split("-")[1] == "up"
            ? style.positive_arrow
            : style.negative_arrow
        }
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="19"
        viewBox="0 0 37 19"
      >
        <path d="M18.5,0,37,19H0Z" />
      </svg>
    </div>
  );
};

export default NavbarPriceCounterComponent;
