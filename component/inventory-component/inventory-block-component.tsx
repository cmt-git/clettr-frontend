import { useEffect, useState } from "react";
import { decimalFormatter } from "../../scripts/misc/stringFormatter";
import { useSelector } from "react-redux";
import style from "../../styles/component/inventory-components/inventory-block-component-style.module.scss";
import ItemBlockComponent from "../item-block-component/item-block-component";
import PageBlockComponent from "../pageblock-component";
import { openPopup } from "../popup-component/popup-container-component";
import ForgePopupComponent from "./popups/forge-popup-component";
import SetPopupComponent from "./popups/set-popup-component";
import SyncPopupComponent from "./popups/sync-popup-component";
import { RootState } from "../../scripts/redux/rootReducer";
import { useLazyQuery } from "@apollo/client";
import { INVENTORY_CUSTOM_QUERY } from "../../scripts/graphql/inventory-query/inventory-custom-query";
import { store } from "../../pages/_app";

const InventoryBlockComponent = (props: any) => {
  const [specificSearch, setSpecificSearch]: any = useState("Search All");
  const [inventoryCustomQueryData, setInventoryCustomQueryData]: any =
    useState(null);

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const addItemFilterState = useSelector((state: RootState) => {
    return state.addItemFilterState.value;
  });

  const [inventoryCustomQuery, { loading, error, data }] = useLazyQuery(
    INVENTORY_CUSTOM_QUERY
  );
  useEffect(() => {
    if (addItemFilterState != null) {
      inventoryCustomQuery({
        variables: {
          page: 1,
          not_user: props.not_user === true,
          filters: addItemFilterState,
        },
      });
    } else {
      inventoryCustomQuery({
        variables: { page: 1, not_user: props.not_user === true },
      });
    }
  }, []);

  useEffect(() => {
    setInventoryCustomQueryData(data);
  }, [data]);

  return (
    <div className={style.marketplace_block_component_root}>
      <div className={style.wrapper}>
        <div className={style.grey_info_block}>
          <p>Inventory</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <p>
              {decimalFormatter(queryState.user_info.active_nfts)}{" "}
              <span className={style.transparent_text}>Active NFTs</span>
            </p>
            <p>
              {decimalFormatter(queryState.user_info.passive_nfts)}{" "}
              <span className={style.transparent_text}>Passive NFTs</span>
            </p>
          </div>
        </div>
        <div className={`${style.select_box} ${style.select_box_responsive}`}>
          <select onChange={(e: any) => setSpecificSearch(e.target.value)}>
            <option>Search All</option>
            <option>Search Passive NFTs</option>
            <option>Search Active NFTs</option>
            <option>Listed Passive NFTs</option>
            <option>Listed Active NFTs</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="51"
            viewBox="0 0 25 51"
          >
            <g transform="translate(-1393 -359)">
              <path
                d="M12.5,0,25,19H0Z"
                transform="translate(1393 359)"
                fill="#fff"
              />
              <path
                d="M12.5,0,25,19H0Z"
                transform="translate(1418 410) rotate(180)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <div className={style.input_box} style={{ height: "50px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56.515"
            height="56.515"
            viewBox="0 0 56.515 56.515"
            style={{
              transform: "scale(0.3)",
              marginRight: "-20px",
              marginLeft: "-10px",
            }}
          >
            <g transform="translate(0 56.515)">
              <path
                d="M33.379-14.481A22.323,22.323,0,0,1,22.44-11.635,22.451,22.451,0,0,1,0-34.075a22.451,22.451,0,0,1,22.44-22.44,22.451,22.451,0,0,1,22.44,22.44,22.323,22.323,0,0,1-2.846,10.939L54.723-10.448A6.12,6.12,0,0,1,56.515-6.12a6.12,6.12,0,0,1-1.792,4.327h0A6.12,6.12,0,0,1,50.4,0a6.12,6.12,0,0,1-4.327-1.793ZM22.44-48.11A14.041,14.041,0,0,1,36.474-34.075,14.041,14.041,0,0,1,22.44-20.041,14.041,14.041,0,0,1,8.406-34.075,14.041,14.041,0,0,1,22.44-48.11Z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </g>
          </svg>
          <input type="text" placeholder={"Search By Hash"} />
        </div>
      </div>
      {specificSearch == "Search Active NFTs" ? (
        <div className={style.filter_container}>
          <div
            className={style.select_box}
            style={{ height: "50px", width: "100%" }}
          >
            <select>
              <option>1 Star</option>
              <option>2 Star</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="51"
              viewBox="0 0 25 51"
            >
              <g transform="translate(-1393 -359)">
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1393 359)"
                  fill="#fff"
                />
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1418 410) rotate(180)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div
            className={style.select_box}
            style={{ height: "50px", width: "100%" }}
          >
            <select>
              <option>Pink</option>
              <option>Purple</option>
              <option>Blue</option>
              <option>Teal</option>
              <option>Lime</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Orange</option>
              <option>Red</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="51"
              viewBox="0 0 25 51"
            >
              <g transform="translate(-1393 -359)">
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1393 359)"
                  fill="#fff"
                />
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1418 410) rotate(180)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div
            className={style.select_box}
            style={{ height: "50px", width: "100%" }}
          >
            <select>
              <option>Striped</option>
              <option>Spotted</option>
              <option>Zigzag</option>
              <option>Checkered</option>
              <option>Cross</option>
              <option>Sharp</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="51"
              viewBox="0 0 25 51"
            >
              <g transform="translate(-1393 -359)">
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1393 359)"
                  fill="#fff"
                />
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1418 410) rotate(180)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      ) : specificSearch == "Search Passive NFTs" ? (
        <div className={style.filter_container}>
          <div
            className={style.select_box}
            style={{ height: "50px", width: "100%" }}
          >
            <select>
              <option>Any Star</option>
              <option>1 Star</option>
              <option>2 Star</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="51"
              viewBox="0 0 25 51"
            >
              <g transform="translate(-1393 -359)">
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1393 359)"
                  fill="#fff"
                />
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1418 410) rotate(180)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div
            className={style.select_box}
            style={{ height: "50px", width: "100%" }}
          >
            <select>
              <option>Any Requirement</option>
              <option>1 Requirement</option>
              <option>2 Requirements</option>
              <option>3 Requirements</option>
              <option>4 Requirements</option>
              <option>5 Requiremenst</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="51"
              viewBox="0 0 25 51"
            >
              <g transform="translate(-1393 -359)">
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1393 359)"
                  fill="#fff"
                />
                <path
                  d="M12.5,0,25,19H0Z"
                  transform="translate(1418 410) rotate(180)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      ) : null}
      {["Search Passive NFTs", "Search Active NFTs"].includes(
        specificSearch
      ) ? (
        <div
          className={`${style.colored_button} ${style.grey_button}`}
          style={{ marginTop: "10px", height: "44px" }}
        >
          Search by Filter
        </div>
      ) : null}
      {props.popup !== true ? (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div
            className={`${style.colored_button} ${style.grey_button}`}
            style={{ height: "44px" }}
            onClick={() => openPopup(<SetPopupComponent />)}
          >
            Set
          </div>
          <div
            className={`${style.colored_button} ${style.grey_button}`}
            style={{ height: "44px" }}
            onClick={() => openPopup(<ForgePopupComponent />)}
          >
            Forge
          </div>
          <div
            className={`${style.colored_button} ${style.grey_button}`}
            style={{ height: "44px" }}
            onClick={() => openPopup(<SyncPopupComponent />)}
          >
            Sync
          </div>
        </div>
      ) : null}
      <div className={style.line} />
      {props.popup !== true ? (
        <div className={style.mbc_item_card_container}>
          {queryState.owned_nfts.inventory_nfts != null &&
          queryState.owned_nfts.inventory_nfts.length > 0 ? (
            (() => {
              let mbc_itemcard_array: any = [];

              for (
                let i = 0;
                i < queryState.owned_nfts.inventory_nfts.length;
                i++
              ) {
                mbc_itemcard_array.push(
                  <ItemBlockComponent
                    data={queryState.owned_nfts.inventory_nfts[i]}
                    add_index={props.add_index}
                  />
                );
              }

              return mbc_itemcard_array;
            })()
          ) : (
            <div
              className={style.grey_info_block}
              style={{ justifyContent: "center" }}
            >
              ⚠️&nbsp;No NFTs found!
            </div>
          )}
        </div>
      ) : (
        <div className={style.mbc_item_card_container}>
          {inventoryCustomQueryData != null &&
          inventoryCustomQueryData.owned_nfts.inventory_nfts.length > 0 ? (
            (() => {
              let mbc_itemcard_array: any = [];

              let query_set_ids: any = [];
              let add_state_set_ids: any = [];
              if (queryState != null && queryState.user_set != null) {
                for (let i = 0; i < queryState.user_set.user_set.length; i++) {
                  if (queryState.user_set.user_set[i] != null) {
                    query_set_ids.push(queryState.user_set.user_set[i].id);
                  }
                }
              }

              if (
                store.getState().addItemIndexState.value != null &&
                store.getState().addItemIndexState.value.length > 0
              ) {
                for (
                  let i = 0;
                  i < store.getState().addItemIndexState.value.length;
                  i++
                ) {
                  if (store.getState().addItemIndexState.value[i] != null) {
                    add_state_set_ids.push(
                      store.getState().addItemIndexState.value[i].id
                    );
                  }
                }
              }

              for (
                let i = 0;
                i < inventoryCustomQueryData.owned_nfts.inventory_nfts.length;
                i++
              ) {
                if (
                  query_set_ids.includes(
                    inventoryCustomQueryData.owned_nfts.inventory_nfts[i].id
                  ) == false &&
                  (props.no_5_stars === true
                    ? inventoryCustomQueryData.owned_nfts.inventory_nfts[i]
                        .nft_stars < 5
                    : true) &&
                  inventoryCustomQueryData.owned_nfts.inventory_nfts[i]
                    .status != "market_sell" &&
                  add_state_set_ids.includes(
                    inventoryCustomQueryData.owned_nfts.inventory_nfts[i].id
                  ) == false
                ) {
                  mbc_itemcard_array.push(
                    <ItemBlockComponent
                      data={
                        inventoryCustomQueryData.owned_nfts.inventory_nfts[i]
                      }
                      add_index={props.add_index}
                    />
                  );
                }
                //mbc_itemcard_array.push(<ItemBlockComponent data={inventoryCustomQueryData.owned_nfts.inventory_nfts[i]} add_index={props.add_index}/>);
              }

              if (mbc_itemcard_array.length == 0) {
                return (
                  <div
                    className={style.grey_info_block}
                    style={{ justifyContent: "center" }}
                  >
                    ⚠️&nbsp;No NFTs found!
                  </div>
                );
              } else {
                return mbc_itemcard_array;
              }
            })()
          ) : (
            <div
              className={style.grey_info_block}
              style={{ justifyContent: "center" }}
            >
              ⚠️&nbsp;No NFTs found!
            </div>
          )}
        </div>
      )}
      <PageBlockComponent
        query={props.popup === true ? inventoryCustomQuery : props.query}
        cut={props.popup === true ? "settings" : ""}
      />
    </div>
  );
};

export default InventoryBlockComponent;
