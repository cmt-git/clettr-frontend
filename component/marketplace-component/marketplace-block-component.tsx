import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Web3 from "web3";
import { store } from "../../pages/_app";
import { decimalFormatter } from "../../scripts/misc/stringFormatter";
import { RootState } from "../../scripts/redux/rootReducer";
import { marketBuyNFT } from "../../scripts/router/nfts/nfts-request";
import style from "../../styles/component/marketplace-components/marketplace-block-component-style.module.scss";
import ItemBlockComponent from "../item-block-component/item-block-component";
import { link_messageBoxShow } from "../messagebox-component/messagebox-component";
import PageBlockComponent from "../pageblock-component";
import { openPopup } from "../popup-component/popup-container-component";
import MintMarketPopupComponent from "./popups/mint-market-popup-component";
import { formatTokenBalance } from "../../scripts/misc/contractManager";
import settings from "../../settings.json";

const ettr_json = require("../../abis/Ettr.json");
const susdc_json = require("../../abis/SUSDC.json");
const web3 = new Web3(
  `wss://${
    settings.environment == "development" ? "localhost" : "159.223.39.105:7545"
  }`
);

const MarketplaceBlockComponent = (props: any) => {
  const [searchBy, setSearchBy]: any = useState("Search by Hash");
  const [specificSearch, setSpecificSearch]: any = useState("Search All");

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const [inputValue, setInputValue]: any = useState(null);
  const [CLTRNFTContract, setCLTRNFTContract]: any = useState(null);

  useEffect(() => {
    (async () => {
      const cltrnft_json = require("../../abis/CLTRNFT.json");
      const web3 = new Web3(
        `wss://${
          settings.environment == "development"
            ? "localhost:7545"
            : "159.223.39.105:7545"
        }`
      );

      const networkId = await web3.eth.net.getId();
      const networkData = cltrnft_json.networks[networkId];

      if (networkData) {
        const cltrnft_abi = cltrnft_json.abi;
        const address = networkData.address;
        const contract = new web3.eth.Contract(cltrnft_abi, address);
        setCLTRNFTContract(contract);
      } else {
        alert("Smart Contract has not been detected");
      }
    })();
  }, []);

  const MarketItemCard = (props: any) => {
    //! TEMPORARY
    const [isSRR, setSRR]: any = useState(null);

    useEffect(() => {
      setSRR(true);
    }, []);
    //! TEMPORARY

    return (
      <div>
        {isSRR
          ? [
              <div
                className={style.grey_info_block}
                style={{
                  marginBottom: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
                key={0}
              >
                <p className={style.transparent_text}>
                  Owner <span>{props.data.current_owner}</span>
                </p>
              </div>,
              <div className={style.market_item_card} key={1}>
                <ItemBlockComponent data={props.data} />
              </div>,
              <div
                key={2}
                className={`${style.colored_button} ${style.grey_button}`}
                style={{
                  marginTop: "15px",
                  justifyContent: "center",
                  height: "50px",
                }}
                onClick={async () => {
                  if (
                    (store.getState().queryState.value.user != null &&
                      props.data.current_owner ==
                        store.getState().queryState.value.user.username) ||
                    store.getState().queryState.value.user == null
                  ) {
                    if (store.getState().queryState.value.user == null) {
                      link_messageBoxShow(
                        "You must be logged in for this action.",
                        false
                      );
                    } else {
                      link_messageBoxShow("Cannot buy your own NFT.", false);
                    }
                  } else {
                    const currency =
                      props.data.market_info.split("-")[0] == "ettr"
                        ? "ettr"
                        : "susdc";

                    // Connect to the ERC-20 token contract using its ABI and address
                    const tokenContract =
                      currency == "ettr"
                        ? new web3.eth.Contract(
                            ettr_json.abi,
                            store.getState().currentEttrContractAddressState.value
                          )
                        : new web3.eth.Contract(
                            susdc_json.abi,
                            store.getState().currentSUSDCContractAddressState.value
                          );

                    // Call the balanceOf function on the ERC-20 token contract
                    const tokenBalance = formatTokenBalance(
                      await tokenContract.methods
                        //@ts-ignore
                        .balanceOf(store.getState().currentWalletAccountState)
                        .call(),
                      18
                    );

                    if (
                      tokenBalance >=
                      Number(props.data.market_info.split("-")[1])
                    ) {
                      CLTRNFTContract.methods
                        .cltrnft_market_buy(
                          props.data.nft_token_id,
                          Number(props.data.market_info.split("-")[1]),
                          store.getState().currentEttrContractAddressState
                            .value,
                          store.getState().currentSUSDCContractAddressState
                            .value,
                          currency == "ettr" ? 0 : 1
                        )
                        .send({
                          //@ts-ignore
                          from: store.getState().currentWalletAccountState
                            .value,
                          gas: 6721975,
                        })
                        .on("transactionHash", (hash: any) => {
                          (async () => {
                            await marketBuyNFT({
                              nft_id: props.data.id,
                            });
                            window.location.reload();
                          })();
                        });
                    } else {
                      link_messageBoxShow(
                        "You do not have sufficient amount",
                        false
                      );
                    }
                  }
                }}
              >
                {props.data.market_info.split("-")[0] == "ettr" ? (
                  <img
                    src="./images/svgs/clettr-token.svg"
                    alt="clettr-logo"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                ) : (
                  <img
                    src="./images/svgs/usdc-token.svg"
                    alt="usdc-logo"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                )}
                <p style={{ display: "flex", gap: "5px" }}>
                  {props.data.market_info.split("-")[1]}
                  <span className={style.transparent_text}>
                    {decimalFormatter(
                      store.getState().tickerPriceState.value != null
                        ? store.getState().tickerPriceState.value
                        : 0
                    )}
                  </span>
                  <span className={style.transparent_text}>
                    {store.getState().currentCurrencyState.value.toUpperCase()}
                  </span>
                </p>
              </div>,
            ]
          : null}
      </div>
    );
  };

  return (
    <div className={style.marketplace_block_component_root}>
      <div className={style.wrapper}>
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
        >
          <img
            src="./images/svgs/clettr-logo.svg"
            alt="clettr-logo"
            style={{ width: "20px", marginRight: "5px" }}
          />
          <p>Mint Market</p>
        </div>
        <div className={style.vertical_line} style={{ width: "7px" }} />
        <div className={`${style.select_box} ${style.select_box_responsive}`}>
          <select onChange={(e: any) => setSpecificSearch(e.target.value)}>
            <option>Search All</option>
            <option>Search Passive NFTs</option>
            <option>Search Active NFTs</option>
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
                fillRule="evenodd"
              />
            </g>
          </svg>
          <input type="text" placeholder={searchBy} />
        </div>
        <div className={`${style.select_box} ${style.select_box_responsive2}`}>
          <select onChange={(e: any) => setSearchBy(e.target.value)}>
            <option>Search by Hash</option>
            <option>Search by Player</option>
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
      <div className={style.line} />
      <div className={style.mbc_item_card_container}>
        {queryState != null &&
        queryState.market_nfts != null &&
        queryState.market_nfts.market_nfts.length > 0 ? (
          (() => {
            let mbc_itemcard_array: any = [];

            for (
              let i = 0;
              i < queryState.market_nfts.market_nfts.length;
              i++
            ) {
              mbc_itemcard_array.push(
                <MarketItemCard data={queryState.market_nfts.market_nfts[i]} />
              );
            }

            return mbc_itemcard_array;
          })()
        ) : (
          <div
            className={style.grey_info_block}
            style={{ justifyContent: "center", display: "flex" }}
          >
            ⚠️&nbsp;No Market Items
          </div>
        )}
      </div>
      <PageBlockComponent query={props.query} />
    </div>
  );
};

export default MarketplaceBlockComponent;
