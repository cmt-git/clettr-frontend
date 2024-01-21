import style from "./transaction-block.module.scss";

export default function TransactionBlock() {
  return (
    <div className={style.transaction_block_root}>
      <div style={{ maxWidth: "80px" }}>
        <h1>Type</h1>
        <p>Market Buy, Market Sell, Play, Community</p>
      </div>
      <div>
        <h1>Description</h1>
        <p>You gained from the Community with Node #4</p>
      </div>
      <div style={{ maxWidth: "100px" }}>
        <h1>Cost or Profit</h1>
        <p className={style.green_text}>+3.85 ETTR</p>
      </div>
      <div style={{ maxWidth: "150px" }}>
        <h1>Date and Time</h1>
        <p>10/23/02 - 18:22:08.03</p>
      </div>
    </div>
  );
}
