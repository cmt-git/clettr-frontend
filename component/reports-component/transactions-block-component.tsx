import PageBlockComponent from "../pageblock-component";
import TransactionBlock from "./subcomponents/transaction-block";
import style from "./transactions-block-component-style.module.scss";

const TransactionsBlockComponent = () => {
  return (
    <div className={style.transactions_block_component}>
      <div className={style.grey_info_block} style={{ textAlign: "center" }}>
        Transactions
      </div>
      <div className={style.line} />
      <p style={{ marginBottom: "-5px" }}>
        Downloading your data is only limited to 1000 transactions, please enter
        a page number if you want to see older transactions. You have max of 6
        transaction pages.
      </p>
      <div style={{ display: "flex", gap: "15px", width: "100%" }}>
        <div
          className={`${style.select_box} ${style.select_box_responsive}`}
          style={{ maxWidth: "150px" }}
        >
          <select>
            <option>Market Buy</option>
            <option>Market Sell</option>
            <option>Play</option>
            <option>Community</option>
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
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_box}>
            <p
              style={{
                whiteSpace: "nowrap",
                marginLeft: "15px",
                cursor: "pointer",
                color: "rgba(255, 255 ,255, 0.75)",
              }}
            >
              Max of 6 Pages
            </p>
            <input type="text" placeholder="Enter transaction page" />
          </div>
        </div>
        <div
          className={`${style.green_button} ${style.colored_button}`}
          style={{ maxWidth: "150px" }}
        >
          Download PDF
        </div>
      </div>
      {(() => {
        let array: any = [];

        for (let i = 0; i < 5; i++) {
          array.push(<TransactionBlock />);
        }
        return array;
      })()}
      <PageBlockComponent />
    </div>
  );
};

export default TransactionsBlockComponent;
