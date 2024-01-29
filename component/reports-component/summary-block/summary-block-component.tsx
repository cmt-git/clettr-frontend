import { useLazyQuery } from "@apollo/client";
import style from "../transactions-block-component-style.module.scss";
import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import { transactionSummary } from "../../../scripts/router/user/user-request";

function downloadCSV(data: string, filename: string): void {
  const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(data);

  const link = document.createElement("a");
  link.href = csvContent;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function SummaryBlockComponent() {
  const inputRef: any = useRef();
  const [downloadCSVState, setDownloadCSV]: any = useState(false);
  const [summaryData, setSummaryData]: any = useState(null);

  const fromDateInputRef: any = useRef(null);
  const toDateInputRef: any = useRef(null);
  useEffect(() => {
    flatpickr(fromDateInputRef.current, {
      dateFormat: "Y-m-d",
      enableTime: false,
    });

    flatpickr(toDateInputRef.current, {
      dateFormat: "Y-m-d",
      enableTime: false,
    });

    (async () => {
      setSummaryData(
        (
          await transactionSummary({
            to_date: null,
            from_date: null,
          })
        )?.data
      );
    })();
  }, []);

  return (
    <div className={style.transactions_block_component}>
      <div className={style.grey_info_block} style={{ textAlign: "center" }}>
        Summary
      </div>
      <div className={style.tbc_dual_div_container}>
        <div className={style.tbc_dual_div_mono_container}>
          <p>From Date:</p>
          <input
            className={style.tbc_date_picker}
            type="text"
            id="dateInput"
            placeholder="Click to select date"
            ref={fromDateInputRef}
          />
        </div>
        <div className={style.tbc_dual_div_mono_container}>
          <p>To Date:</p>
          <input
            className={style.tbc_date_picker}
            type="text"
            id="dateInput"
            placeholder="Click to select date"
            ref={toDateInputRef}
          />
        </div>
      </div>
      <div
        className={`${style.light_grey_button} ${style.colored_button}`}
        onClick={async () => {
          if (
            fromDateInputRef.current.value != null &&
            toDateInputRef.current.value != null &&
            fromDateInputRef.current.value < toDateInputRef.current.value
          ) {
            setSummaryData(
              (
                await transactionSummary({
                  to_date: toDateInputRef.current.value,
                  from_date: fromDateInputRef.current.value,
                })
              )?.data
            );

            fromDateInputRef.current.value = "";
            toDateInputRef.current.value = "";

            link_messageBoxShow("Summary data has been updated!", true);
          } else {
            link_messageBoxShow(
              "From Date needs to be lower than To Date.",
              false
            );
          }
        }}
      >
        Search
      </div>
      <div className={style.tbc_dual_div_container}>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Total Earned ETTR</p>
          <div className={style.grey_info_block}>
            {summaryData?.total_earned_ettr}
          </div>
        </div>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Total Earned USDC</p>
          <div className={style.grey_info_block}>
            {summaryData?.total_earned_usdc}
          </div>
        </div>
      </div>
      <div className={style.tbc_dual_div_container}>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Total Lost ETTR</p>
          <div className={style.grey_info_block}>
            {summaryData?.total_lost_ettr}
          </div>
        </div>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Total Lost USDC</p>
          <div className={style.grey_info_block}>
            {summaryData?.total_lost_usdc}
          </div>
        </div>
      </div>
      <div className={style.tbc_dual_div_container}>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Number Of Transactions</p>
          <div className={style.grey_info_block}>
            {summaryData?.number_of_transactions}
          </div>
        </div>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Number Of Market Buys</p>
          <div className={style.grey_info_block}>
            {summaryData?.number_of_market_buys}
          </div>
        </div>
      </div>
      <div className={style.tbc_dual_div_container}>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Number Of Market Sells</p>
          <div className={style.grey_info_block}>
            {summaryData?.number_of_market_sells}
          </div>
        </div>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Number Of Community Earnings</p>
          <div className={style.grey_info_block}>
            {summaryData?.number_of_community_earnings}
          </div>
        </div>
      </div>
      <div className={style.tbc_dual_div_container}>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Number Of Plays</p>
          <div className={style.grey_info_block}>
            {summaryData?.number_of_plays}
          </div>
        </div>
        <div className={style.tbc_dual_div_mono_container}>
          <p>Number Of Forges</p>
          <div className={style.grey_info_block}>
            {summaryData?.number_of_forges}
          </div>
        </div>
      </div>
      <div
        className={`${style.green_button} ${style.colored_button}`}
        onClick={async () => {
          const csvData = `
          Type,Amount
          Total Earned ETTR,${summaryData?.total_earned_ettr}
          Total Earned USDC,${summaryData?.total_earned_usdc}
          Total Lost ETTR,${summaryData?.total_lost_ettr}
          Total Lost USDC,${summaryData?.total_lost_usdc}
          Number Of Transactions,${summaryData?.number_of_transactions}
          Number Of Market Buys,${summaryData?.number_of_market_buys}
          Number Of Market Sells,${summaryData?.number_of_market_sells}
          Number Of Community Earnings,${summaryData?.number_of_community_earnings}
          Number Of Plays,${summaryData?.number_of_plays}
          Number Of Forges,${summaryData?.number_of_forges}`;

          downloadCSV(csvData, "summary.csv");
        }}
      >
        Download CSV
      </div>
    </div>
  );
}
