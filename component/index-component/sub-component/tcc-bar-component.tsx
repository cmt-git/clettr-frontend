import style from "../../../styles/component/index-components/subcomponents/token-chart-component.module.scss";
import {
  link_setCurrentPrice,
  link_setCurrentTime,
} from "./token-chart-component";

const TccBar = (props: any) => {
  const currentPrice = props.current_price;

  const higherPrice =
    Number(currentPrice["open"]) > Number(currentPrice["close"])
      ? Number(currentPrice["open"])
      : Number(currentPrice["close"]);
  const lowerPrice =
    higherPrice == Number(currentPrice["open"])
      ? Number(currentPrice["close"])
      : Number(currentPrice["open"]);

  const upperBarHeight =
    ((props.highest - higherPrice) / (props.highest - props.lowest)) * 100;
  const middleBarHeight =
    ((higherPrice - lowerPrice) / (props.highest - props.lowest)) * 100;

  return (
    <div
      className={style.tcc_bar}
      onMouseEnter={() => {
        link_setCurrentPrice(
          currentPrice["open"] < currentPrice["close"]
            ? currentPrice["high"]
            : currentPrice["low"]
        );
        link_setCurrentTime(currentPrice["time"]);
      }}
    >
      <div
        className={style.upper_bar}
        style={{ height: `${upperBarHeight}%` }}
      />
      <div
        className={
          currentPrice["open"] < currentPrice["close"]
            ? style.positive_middle_bar
            : style.negative_middle_bar
        }
        style={{ height: `${middleBarHeight}%` }}
      />
      <div
        className={
          currentPrice["open"] < currentPrice["close"]
            ? style.positive_lower_bar
            : style.negative_lower_bar
        }
      />
    </div>
  );
};

export default TccBar;
