import {
  getFormattedTime,
  timeConverter,
} from "../../../scripts/misc/stringFormatter";
import style from "./transaction-block.module.scss";

export default function TransactionBlock(_props: any) {
  const amount = Number(Number(_props?.data?.transaction_amount).toFixed(2));
  return (
    <div className={style.transaction_block_root}>
      <div style={{ maxWidth: "80px" }}>
        <h1>Type</h1>
        <p>
          {_props?.data?.transaction_type == "play"
            ? "Play"
            : _props?.data?.transaction_type == "market_buy"
            ? "Market Buy"
            : _props?.data?.transaction_type == "market_sell"
            ? "Market Sell"
            : _props?.data?.transaction_type == "forge"
            ? "Forge"
            : _props?.data?.transaction_type == "community"
            ? "Community"
            : null}
        </p>
      </div>
      <div>
        <h1>Description</h1>
        <p>{_props?.data?.description}</p>
      </div>
      <div style={{ maxWidth: "150px" }}>
        <div>
          <h1>Cost or Profit</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={
                _props?.data?.transaction_currency == "ettr"
                  ? "./images/svgs/clettr-token.svg"
                  : "./images/svgs/usdc-token.svg"
              }
              alt="clettr-logo"
              style={{ width: "20px", marginRight: "5px" }}
            />
            <p className={amount >= 0 ? style.green_text : style.red_text}>
              {amount}{" "}
              {_props?.data?.transaction_currency == "ettr" ? "ETTR" : "SUSDC"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "150px" }}>
        <h1>Date and Time</h1>
        {/* <p>{getFormattedTime(_props?.data?.transaction_date)}</p> */}
        <p>{timeConverter(Number(_props?.data?.transaction_date))}</p>
      </div>
    </div>
  );
}
