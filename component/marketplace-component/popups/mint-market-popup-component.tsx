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

const MintMarketPopupComponent = () => {
  const [inputValue, setInputValue]: any = useState(null);
  const [CLTRNFTContract, setCLTRNFTContract]: any = useState(null);
  const [account, setAccount]: any = useState(null);
  useEffect(() => {
    (async () => {
      const cltrnft_json = require("../../../abis/CLTRNFT.json");
      const web3 = new Web3("ws://localhost:7545");

      const networkId = await web3.eth.net.getId();
      const networkData = cltrnft_json.networks[networkId];

      const accounts = await web3.eth.getAccounts();
      setAccount(
        accounts[store.getState().currentWalletAccountIndexState.value]
      );

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
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              color: "rgba(255, 255, 255, 0.5)",
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
          onClick={() => {
            let long_id: string = generateLongId();
            CLTRNFTContract.methods
              .cltrnft_mint(
                long_id,
                props.type == "passive" ? 5 : 50,
                store.getState().currentEttrContractAddressState.value
              )
              .send({ from: account, gas: 3000000 })
              .on("transactionHash", (hash: any) => {
                (async () => {
                  await mintNFT({ type: props.type, long_id: long_id });
                  window.location.reload();
                })();
              });
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
              4.99{" "}
              <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                {decimalFormatter(4.99 * phpPrice)} PHP
              </span>
            </p>
          ) : (
            <p>
              49.99{" "}
              <span
                style={{ margin: "0px 5px", color: "rgba(255, 255, 255, 0.5)" }}
              >
                {decimalFormatter(
                  store.getState().tickerPriceState.value != null
                    ? 19.99 * store.getState().tickerPriceState.value
                    : 0
                )}
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
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
