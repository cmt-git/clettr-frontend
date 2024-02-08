import { useRef, useState } from "react";
import style from "./admin-block-style.module.scss";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { openPopup } from "../../popup-component/popup-container-component";
import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import ItemBlockComponent from "../../item-block-component/item-block-component";
import PageBlockComponent from "../../pageblock-component";
import { ADMIN_INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/admin-inventory-custom-query copy";
import { UserBan } from "../../../scripts/router/user/scripts/userBanHandler";

export default function AdminUsersBlockComponent() {
  const usernameRef: any = useRef();

  const [inventoryCustomQuery, { loading, error, data }] = useLazyQuery(
    ADMIN_INVENTORY_CUSTOM_QUERY
  );

  const [queryParameters, setQueryParameters]: any = useState(null);
  const [userBanned, setUserBanned] = useState(false);

  async function handleClick() {
    const query_parameters = {
      not_user: true,
      username: usernameRef.current.value,
    };
    setQueryParameters(query_parameters);

    const inventory = await inventoryCustomQuery({
      variables: {
        page: 1,
        ...query_parameters,
      },
    });

    if (inventory?.data?.owned_nfts?.inventory_nfts.length > 0) {
      setUserBanned(inventory?.data?.user?.banned);
    } else {
      link_messageBoxShow("User not found.", false);
    }
    // console.log(inventory);
  }

  async function userEnforcementClickHandler() {
    const user_ban = await UserBan({ username: usernameRef.current.value });
    if (user_ban?.success == true) {
      setUserBanned(!userBanned);
    }
  }

  return (
    <div className={style.admin_mini_block}>
      <div
        className={style.input_container}
        style={{ maxWidth: "750px", width: "100%" }}
      >
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
              <input placeholder="Enter Username" ref={usernameRef} />
            </div>
            <div
              className={`${style.colored_button} ${style.grey_button}`}
              style={{ maxWidth: "150px" }}
              onClick={async () => {
                await handleClick();
              }}
            >
              Search
            </div>
            {data?.owned_nfts?.inventory_nfts.length > 0 ? (
              <>
                {userBanned == false ? (
                  <div
                    className={`${style.colored_button} ${style.red_button}`}
                    style={{
                      maxWidth: "150px",
                      textAlign: "center",
                    }}
                    onClick={() => {
                      userEnforcementClickHandler();
                    }}
                  >
                    Ban User
                  </div>
                ) : (
                  <div
                    className={
                      data?.owned_nfts?.inventory_nfts.length > 1
                        ? `${style.colored_button} ${style.green_button}`
                        : style.grey_info_block
                    }
                    style={{
                      maxWidth: "150px",
                      textAlign: "center",
                      color:
                        data?.owned_nfts?.inventory_nfts.length > 0
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(255, 255, 255, 0.5)",
                    }}
                    onClick={() => {
                      userEnforcementClickHandler();
                    }}
                  >
                    Unban User
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className={style.admin_mini_block_items}>
        {data?.owned_nfts?.inventory_nfts.map((value: any) => {
          return (
            <ItemBlockComponent
              data={value}
              key={1}
              //add_index={props.add_index}
            />
          );
        })}
      </div>
      {data?.owned_nfts?.inventory_nfts.length > 0 ? null : (
        <div
          className={style.grey_info_block}
          style={{
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          ⚠️&nbsp;No NFTs found!
        </div>
      )}
      <PageBlockComponent
        query={inventoryCustomQuery}
        variables={queryParameters}
      />
    </div>
  );
}
