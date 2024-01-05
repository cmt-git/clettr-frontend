import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import getScreenWidth from "../../scripts/misc/getScreenWidth";
import {
  decimalFormatter,
  timeConverter,
} from "../../scripts/misc/stringFormatter";
import { RootState } from "../../scripts/redux/rootReducer";
import style from "../../styles/component/index-components/stat-block-component.module.scss";

const StatBlock = (props: any) => {
  const [sliderState, setSliderState] = useState(0);
  const [earningsClass, setEarningsClass]: any = useState(null);
  const [earningsState, setEarningsState]: any = useState(null);
  const _width = getScreenWidth();

  const ref: any = useRef();

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const Bars = (props: any) => {
    const height =
      props.data != null
        ? 125 * (Number(props.data.reward) / Number(props.highest))
        : 0;

    const typeRand = props.data == null ? 2 : 1;
    return (
      <div
        className={style.stat_bar}
        onMouseEnter={() => {
          if (props.data != null) {
            setEarningsState({
              reward: props.data.reward,
              day: props.data.day,
            });
          }
        }}
        onMouseLeave={() => {
          setEarningsState(null);
        }}
      >
        <div
          className={`${
            typeRand == 1 ? style.positive_bar : style.no_activity
          }`}
          style={{ height: `${typeRand == 1 ? height : 0}px` }}
        />
      </div>
    );
  };

  return (
    <div className={style.stat_block_root}>
      <div className={style.stat_block_header}>
        <p>Earnings this past 60 days</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={"./images/svgs/clettr-token.svg"}
            alt="clettr-token"
            style={{ width: "20px" }}
          />
          <p style={{ marginLeft: "5px" }}>
            {decimalFormatter(queryState.user_info.unclaimed_ettr)}
          </p>
        </div>
      </div>
      <div
        className={style.stat_block_main}
        style={{
          height: "auto",
          width: "100%",
        }}
      >
        <div
          style={{ height: "120px", width: "100%", marginTop: "20px" }}
          ref={ref}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: _width > 1300 ? "center" : "flex-start",
              height: "inherit",
            }}
          >
            {(() => {
              let highest: number = 0;
              for (
                let i = 0;
                i < queryState.user_earnings_query.user_earnings.length;
                i++
              ) {
                if (
                  highest <
                  queryState.user_earnings_query.user_earnings[i].reward
                ) {
                  highest =
                    queryState.user_earnings_query.user_earnings[i].reward;
                }
              }

              const bar_arr: any = [];
              for (let i = 60; i > -1; i--) {
                if (i <= queryState.user_earnings_query.user_earnings.length) {
                  bar_arr.push(
                    <Bars
                      highest={highest}
                      data={queryState.user_earnings_query.user_earnings[i]}
                    />
                  );
                } else {
                  bar_arr.push(<Bars highest={highest} data={null} />);
                }
              }
              return bar_arr;
            })()}
          </div>
        </div>
        <div
          className={`${style.data_block} ${earningsClass}`}
          style={{ marginTop: "20px" }}
        >
          <div style={{ display: "flex" }}>
            <p>Earned</p>
            <img
              src={"./images/svgs/clettr-token.svg"}
              alt="clettr-token"
              style={{ width: "20px", margin: "00px 5px" }}
            />
            <p style={{ color: "white" }}>
              {earningsState != null
                ? decimalFormatter(earningsState.reward)
                : "---"}
            </p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p>
              Date
              <span style={{ marginLeft: "5px" }}>
                {earningsState != null
                  ? timeConverter(Number(earningsState.day)).split("-")[0]
                  : "---"}
              </span>
            </p>
          </div>
        </div>
        {_width <= 1300 ? (
          <input
            type="range"
            className={style.slider}
            min="0"
            max="100"
            value={sliderState}
            onChange={(e) => {
              setSliderState(parseInt(e.currentTarget.value));
              ref.current.style.transform = `translateX(${
                (parseInt(e.currentTarget.value) / 100) *
                -(1490 - ref.current.getBoundingClientRect().width)
              }px)`;
            }}
          />
        ) : null}
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "",
            flexDirection: _width > 1000 ? "row" : "column",
            width: "100%",
          }}
        >
          <p
            style={{
              width: "100%",
              marginBottom: _width > 800 ? "0px" : "10px",
              textAlign: _width > 1000 ? "left" : "center",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            Total Accumulated Ettr&nbsp;
            <span style={{ color: "white" }}>
              {queryState != null
                ? (() => {
                    let all_rewards: number = 0;
                    for (
                      let i = 0;
                      i < queryState.user_earnings_query.user_earnings.length;
                      i++
                    ) {
                      all_rewards += Number(
                        queryState.user_earnings_query.user_earnings[i].reward
                      );
                    }
                    return decimalFormatter(all_rewards);
                  })()
                : null}
            </span>
          </p>
          <p
            style={{
              width: "100%",
              marginBottom: _width > 800 ? "0px" : "10px",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            Earnings Last 60 Days&nbsp;
            <span style={{ color: "white" }}>
              {queryState != null
                ? (() => {
                    let all_rewards: number = 0;
                    for (
                      let i = 0;
                      i < queryState.user_earnings_query.user_earnings.length;
                      i++
                    ) {
                      all_rewards += Number(
                        queryState.user_earnings_query.user_earnings[i].reward
                      );
                    }
                    return decimalFormatter(all_rewards);
                  })()
                : null}
            </span>
          </p>
          <p
            style={{
              width: "100%",
              textAlign: _width > 1000 ? "right" : "center",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            Earnings Today&nbsp;
            <span style={{ color: "white" }}>
              {queryState != null &&
              queryState.user_earnings_query != null &&
              queryState.user_earnings_query.user_earnings[0] != null
                ? decimalFormatter(
                    queryState.user_earnings_query.user_earnings[0].reward
                  )
                : 0}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatBlock;
