import { useRef } from "react";
import style from "./admin-block-style.module.scss";
//import { useLazyQuery } from "@apollo/client";
// import { useEffect, useRef } from "react";
// import { INVENTORY_QUERY } from "../../../scripts/graphql/inventory-query/inventory-query";
// import { INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/inventory-custom-query";
// import { openPopup } from "../../popup-component/popup-container-component";
// import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";

export default function AdminUsersBlockComponent() {
  const usernameRef: any = useRef();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexDirection: "column",
      }}
    >
      <div className={style.input_container}>
        <div className={style.input_container}>
          <div className={style.input_info}>
            <p
              className={style.transparent_text}
              style={{ marginBottom: "10px" }}
            >
              Search for User
            </p>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <div className={style.input_box}>
              <input
                type="password"
                placeholder="Enter Username"
                ref={usernameRef}
              />
            </div>
            <div
              className={`${style.colored_button} ${style.grey_button}`}
              style={{ maxWidth: "150px" }}
              onClick={() => {}}
            >
              Search
            </div>
            <div
              className={`${style.colored_button} ${style.red_button}`}
              style={{ maxWidth: "150px" }}
            >
              Ban User
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
