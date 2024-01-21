import { useState } from "react";
import style from "../../../../styles/component/popup-component/popup-content-style.module.scss";
import { closePopup } from "../../../popup-component/popup-container-component";
import ItemBlockComponent from "../../item-block-component";
import MarketInfoPopupComponent from "./market-info-popup-component";

const NodeInfoPopupComponent = (props: any) => {
  const [marketState, setMarketState]: any = useState("sell");
  const [currency, setCurrency]: any = useState("ettr");

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
        {`Node #${props.data.id}`}
      </p>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div
        className={style.grey_info_block}
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p className={style.transparent_text}>
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
          <p className={style.transparent_text}>Token Id</p>
          <p>{props.data.nft_token_id}</p>
        </div>
        <div className={style.grey_info_block}>
          <p className={style.transparent_text}>Date Acquired</p>
          <p>
            {(() => {
              const current_date = props.data.creation_date.split(" ");

              return `${current_date[1]} ${current_date[2]}, ${current_date[3]}`;
            })()}
          </p>
        </div>
        <div className={style.grey_info_block}>
          <p className={style.transparent_text}>Original Owner</p>
          <p>{props.data.original_owner}</p>
        </div>
        <div className={style.grey_info_block}>
          <p className={style.transparent_text}>Color</p>
          <p>
            {props.data.nft_traits[0].toUpperCase() +
              props.data.nft_traits.substring(1, props.data.nft_traits.length)}
          </p>
        </div>
        <div className={style.grey_info_block}>
          <p className={style.transparent_text}>Stars</p>
          <p>{props.data.nft_stars}</p>
        </div>
        <div className={style.requirement_box}>
          <div
            className={style.grey_info_block}
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          >
            <p className={style.transparent_text}>Requirements</p>
            <p>
              {`${props.data.nft_requirement.split("-").length} ${
                props.data.nft_requirement.split("-").length > 1
                  ? "Requirements"
                  : "Requirement"
              }`}
            </p>
          </div>
          <div
            className={style.black_info_block}
            style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
          >
            {(() => {
              const requirements = props.data.nft_requirement.split("-");
              const block_arr = [];

              for (let i = 0; i < requirements.length; i++) {
                block_arr.push(
                  <div className={style.light_black_info_block}>
                    <p className={style.transparent_text}>
                      {[
                        "pink",
                        "purple",
                        "blue",
                        "teal",
                        "lime",
                        "green",
                        "yellow",
                        "orange",
                        "red",
                      ].includes(requirements[i])
                        ? "Color"
                        : [
                            "striped",
                            "spotted",
                            "zigzag",
                            "checkered",
                            "cross",
                            "sharp",
                          ].includes(requirements[i])
                        ? "Pattern"
                        : ["5", "4", "3", "2", "1"].includes(requirements[i])
                        ? "Stars"
                        : "Letters"}
                    </p>
                    <p>
                      {requirements[i][0].toUpperCase() +
                        requirements[i].substring(1, requirements[i].length)}
                    </p>
                  </div>
                );
              }

              return block_arr;
            })()}
          </div>
        </div>
        <p
          className={style.transparent_text}
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Confused on what this means? Check out{" "}
          <a href="/docs?passive">Docs</a>
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

export default NodeInfoPopupComponent;
