import { useEffect, useState } from "react";
import Web3 from "web3";
import { store } from "../../../../pages/_app";
import Settings from "../../../../settings.json";
import style from "../../../../styles/component/marketplace-components/marketplace-block-component-style.module.scss";
import { link_messageBoxShow } from "../../../messagebox-component/messagebox-component";
import {
  marketRevokeNFT,
  marketSellNFT,
} from "../../../../scripts/router/nfts/nfts-request";
import { decimalFormatter } from "../../../../scripts/misc/stringFormatter";

const MarketInfoPopupComponent = (props: any) => {
  const [marketState, setMarketState]: any = useState("sell");
  const [currency, setCurrency]: any = useState("ettr");
  const [currentAmount, setCurrentAmount]: any = useState(0);

  const [inputValue, setInputValue]: any = useState(null);
  const [CLTRNFTContract, setCLTRNFTContract]: any = useState(null);

  useEffect(() => {
    (async () => {
      const cltrnft_json = require("../../../../abis/CLTRNFT.json");
      const web3 = new Web3(
        `ws://${
          Settings.environment == "development" ? "localhost" : "159.223.39.105"
        }:7545`
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

  return (
    <div>
      {props.revoke == null || props.revoke == false ? (
        <>
          <p style={{ marginBottom: "10px" }} key={0}>
            Market Sell
          </p>
          <p
            className={style.transparent_text}
            style={{
              marginBottom: "10px",
            }}
          >
            +{currency === "usdc" ? "10%" : "2.5%"} Tax
          </p>
          <div className={style.input_box} style={{ height: "50px" }}>
            <img
              src={
                currency === "usdc"
                  ? "./images/svgs/usdc-token.svg"
                  : "./images/svgs/clettr-token.svg"
              }
              alt="clettr-logo"
              style={{ width: "25px", marginLeft: "15px" }}
              onClick={() => setCurrency(currency == "usdc" ? "ettr" : "usdc")}
            />
            <input
              type="text"
              placeholder={"Price"}
              maxLength={6}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                const current_tax_value = currency === "usdc" ? 0.1 : 0.025;
                e.target.value = e.target.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/(\..*?)\..*/g, "$1");
                const _value: any =
                  Number(e.target.value) +
                  Number(e.target.value) * current_tax_value;

                //@ts-ignore
                if (_value != NaN) {
                  if (_value > 10000) {
                    e.target.value = "10000";
                    setCurrentAmount(10000);
                  } else {
                    setCurrentAmount(Math.round(_value));
                  }
                } else {
                  link_messageBoxShow(
                    "Price must not have any decimal!",
                    false
                  );
                }
              }}
            />
          </div>
          <div
            className={`${style.red_button} ${style.colored_button}`}
            style={{ marginTop: "15px", padding: "15px" }}
            onClick={() => {
              console.log(props.data.nft_token_id);
              if (currentAmount > 0 && Number.isInteger(currentAmount)) {
                CLTRNFTContract.methods
                  .cltrnft_market_sell(props.data.nft_token_id)
                  .send({
                    //@ts-ignore
                    from: store.getState().currentWalletAccountState,
                    gas: 6721975,
                  })
                  .on("transactionHash", (hash: any) => {
                    (async () => {
                      await marketSellNFT({
                        nft_id: props.data.id,
                        price: currentAmount,
                        currency: currency.toLowerCase(),
                      });
                      window.location.reload();
                    })();
                  });
              } else {
                let _message = "";
                if (currentAmount == 0) {
                  _message = "Price must be above 0";
                } else {
                  _message = "Price must be an integer";
                }
                link_messageBoxShow(_message, false);
              }
            }}
          >
            Sell for {currentAmount} {currency == "usdc" ? "USDC" : "Ettr"}{" "}
            <span
              className={style.transparent_text}
              style={{ marginLeft: "5px" }}
            >
              {decimalFormatter(
                store.getState().tickerPriceState.value != null
                  ? currentAmount * store.getState().tickerPriceState.value
                  : 0
              )}
            </span>
            <span className={style.transparent_text}>
              {store.getState().currentCurrencyState.value.toUpperCase()}
            </span>
          </div>
        </>
      ) : props.revoke == true ? (
        <div
          className={`${style.red_button} ${style.colored_button}`}
          style={{ marginTop: "15px", padding: "15px" }}
          onClick={() => {
            CLTRNFTContract.methods
              .cltrnft_market_revoke_approval(props.data.nft_token_id)
              .send({
                //@ts-ignore
                from: store.getState().currentWalletAccountState,
                gas: 6721975,
              })
              .on("transactionHash", (hash: any) => {
                (async () => {
                  await marketRevokeNFT({ nft_id: props.data.id });
                  //window.location.reload();
                })();
              });
          }}
        >
          Remove from Market
        </div>
      ) : null}
    </div>
  );
};

export default MarketInfoPopupComponent;
