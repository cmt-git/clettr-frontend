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

export default function AdminBlockComponent() {
  const [inventoryCustomQuery, { loading, error, data }] = useLazyQuery(
    INVENTORY_CUSTOM_QUERY
  );

  const [blockType, setBlockType]: any = useState(1);

  useEffect(() => {
    inventoryCustomQuery({
      variables: {
        not_user: false,
        username: "clettradmin5",
        page: 1,
        // not_user: true,
        //filters: addItemFilterState,
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
            onClick={() => setBlockType(1)}
          >
            Users
          </div>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => setBlockType(2)}
          >
            NFT
          </div>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => setBlockType(3)}
          >
            Registration
          </div>
          <div
            className={`${style.colored_button} ${style.black_button}`}
            onClick={() => setBlockType(4)}
          >
            Logs
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
      ) : (
        <AdminLogsComponent />
      )}
    </div>
  );
}
