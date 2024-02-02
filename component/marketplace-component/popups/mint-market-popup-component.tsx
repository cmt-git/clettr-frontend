import {
  decimalFormatter,
  generateLongId,
} from "../../../scripts/misc/stringFormatter";
import { mintNFT } from "../../../scripts/router/nfts/nfts-request";
import { useSelector } from "react-redux";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import ItemBlockComponent from "../../item-block-component/item-block-component";
import { phpPrice } from "../../navbar-component/subcomponents/navbar-price-counter-component";
import { closePopup } from "../../popup-component/popup-container-component";
import { RootState } from "../../../scripts/redux/rootReducer";
import { store } from "../../../pages/_app";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { formatTokenBalance } from "../../../scripts/misc/contractManager";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import settings from "../../../settings.json";

const cltrnft_json = require("../../../abis/CLTRNFT.json");
const ettr_json = require("../../../abis/Ettr.json");
const susdc_json = require("../../../abis/SUSDC.json");
const web3 = new Web3(
  `wss://${
    settings.environment == "development" ? "localhost" : "clettr.com"
  }:7545`
);

const MintMarketPopupComponent = () => {
  const [inputValue, setInputValue]: any = useState(null);
  const [CLTRNFTContract, setCLTRNFTContract]: any = useState(null);

  useEffect(() => {
    (async () => {
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
    return (
      <div>
        <div className={style.grey_info_block} style={{ marginBottom: "15px" }}>
          <p
            className={style.transparent_text}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            Type{" "}
            <span style={{ marginLeft: "5px" }}>
              {props.type == "passive" ? "Passive NFT" : "Active NFT"}
            </span>
          </p>
        </div>
        <ItemBlockComponent type={props.type} mint={true} hover={false} />
        <div
          className={`${style.colored_button} ${style.grey_button}`}
          style={{
            marginTop: "15px",
            justifyContent: "center",
            height: "50px",
          }}
          onClick={async () => {
            let token_uri: string = generateLongId();

            // Connect to the ERC-20 token contract using its ABI and address
            const tokenContract =
              props.type == "passive"
                ? new web3.eth.Contract(
                    susdc_json.abi,
                    store.getState().currentSUSDCContractAddressState.value
                  )
                : new web3.eth.Contract(
                    ettr_json.abi,
                    store.getState().currentEttrContractAddressState.value
                  );

            // Call the balanceOf function on the ERC-20 token contract
            const tokenBalance = formatTokenBalance(
              await tokenContract.methods
                //@ts-ignore
                .balanceOf(store.getState().currentWalletAccountState)
                .call(),
              18
            );

            let nft_amount: number = props.type == "passive" ? 5.0 : 50.0;
            if (tokenBalance >= nft_amount) {
              CLTRNFTContract.methods
                .cltrnft_mint(
                  token_uri,
                  nft_amount,
                  store.getState().currentEttrContractAddressState.value,
                  store.getState().currentSUSDCContractAddressState.value,
                  props.type == "passive" ? 1 : 0
                )
                .send({
                  //@ts-ignore
                  from: store.getState().currentWalletAccountState,
                  gas: 6721975,
                })
                .on("transactionHash", (hash: any) => {})
                .on("receipt", (receipt: any) => {
                  if (receipt.events && receipt.events.TokenMinted) {
                    const event = receipt.events.TokenMinted;
                    const sender = event.returnValues.sender; // Change "sender" to the correct parameter name in the event
                    const tokenId = event.returnValues.tokenId; // Change "tokenId" to the correct parameter name in the event

                    (async () => {
                      await mintNFT({
                        type: props.type,
                        token_id: tokenId,
                        token_uri: token_uri,
                      });
                      //window.location.reload();
                    })();

                    // Use the values as needed
                  }
                });
            } else {
              link_messageBoxShow(
                `Your ${
                  props.type == "passive" ? "SUSDC" : "ETTR"
                } balance is not sufficient enough!`,
                false
              );
            }
          }}
        >
          <img
            src={
              props.type == "passive"
                ? "./images/svgs/usdc-token.svg"
                : "./images/svgs/clettr-token.svg"
            }
            alt="clettr-logo"
            style={{ width: "20px", marginRight: "5px" }}
          />
          {props.type == "passive" ? (
            <p>
              5.00
              <span className={style.transparent_text}>
                {decimalFormatter(5.0 * phpPrice)} PHP
              </span>
            </p>
          ) : (
            <p>
              50.00{" "}
              <span
                className={style.transparent_text}
                style={{ margin: "0px 5px" }}
              >
                {decimalFormatter(
                  store.getState().tickerPriceState.value != null
                    ? 50.0 * store.getState().tickerPriceState.value
                    : 0
                )}
              </span>
              <span className={style.transparent_text}>
                {store.getState().currentCurrencyState.value != null
                  ? store.getState().currentCurrencyState.value.toUpperCase()
                  : null}
              </span>
            </p>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className={style.popup_content_root} style={{ width: "auto" }}>
      <div
        style={{ width: "100%", marginBottom: "10px" }}
        onClick={() => closePopup()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.05"
          height="14.048"
          viewBox="0 0 14.05 14.048"
          className={style.close_button}
        >
          <path
            d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z"
            fill="#d08080"
          />
        </svg>
      </div>
      <p style={{ width: "100%", textAlign: "center", fontSize: "15px" }}>
        Mint Market
      </p>
      <div className={style.line} style={{ margin: "20px 0px" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "15px",
        }}
      >
        <MarketItemCard type={"passive"} />
        <MarketItemCard type={"active"} />
      </div>
    </div>
  );
};

export default MintMarketPopupComponent;
