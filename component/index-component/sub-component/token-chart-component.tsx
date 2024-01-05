import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { dummyHistoricalData } from "../../../scripts/misc/dummy-data/dummy-historical-data";
import getScreenWidth from "../../../scripts/misc/getScreenWidth";
import {
  decimalFormatter,
  timeConverter,
} from "../../../scripts/misc/stringFormatter";
import { RootState } from "../../../scripts/redux/rootReducer";
import style from "../../../styles/component/index-components/subcomponents/token-chart-component.module.scss";
import { phpPrice } from "../../navbar-component/subcomponents/navbar-price-counter-component";
import TccBar from "./tcc-bar-component";

export let link_changePrices: any = null;
export let link_setCurrentPrice: any = null;
export let link_setCurrentTime: any = null;

const TokenChartComponent = (props: any) => {
  const [sliderState, setSliderState] = useState(0);
  const _width = getScreenWidth();

  const ref: any = useRef();

  const [currentPrice, setCurrentPrice]: any = useState(null);
  const [currentTime, setCurrentTime]: any = useState(null);
  link_setCurrentPrice = setCurrentPrice;
  link_setCurrentTime = setCurrentTime;

  const [prices, setPrices]: any = useState(null);

  const [priceOffset, setPriceOffset]: any = useState(0);

  const changePrices: any = (offset: String) => {
    const dummy_historical_data = dummyHistoricalData();
    let totaloffSet = priceOffset; //? used as priceOffset needs to be rerendered to be updated
    if (offset == "increase" && priceOffset - 100 > 0) {
      totaloffSet -= 100;
    }

    if (
      offset == "decrease" &&
      priceOffset + 100 < dummy_historical_data.length &&
      dummy_historical_data.length - (priceOffset + 100) >= 100
    ) {
      totaloffSet += 100;
    }

    setPriceOffset(totaloffSet);

    let price_set: any = [];
    for (let i = 100; i > 0; i--) {
      price_set.push(
        dummy_historical_data[dummy_historical_data.length - totaloffSet - i]
      );
    }
    setPrices(price_set);
  };
  link_changePrices = changePrices;

  useEffect(() => {
    changePrices("default");
  }, []);

  const currentCurrencyState = useSelector((state: RootState) => {
    return state.currentCurrencyState.value;
  });

  return (
    <div className={style.token_chart_component_root}>
      <div className={style.token_price_info_container}>
        <div className={style.tpic_right_container}>
          <img src={"./images/svgs/clettr-token.svg"} alt="clettr-token" />
          <div>
            <p>
              {currentPrice == null && currentCurrencyState != null
                ? "---"
                : decimalFormatter(
                    currentPrice *
                      (currentCurrencyState == "php" ? phpPrice : 1)
                  )}
              <span
                style={{ color: "rgba(255, 255, 255, 0.5)", marginLeft: "5px" }}
              >
                {currentCurrencyState != null
                  ? currentCurrencyState.toUpperCase()
                  : null}
              </span>
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.7)" }}>
              {`${currentTime == null ? "---" : timeConverter(currentTime)}`}
            </p>
          </div>
        </div>
      </div>
      <div
        className={style.bar_graph_container}
        ref={ref}
        style={{
          justifyContent: props.priceonly == true ? "flex-start" : "center",
        }}
      >
        {prices != null
          ? (() => {
              let highest = Number(prices[0]["open"]);
              let lowest = Number(prices[0]["open"]);

              for (let i = 0; i < prices.length; i++) {
                if (highest < Number(prices[i]["open"])) {
                  highest = Number(prices[i]["open"]);
                }

                if (lowest > Number(prices[i]["open"])) {
                  lowest = Number(prices[i]["open"]);
                }
              }

              let arr_tcc_bar: any = [];

              for (let i = 0; i < 100; i++) {
                arr_tcc_bar.push(
                  <TccBar
                    highest={highest}
                    lowest={lowest}
                    index={i}
                    current_price={prices[i]}
                  />
                );
              }

              return arr_tcc_bar;
            })()
          : null}
      </div>
      {_width <= 1200 || props.priceonly == true ? (
        <input
          type="range"
          className={`${style.slider} ${style.slider_dark}`}
          min="0"
          max="100"
          value={sliderState}
          onChange={(e) => {
            setSliderState(parseInt(e.currentTarget.value));
            ref.current.style.transform = `translateX(${
              (parseInt(e.currentTarget.value) / 100) *
              -(1500 - ref.current.getBoundingClientRect().width)
            }px)`;
          }}
        />
      ) : null}
    </div>
  );
};

export default TokenChartComponent;
