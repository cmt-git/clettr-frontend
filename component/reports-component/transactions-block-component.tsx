import { useLazyQuery } from "@apollo/client";
import PageBlockComponent from "../pageblock-component";
import TransactionBlock from "./subcomponents/transaction-block";
import style from "./transactions-block-component-style.module.scss";
import { REPORTS_QUERY } from "../../scripts/graphql/reports-query/reports-query";
import { useEffect, useRef, useState } from "react";
import { link_messageBoxShow } from "../messagebox-component/messagebox-component";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function convertToCSV(objArray: any) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  // Extract headers
  var headers = Object.keys(array[0]);
  str += headers.join(",") + "\r\n";

  // Initialize sums
  var sumETTR = 0;
  var sumUSDT = 0;

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      // Check currency and update sums
      if (index === "transaction_currency") {
        if (array[i][index] === "ettr") {
          sumETTR += parseFloat(array[i]["transaction_amount"]);
        } else if (array[i][index] === "usdc") {
          sumUSDT += parseFloat(array[i]["transaction_amount"]);
        }
      }

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  // Add a row for sums
  str += "Sums:,ETTR:," + sumETTR + ",USDC:," + sumUSDT + "\r\n";

  return str;
}

function downloadCSV(_data: any) {
  var csvContent = convertToCSV(_data);
  var blob = new Blob([csvContent], { type: "text/csv" });
  var link = document.createElement("a");

  link.href = window.URL.createObjectURL(blob);
  link.download = "transactions.csv";
  link.click();
}

const TransactionsBlockComponent = (props: any) => {
  const inputRef: any = useRef();
  const [downloadCSVState, setDownloadCSV]: any = useState(false);
  const [reportsQuery, { loading, error, data }] = useLazyQuery(REPORTS_QUERY);
  const [queryVariables, setQueryVariables] = useState({});

  useEffect(() => {
    const queryvariable = {
      global: props.global,
      username: props.username,
    };
    setQueryVariables(queryvariable);
    reportsQuery({
      variables: {
        ...queryvariable,
      },
    });
  }, [props.username]);

  useEffect(() => {
    if (downloadCSVState == true) {
      downloadCSV(data?.user_transactions);
      setDownloadCSV(false);
    }
  }, [data, downloadCSVState]);

  return (
    <div className={style.transactions_block_component}>
      <div className={style.grey_info_block} style={{ textAlign: "center" }}>
        Transactions
      </div>
      <p style={{ marginBottom: "-5px" }}>
        Downloading your data is only limited to 100 transactions, please enter
        a page number if you want to see older transactions. You have max of{" "}
        {data?.user_transactions_total || 0} transaction pages.
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
              Max of {data?.user_transactions_total || 0} Pages
            </p>
            <input
              type="text"
              placeholder="Enter transaction page"
              ref={inputRef}
            />
          </div>
        </div>
        <div
          className={`${style.green_button} ${style.colored_button}`}
          style={{ maxWidth: "150px" }}
          onClick={async () => {
            if (
              inputRef.current.value != null &&
              inputRef.current.value.length > 0
            ) {
              if (/^\d+$/.test(inputRef.current.value)) {
                await reportsQuery({
                  variables: { page: Number(inputRef.current.value) },
                });
                setDownloadCSV(true);
              } else {
                link_messageBoxShow("Input is not valid!", false);
              }
            } else {
              downloadCSV(data.user_transactions);
            }
          }}
        >
          Download CSV
        </div>
      </div>
      {data?.user_transactions && data?.user_transactions.length > 0 ? (
        data?.user_transactions.map((value: any, key: number) => (
          <TransactionBlock key={key} data={value} />
        ))
      ) : (
        <div
          className={style.grey_info_block}
          style={{ justifyContent: "center" }}
        >
          ⚠️&nbsp;No Transactions found!
        </div>
      )}

      <PageBlockComponent
        query={reportsQuery}
        cut={"settings"}
        variables={queryVariables}
      />
    </div>
  );
};

export default TransactionsBlockComponent;
