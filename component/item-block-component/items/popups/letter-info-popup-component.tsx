import { useState } from "react";
import { store } from "../../../../pages/_app";
import style from "../../../../styles/component/popup-component/popup-content-style.module.scss";
import { closePopup } from "../../../popup-component/popup-container-component";
import ItemBlockComponent from "../../item-block-component";
import MarketInfoPopupComponent from "./market-info-popup-component";

const LetterInfoPopupComponent = (props: any) => {
  return (
    <div
      className={`${style.popup_content_root} ${style.nft_info_popup_root}`}
      style={{ width: "100vw" }}
    >
      <div
        style={{ width: "100%", marginBottom: "10px" }}
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
      <p style={{ width: "100%", textAlign: "center", fontSize: "15px" }}>
        {`Letter ${props.data.nft_traits.split("-")[0]} #${props.data.id}`}
      </p>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div
        className={style.grey_info_block}
        style={{ marginBottom: "15px", display: "flex" }}
      >
        <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
          Owner <span>{props.data.current_owner}</span>
        </p>
      </div>
      <div className={style.lipc_ibc_parent}>
        <ItemBlockComponent data={props.data} hover={false} no_borders={true} />
      </div>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div className={style.grey_info_block}>
          <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Date Acquired</p>
          <p>
            {(() => {
              const current_date = props.data.creation_date.split(" ");

              return `${current_date[1]} ${current_date[2]}, ${current_date[3]}`;
            })()}
          </p>
        </div>
        <div className={style.grey_info_block}>
          <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Original Owner</p>
          <p>{props.data.original_owner}</p>
        </div>
        <div className={style.grey_info_block}>
          <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Color</p>
          <p>
            {props.data.nft_traits.split("-")[1][0].toUpperCase() +
              props.data.nft_traits
                .split("-")[1]
                .substring(1, props.data.nft_traits.split("-")[1].length)}
          </p>
        </div>
        <div className={style.grey_info_block}>
          <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Stars</p>
          <p>{props.data.nft_stars}</p>
        </div>
        <p
          style={{
            width: "100%",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          Confused on what this means? Check out <a href="/docs?active">Docs</a>
        </p>
      </div>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <MarketInfoPopupComponent
        revoke={props.data.status == "market_sell"}
        data={props.data}
      />
    </div>
  );
};

export default LetterInfoPopupComponent;
