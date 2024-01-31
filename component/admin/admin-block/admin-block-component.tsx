import { useLazyQuery } from "@apollo/client";
import style from "./admin-block-style.module.scss";
import { useEffect, useRef } from "react";
import { INVENTORY_QUERY } from "../../../scripts/graphql/inventory-query/inventory-query";
import { INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/inventory-custom-query";

export default function AdminBlockComponent() {
  const usernameRef: any = useRef();
  const [inventoryCustomQuery, { loading, error, data }] = useLazyQuery(
    INVENTORY_CUSTOM_QUERY
  );

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
        <p>Admin Page</p>
        <div className={style.line} />
        <div className={style.input_container}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Search for NFT</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="Enter NFT Id" />
            </div>
          </div>
        </div>
        <div className={`${style.colored_button} ${style.green_button}`}>
          Create NFT
        </div>
        <div style={{ display: "flex", gap: "15px", width: "100%" }}>
          <div className={style.input_container} style={{ width: "100%" }}>
            <div className={style.input_container}>
              <div className={style.input_info}>
                <p style={{ marginBottom: "10px" }}>Set NFT Type</p>
              </div>
              <div className={style.input_box}>
                <input placeholder="NFT Type" />
              </div>
            </div>
          </div>
          <div className={style.input_container} style={{ width: "100%" }}>
            <div className={style.input_container}>
              <div className={style.input_info}>
                <p style={{ marginBottom: "10px" }}>Set NFT Traits</p>
              </div>
              <div className={style.input_box}>
                <input placeholder="NFT Traits" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px", width: "100%" }}>
          <div className={style.input_container} style={{ width: "100%" }}>
            <div className={style.input_container}>
              <div className={style.input_info}>
                <p style={{ marginBottom: "10px" }}>Set NFT Hash</p>
              </div>
              <div className={style.input_box}>
                <input placeholder="NFT Hash" />
              </div>
            </div>
          </div>
          <div className={style.input_container} style={{ width: "100%" }}>
            <div className={style.input_container}>
              <div className={style.input_info}>
                <p style={{ marginBottom: "10px" }}>Set NFT Stars</p>
              </div>
              <div className={style.input_box}>
                <input placeholder="NFT Stars" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px", width: "100%" }}>
          <div className={style.input_container} style={{ width: "100%" }}>
            <div className={style.input_container}>
              <div className={style.input_info}>
                <p style={{ marginBottom: "10px" }}>Set NFT Req</p>
              </div>
              <div className={style.input_box}>
                <input placeholder="NFT Hash" />
              </div>
            </div>
          </div>
          <div className={style.input_container} style={{ width: "100%" }}>
            <div className={style.input_container}>
              <div className={style.input_info}>
                <p style={{ marginBottom: "10px" }}>Set NFT Stars</p>
              </div>
              <div className={style.input_box}>
                <input placeholder="NFT Stars" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <div className={`${style.colored_button} ${style.grey_button}`}>
            Update NFT
          </div>
          <div className={`${style.colored_button} ${style.red_button}`}>
            Soft Delete NFT
          </div>
        </div>
        <div className={style.line} />
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
    </div>
  );
}
