import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getScreenWidth from "../../scripts/misc/getScreenWidth";
import { RootState } from "../../scripts/redux/rootReducer";
import style from "../../styles/component/index-components/welcome-block-component.module.scss";
import NavbarPriceCounterComponent from "../navbar-component/subcomponents/navbar-price-counter-component";
import TokenChartComponent, {
  link_changePrices,
} from "./sub-component/token-chart-component";

const WelcomeBlockComponent = (props: any) => {
  const _width: any = getScreenWidth();

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const colorThemeState = useSelector((state: RootState) => {
    return state.colorThemeState.value;
  });

  return (
    <div
      className={style.welcome_block_component_main}
      style={{ width: props.priceonly === true ? "1000px" : "100%" }}
    >
      {props.priceonly !== true ? (
        <div className={style.header_container}>
          <div className={style.info_container}>
            <h1>
              Hello, <span>{queryState.user.username}</span>
            </h1>
            <p
              className={style.transparent_text}
              style={{
                wordWrap: "break-word",
                width: "100%",
                marginTop: "0px",
              }}
            >
              Remember to have fun, and good luck!
            </p>
          </div>
          <div
            className={style.info_container}
            style={{
              display: "flex",
              flexDirection: _width > 960 ? "row" : "column",
              marginTop: _width > 960 ? "0px" : "40px",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div
              className={style.info_div}
              style={{ marginRight: _width > 960 ? "40px" : "0px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#A0D951" />
              </svg>
              <p
                style={{
                  color: colorThemeState == "dark" ? "white" : "black",
                  margin: "0px 5px",
                }}
              >
                ---
                {queryState.user_info != undefined &&
                queryState.user_info.total_gains !== undefined
                  ? queryState.user_info.total_gains
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : null}
              </p>
              <p
                style={{
                  color: colorThemeState == "dark" ? "#EBF2C2" : "#6d7d48",
                }}
              >
                Gains Today
              </p>
            </div>
            <div className={style.info_div}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#FFE781" />
              </svg>
              <p
                style={{
                  color: colorThemeState == "dark" ? "white" : "black",
                  margin: "0px 5px",
                }}
              >
                ---
                {queryState.user_info != undefined &&
                queryState.user_info.total_gains !== undefined
                  ? queryState.user_info.total_gains
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : null}
              </p>
              <p
                style={{
                  color: colorThemeState == "dark" ? "#FFF7D5" : "#786f36",
                }}
              >
                Gains Yesterday
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <div className={style.token_price_container}>
        <TokenChartComponent priceonly={props.priceonly} />
      </div>
      <div className={style.bottom_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45.962"
          height="70.962"
          viewBox="0 0 45.962 70.962"
          className={style.arrow}
          onClick={() => link_changePrices("decrease")}
        >
          <g transform="translate(-1485.519 -344.019)">
            <rect
              width="15"
              height="50"
              transform="translate(1520.874 344.019) rotate(45)"
              fill="#fff"
            />
            <rect
              width="15"
              height="50"
              transform="translate(1485.519 379.626) rotate(-45)"
              fill="#fff"
            />
          </g>
        </svg>
        <NavbarPriceCounterComponent no_hover={true} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45.962"
          height="70.962"
          viewBox="0 0 45.962 70.962"
          style={{ transform: "rotate(180deg)" }}
          className={style.arrow}
          onClick={() => link_changePrices("increase")}
        >
          <g transform="translate(-1485.519 -344.019)">
            <rect
              width="15"
              height="50"
              transform="translate(1520.874 344.019) rotate(45)"
              fill="#fff"
            />
            <rect
              width="15"
              height="50"
              transform="translate(1485.519 379.626) rotate(-45)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WelcomeBlockComponent;
