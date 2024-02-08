import style from "./admin-block-style.module.scss";
//import { useLazyQuery } from "@apollo/client";
// import { useEffect, useRef } from "react";
// import { INVENTORY_QUERY } from "../../../scripts/graphql/inventory-query/inventory-query";
// import { INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/inventory-custom-query";
// import { openPopup } from "../../popup-component/popup-container-component";
// import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";

export default function AdminNFTBlockComponent() {
  return (
    <div className={style.admin_mini_block} style={{ maxWidth: "750px" }}>
      <div className={style.input_container} style={{ width: "100%" }}>
        <div className={style.input_container}>
          <div className={style.input_info}>
            <p style={{ marginBottom: "10px" }}>Search for NFT</p>
          </div>
          <div className={style.input_box}>
            <input placeholder="Enter NFT Id" />
          </div>
        </div>
      </div>
      <div className={`${style.colored_button} ${style.grey_button}`}>
        Search NFT
      </div>
      <p style={{ width: "100%", textAlign: "center" }}>or</p>
      <div className={`${style.colored_button} ${style.green_button}`}>
        Create NFT
      </div>
    </div>
  );
}
