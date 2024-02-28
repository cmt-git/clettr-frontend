import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../pages/_app";
import getScreenWidth from "../../../scripts/misc/getScreenWidth";
import { RootState } from "../../../scripts/redux/rootReducer";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import { closePopup } from "../../popup-component/popup-container-component";

const SwitchCurrencyPopupComponent = () => {
  const _width = getScreenWidth();

  const [selectedCurrency, setSelectedCurrency]: any = useState(null);

  const setCurrency = (symbol: string) => {
    localStorage.setItem("selected-currency", symbol.toLowerCase());
  };

  const dispatch = useDispatch();

  const currentCurrencyState = useSelector((state: RootState) => {
    return state.currentCurrencyState.value;
  });

  return (
    <div
      className={style.popup_content_root}
      style={{ maxWidth: "450px", width: "100vw" }}
    >
      <div
        style={{ width: "100%", marginBottom: "15px" }}
        onClick={() => closePopup()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.05"
          height="14.048"
          viewBox="0 0 14.05 14.048"
          className={style.close_button}
        >
          <path
            d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z"
            fill="#d08080"
          />
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: _width > 650 ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            marginBottom: _width > 650 ? "0px" : "10px",
          }}
        >
          Change Currency
        </p>
      </div>
      <div className={style.line} style={{ margin: "15px 0px" }} />
      <div className={style.select_box}>
        <select onChange={(e: any) => setSelectedCurrency(e.target.value)}>
          <option selected={currentCurrencyState == "php" ? true : false}>
            Philippine Peso (PHP)
          </option>
          <option selected={currentCurrencyState == "usd" ? true : false}>
            United States Dollar (USD)
          </option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="51"
          viewBox="0 0 25 51"
        >
          <g transform="translate(-1393 -359)">
            <path
              d="M12.5,0,25,19H0Z"
              transform="translate(1393 359)"
              fill="#fff"
            />
            <path
              d="M12.5,0,25,19H0Z"
              transform="translate(1418 410) rotate(180)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <div
        className={`${style.colored_button} ${style.grey_button}`}
        style={{ marginTop: "15px" }}
        onClick={() => {
          const filtered_currency =
            selectedCurrency == "Philippine Peso (PHP)" ? "php" : "usd";

          dispatch({
            type: "edit/currentCurrencyReducer/SET",
            value: filtered_currency,
          });
          setCurrency(filtered_currency);
          closePopup();
          window.location.reload();
        }}
      >
        Update
      </div>
    </div>
  );
};

export default SwitchCurrencyPopupComponent;
