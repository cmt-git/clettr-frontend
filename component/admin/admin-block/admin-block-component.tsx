import { useLazyQuery } from "@apollo/client";
import style from "./admin-block-style.module.scss";
import { useEffect, useRef, useState } from "react";
import { INVENTORY_QUERY } from "../../../scripts/graphql/inventory-query/inventory-query";
import { INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/inventory-custom-query";
import { openPopup } from "../../popup-component/popup-container-component";
import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";
import AdminNFTBlockComponent from "./admin-nft-block-component";
import AdminUsersBlockComponent from "./admin-users-block-component";
import AdminRegistrationBlockComponent from "./admin-registration-block-component";
import AdminLogsComponent from "./admin-logs-component";
import ReportsBlockComponent from "../../reports-component/reports-block-component";
import { Router, useRouter } from "next/router";

export default function AdminBlockComponent() {
  const router = useRouter();
  const [inventoryCustomQuery, { loading, error, data }] = useLazyQuery(
    INVENTORY_CUSTOM_QUERY
  );

  const [blockType, setBlockType]: any = useState(1);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get the value of the 'block' parameter
    const block: string | null = urlParams.get("block");

    if (
      block != null &&
      /^\d+$/.test(block) &&
      Number.parseInt(block) >= 1 &&
      Number.parseInt(block) <= 6
    ) {
      setBlockType(block);
    }

    inventoryCustomQuery({
      variables: {
        not_user: false,
        username: "clettradmin5",
        page: 1,
      },
    });
  }, []);

  return (
    <div className={style.admin_block_root}>
      <div className={style.admin_block_component_main}>
        <div className={style.grey_info_block} style={{ textAlign: "center" }}>
          Admin Page
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => (window.location.href = `/admin?block=${1}`)}
          >
            Users
          </div>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => (window.location.href = `/admin?block=${2}`)}
          >
            NFT
          </div>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => (window.location.href = `/admin?block=${3}`)}
          >
            Registration
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => (window.location.href = `/admin?block=${4}`)}
          >
            Logs
          </div>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => (window.location.href = `/admin?block=${5}`)}
          >
            Reports (Global)
          </div>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => (window.location.href = `/admin?block=${6}`)}
          >
            Reports (Users)
          </div>
        </div>
        <div className={style.line} />
      </div>
      {blockType == 1 ? (
        <AdminUsersBlockComponent />
      ) : blockType == 2 ? (
        <AdminNFTBlockComponent />
      ) : blockType == 3 ? (
        <AdminRegistrationBlockComponent />
      ) : blockType == 4 ? (
        <AdminLogsComponent />
      ) : blockType == 5 ? (
        <ReportsBlockComponent global={true} />
      ) : blockType == 6 ? (
        <ReportsBlockComponent username={true} show_success={true} />
      ) : null}
    </div>
  );
}
