import { useRef } from "react";
import style from "./admin-block-style.module.scss";
//import { useLazyQuery } from "@apollo/client";
// import { useEffect, useRef } from "react";
// import { INVENTORY_QUERY } from "../../../scripts/graphql/inventory-query/inventory-query";
// import { INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/inventory-custom-query";
// import { openPopup } from "../../popup-component/popup-container-component";
// import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";

export default function AdminRegistrationBlockComponent() {
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
      <p>User Registration</p>
    </div>
  );
}
