import { useEffect, useRef, useState } from "react";
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
import SelectBoxComponent from "../select-box-component/select-box-component";
import MintMarketPopupComponent from "../marketplace-component/popups/mint-market-popup-component";
import { link_messageBoxShow } from "../messagebox-component/messagebox-component";
import { MarketItemCard } from "../marketplace-component/marketplace-block-component";

const InventoryBlockComponent = (props: any) => {
  const [nftType, setNFTType]: any = useState(props.nft_type || "Search All");
  const [nftStar, setNFTStar]: any = useState("Any Star ");
  const [nftRequirements, setNFTRequirements]: any =
    useState("Any Requirement");
  const [nftRequirement1, setNFTRequirements1]: any =
    useState("Any Requirement");
  const [nftRequirement2, setNFTRequirements2]: any =
    useState("Any Requirement");
  const [nftRequirement3, setNFTRequirements3]: any =
    useState("Any Requirement");
  const [nftRequirement4, setNFTRequirements4]: any =
    useState("Any Requirement");
  const [nftRequirement5, setNFTRequirements5]: any =
    useState("Any Requirement");
  const [nftLetter, setNFTLetter]: any = useState("Any Letter");
  const [nftColor, setNFTColor]: any = useState("Any Color");
  const [nftPattern, setNFTPattern]: any = useState("Any Pattern");
  const [nftCurrency, setNFTCurrency]: any = useState("Any Currency");
  const [nftCurrencyOperator, setNFTCurrencyOperator]: any =
    useState("No Operator");
  const [nftHash, setNFTHash]: any = useState("");
  const [nftCost, setNFTCost]: any = useState("");

  const [inventoryCustomQueryData, setInventoryCustomQueryData]: any =
    useState(null);

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const addItemFilterState = useSelector((state: RootState) => {
    return state.addItemFilterState.value;
  });

  const [inventoryCustomQuery, { loading, error, data }] = useLazyQuery(
    INVENTORY_CUSTOM_QUERY,
    {
      fetchPolicy: "network-only",
    }
  );

  const queryVariables = {
    nft_type: nftType,
    nft_star: nftStar,
    username: props.username,
    nft_requirements: nftRequirements,
    nft_requirement_1: nftRequirement1,
    nft_requirement_2: nftRequirement2,
    nft_requirement_3: nftRequirement3,
    nft_requirement_4: nftRequirement4,
    nft_requirement_5: nftRequirement5,
    nft_pattern: nftPattern,
    nft_letter: nftLetter,
    nft_color: nftColor,
    nft_hash: nftHash,
    nft_market_currency: nftCurrency,
    nft_market_operator: nftCurrencyOperator,
    nft_market_cost: nftCost,
    nft_market_only: props.market_inventory === true,
    set_traits: props.set_traits,
  };

  function handleFilterClick() {
    inventoryCustomQuery({
      variables: {
        page: 1,
        not_user:
          props.market_inventory === true ||
          props.global === true ||
          props.username
            ? true
            : props.not_user === true,
        filters: addItemFilterState,
        ...queryVariables,
      },
    });
  }

  useEffect(() => {
    console.log(props.username, " - username12");
    inventoryCustomQuery({
      variables: {
        page: 1,
        not_user:
          props.market_inventory === true ||
          props.global === true ||
          props.username
            ? true
            : props.not_user === true,
        filters: addItemFilterState,
        ...queryVariables,
      },
    });
    // if (addItemFilterState != null) {
    //   inventoryCustomQuery({
    //     variables: {
    //       page: 1,
    //       not_user: props.not_user === true,
    //       filters: addItemFilterState,
    //       ...queryVariables,
    //     },
    //   });
    // } else {
    //   inventoryCustomQuery({
    //     variables: {
    //       page: 1,
    //       not_user: props.not_user === true,
    //       ...queryVariables,
    //     },
    //   });
    // }
  }, [props.username]);

  useEffect(() => {
    setInventoryCustomQueryData(data);
  }, [data]);

  useEffect(() => {
    setNFTStar("Any Star");
    setNFTRequirements("Any Requirement");
    setNFTRequirements1("Any Requirement");
    setNFTRequirements2("Any Requirement");
    setNFTRequirements3("Any Requirement");
    setNFTRequirements4("Any Requirement");
    setNFTRequirements5("Any Requirement");
    setNFTColor("Any Color");
    setNFTPattern("Any Pattern");
    setNFTCurrency("Any Currency");
    setNFTCurrencyOperator("No Operator");
  }, [nftType]);

  return (
    <div className={style.marketplace_block_component_root}>
      <div className={style.wrapper}>
        {props.market_inventory === true ? (
          <div className={style.grey_info_block}>
            <p>Marketplace</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>
                {queryState != null &&
                queryState.market_nfts != null &&
                queryState.market_nfts.active_nft != null
                  ? decimalFormatter(queryState.market_nfts.active_nfts)
                  : 0}{" "}
                <span className={style.transparent_text}>Active NFTs</span>
              </p>
              <p>
                {queryState != null &&
                queryState.market_nfts != null &&
                queryState.market_nfts.passive_nfts != null
                  ? decimalFormatter(queryState.market_nfts.passive_nfts)
                  : 0}{" "}
                <span className={style.transparent_text}>Passive NFTs</span>
              </p>
            </div>
          </div>
        ) : (
          <div className={style.grey_info_block}>
            <p>Inventory</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>
                {decimalFormatter(queryState?.user_info?.active_nfts)}{" "}
                <span className={style.transparent_text}>Active NFTs</span>
              </p>
              <p>
                {decimalFormatter(queryState?.user_info?.passive_nfts)}{" "}
                <span className={style.transparent_text}>Passive NFTs</span>
              </p>
            </div>
          </div>
        )}
        <SelectBoxComponent
          style={style}
          data={[
            "Search All",
            ...(props.market_inventory !== true
              ? ["Search Passive NFTs", "Search Active NFTs"]
              : []),
            "Listed Passive NFTs",
            "Listed Active NFTs",
          ]}
          state={setNFTType}
        />
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
                fillRule="evenodd"
              />
            </g>
          </svg>
          <input
            type="text"
            placeholder={"Search By Hash"}
            onChange={(e) => {
              setNFTHash(e.currentTarget.value);
            }}
          />
        </div>
      </div>
      {nftType == "Search Active NFTs" || nftType == "Listed Active NFTs" ? (
        <div className={style.filter_container}>
          <SelectBoxComponent
            style={style}
            data={[
              "Any Star",
              "1 Star",
              "2 Star",
              "3 Star",
              "4 Star",
              "5 Star",
            ]}
            state={setNFTStar}
          />
          <SelectBoxComponent
            style={style}
            data={[
              "Any Letter",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
            ]}
            state={setNFTLetter}
          />
          <SelectBoxComponent
            style={style}
            data={[
              "Any Color",
              "Pink",
              "Purple",
              "Blue",
              "Teal",
              "Lime",
              "Green",
              "Yellow",
              "Orange",
              "Red",
            ]}
            state={setNFTColor}
          />
          <SelectBoxComponent
            style={style}
            data={[
              "Any Pattern",
              "Striped",
              "Spotted",
              "Zigzag",
              "Checkered",
              "Cross",
              "Sharp",
            ]}
            state={setNFTPattern}
          />
        </div>
      ) : nftType == "Search Passive NFTs" ||
        nftType == "Listed Passive NFTs" ? (
        <div className={style.filter_container}>
          <SelectBoxComponent
            style={style}
            data={[
              "Any Star",
              "1 Star",
              "2 Star",
              "3 Star",
              "4 Star",
              "5 Star",
            ]}
            state={setNFTStar}
          />
          <SelectBoxComponent
            style={style}
            data={[
              "Any Color",
              "Pink",
              "Purple",
              "Blue",
              "Teal",
              "Lime",
              "Green",
              "Yellow",
              "Orange",
              "Red",
            ]}
            state={setNFTColor}
          />
          <SelectBoxComponent
            style={style}
            data={[
              "Any Requirement",
              "1 Requirement",
              "2 Requirements",
              "3 Requirements",
              "4 Requirements",
              "5 Requirements",
            ]}
            state={setNFTRequirements}
          />
        </div>
      ) : null}
      {nftType == "Listed Passive NFTs" || nftType == "Listed Active NFTs" ? (
        <div className={style.filter_container}>
          <SelectBoxComponent
            style={style}
            data={["Any Currency", "USDC", "ETTR"]}
            state={setNFTCurrency}
          />
          <SelectBoxComponent
            style={style}
            data={[
              "No Operator",
              "Equals (=)",
              "Less Than (<)",
              "Less Than Or Equals (<=)",
              "Greater Than (>)",
              "Greater Than Or Equals (>=)",
            ]}
            state={setNFTCurrencyOperator}
          />
          <div className={style.input_box} style={{ height: "50px" }}>
            <input
              type="text"
              placeholder={"Enter Cost"}
              onChange={(e) => {
                setNFTCost(e.currentTarget.value);
              }}
            />
          </div>
        </div>
      ) : null}
      {nftRequirements != "Any Requirement" ? (
        <div className={style.filter_container}>
          {(() => {
            let array: any = [];

            let requirement_limit = Number.parseInt(
              nftRequirements.split(" ")[0]
            );

            let data = [
              "Any Requirement",
              "1",
              "2",
              "3",
              "4",
              "5",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
              "pink",
              "purple",
              "blue",
              "teal",
              "lime",
              "green",
              "yellow",
              "orange",
              "red",
              "striped",
              "spotted",
              "zigzag",
              "checkered",
              "cross",
              "sharp",
            ];

            const req_states = [
              setNFTRequirements1,
              setNFTRequirements2,
              setNFTRequirements3,
              setNFTRequirements4,
              setNFTRequirements5,
            ];

            for (let i = 0; i < requirement_limit; i++) {
              array.push(
                <SelectBoxComponent
                  style={style}
                  data={data}
                  state={req_states[i]}
                />
              );
            }

            return array;
          })()}
        </div>
      ) : null}
      <div
        className={`${style.colored_button} ${style.grey_button}`}
        style={{ marginTop: "10px", height: "44px" }}
        onClick={() => {
          handleFilterClick();
        }}
      >
        Search by Filter
      </div>
      {props.popup !== true && props.filters_only !== true ? (
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
          {/* <div
            className={`${style.colored_button} ${style.grey_button}`}
            style={{ height: "44px" }}
            onClick={() => openPopup(<SyncPopupComponent />)}
          >
            Sync
          </div> */}
        </div>
      ) : null}
      {props.market_inventory == true ? (
        <div
          className={`${style.grey_button} ${style.colored_button} ${style.button_responsive}`}
          onClick={() => {
            if (store.getState().queryState.value.user != null) {
              openPopup(<MintMarketPopupComponent />);
            } else {
              link_messageBoxShow(
                "You must be logged in for this action.",
                false
              );
            }
          }}
          style={{ marginTop: "10px" }}
        >
          <img
            src="./images/svgs/clettr-logo.svg"
            alt="clettr-logo"
            style={{ width: "20px", marginRight: "5px" }}
          />
          <p>Mint Market</p>
        </div>
      ) : null}
      <div className={style.line} />
      <div className={style.mbc_item_card_container}>
        {inventoryCustomQueryData != null &&
        inventoryCustomQueryData?.owned_nfts?.inventory_nfts?.length > 0 ? (
          (() => {
            let mbc_itemcard_array: any = [];

            let query_set_ids: any = [];
            let add_state_set_ids: any = [];

            if (props.set_show !== true) {
              if (queryState != null && queryState.user_set != null) {
                for (let i = 0; i < queryState.user_set.user_set.length; i++) {
                  if (queryState.user_set.user_set[i] != null) {
                    query_set_ids.push(queryState.user_set.user_set[i].id);
                  }
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
              // if (
              //   props.market_sell == true &&
              //   inventoryCustomQueryData.owned_nfts.inventory_nfts[i].status !=
              //     "market_sell"
              // ) {
              //   continue;
              // }

              if (
                query_set_ids.includes(
                  inventoryCustomQueryData.owned_nfts.inventory_nfts[i].id
                ) == false &&
                (props.no_5_stars === true
                  ? inventoryCustomQueryData.owned_nfts.inventory_nfts[i]
                      .nft_stars < 5
                  : true) &&
                add_state_set_ids.includes(
                  inventoryCustomQueryData.owned_nfts.inventory_nfts[i].id
                ) == false
              ) {
                mbc_itemcard_array.push(
                  props.market_inventory === true ? (
                    <MarketItemCard
                      data={
                        inventoryCustomQueryData.owned_nfts.inventory_nfts[i]
                      }
                    />
                  ) : (
                    <ItemBlockComponent
                      data={
                        inventoryCustomQueryData.owned_nfts.inventory_nfts[i]
                      }
                      add_index={props.add_index}
                      no_click={props.global === true}
                      custom_click_function={() => {
                        window.location.href = `/admin?block=2&nft_id=${inventoryCustomQueryData.owned_nfts.inventory_nfts[i].nft_token_id}`;
                      }}
                    />
                  )
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
        ) : loading != true ? (
          <div
            className={style.grey_info_block}
            style={{ justifyContent: "center" }}
          >
            ⚠️&nbsp;No NFTs
          </div>
        ) : null}
      </div>
      {/* {props.popup !== true ? (
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
      )} */}
      {/* {data} */}
      {inventoryCustomQueryData?.owned_nfts?.inventory_nfts?.length > 0 ? (
        <PageBlockComponent
          query={props.popup === true ? inventoryCustomQuery : props.query}
          cut={props.popup === true ? "settings" : ""}
          variables={queryVariables}
        />
      ) : null}
    </div>
  );
};

export default InventoryBlockComponent;
