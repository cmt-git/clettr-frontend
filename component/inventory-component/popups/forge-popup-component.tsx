import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3";
import { store } from "../../../pages/_app";
import {
  decimalFormatter,
  generateLongId,
} from "../../../scripts/misc/stringFormatter";
import { RootState } from "../../../scripts/redux/rootReducer";
import { forgeNFT } from "../../../scripts/router/nfts/nfts-request";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import AddItemBlockComponent from "../../item-block-component/add-item-block-component";
import ItemBlockComponent from "../../item-block-component/item-block-component";
import { closePopup } from "../../popup-component/popup-container-component";
import { formatTokenBalance } from "../../../scripts/misc/contractManager";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";

const ettr_json = require("../../../abis/Ettr.json");
const web3 = new Web3("ws://localhost:7545");

const ForgePopupComponent = () => {
  const addItemsLength = 3;

  const [currentStar, setCurrentStar]: any = useState(0);

  const addItemIndexState = useSelector((state: RootState) => {
    return state.addItemIndexState.value;
  });

  const dispatch = useDispatch();

  const clearItemIndex = () => {
    let init_arr: any = [];
    for (let i = 0; i < addItemsLength; i++) {
      init_arr.push(null);
    }

    setCurrentStar(0);
    dispatch({ type: "edit/addItemIndexReducer/SET", value: init_arr });
    dispatch({ type: "edit/addItemTypeReducer/SET", value: "forge_popup" });
    dispatch({ type: "edit/addItemFilterReducer/SET", value: null });
  };

  //? initialize addItem redux state
  useEffect(() => {
    if (
      addItemIndexState == null ||
      store.getState().addItemTypeState.value != "forge_popup"
    ) {
      clearItemIndex();
    }
  }, []);

  useEffect(() => {
    //? need .length <= 3 because addItemIndexState wont rerender for some reason (temporary fix)
    if (addItemIndexState != null && addItemIndexState.length <= 3) {
      for (let i = 0; i < addItemIndexState.length; i++) {
        if (addItemIndexState[i] != null && Array.isArray(addItemIndexState)) {
          dispatch({
            type: "edit/addItemFilterReducer/SET",
            value:
              addItemIndexState[i].nft_type +
              "-" +
              Number(addItemIndexState[i].nft_stars),
          });
          setCurrentStar(Number(addItemIndexState[i].nft_stars));
          break;
        } else {
          setCurrentStar(0);
          dispatch({ type: "edit/addItemFilterReducer/SET", value: null });
        }
      }
    }
  }, [addItemIndexState]);

  const [inputValue, setInputValue]: any = useState(null);
  const [CLTRNFTContract, setCLTRNFTContract]: any = useState(null);
  useEffect(() => {
    (async () => {
      const cltrnft_json = require("../../../abis/CLTRNFT.json");
      const web3 = new Web3("ws://localhost:7545");

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
    <div className={`${style.popup_content_root}`} style={{ width: "auto" }}>
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
        Forge
      </p>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          alignItems: "center",
        }}
      >
        {(() => {
          let add_items_arr = [];
          for (let i = 0; i < addItemsLength; i++) {
            add_items_arr.push(
              <span>
                {addItemIndexState != null && addItemIndexState[i] != null ? (
                  <ItemBlockComponent
                    no_5_stars={true}
                    inventory_popup={true}
                    data={addItemIndexState[i]}
                    add_index={i}
                  />
                ) : (
                  <AddItemBlockComponent
                    no_5_stars={true}
                    no_borders={true}
                    type={"node"}
                    add_index={i}
                  />
                )}
              </span>
            );
          }
          return add_items_arr;
        })()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66.866"
          height="49.12"
          viewBox="0 0 66.866 49.12"
          className={style.forge_arrow}
        >
          <g transform="translate(-1.606 52.48)">
            <path
              d="M38.257-41.526a1.44,1.44,0,0,0,1.44-1.44V-49.04a1.44,1.44,0,0,1,.848-1.313,1.44,1.44,0,0,1,1.545.234L65.985-29a1.44,1.44,0,0,1,.486,1.079,1.44,1.44,0,0,1-.486,1.079L42.09-5.721a1.44,1.44,0,0,1-1.545.234A1.44,1.44,0,0,1,39.7-6.8v-6.074a1.44,1.44,0,0,0-1.44-1.44H5.046a1.44,1.44,0,0,1-1.018-.422,1.44,1.44,0,0,1-.422-1.018V-40.086A1.44,1.44,0,0,1,4.027-41.1a1.44,1.44,0,0,1,1.018-.422Z"
              fill="#272C3F"
              fillRule="evenodd"
              className={style.arrow_body}
            />
            <path
              d="M37.7-43.526H5.046a3.44,3.44,0,0,0-2.432,1.008,3.44,3.44,0,0,0-1.008,2.432v24.331a3.44,3.44,0,0,0,1.008,2.433,3.44,3.44,0,0,0,2.432,1.007H37.7V-6.8a3.44,3.44,0,0,0,2.026,3.136,3.44,3.44,0,0,0,3.692-.559l23.895-21.12a3.44,3.44,0,0,0,1.162-2.577A3.44,3.44,0,0,0,67.309-30.5L43.415-51.617a3.44,3.44,0,0,0-3.692-.559A3.44,3.44,0,0,0,37.7-49.04Zm.56,2a1.44,1.44,0,0,0,1.44-1.44V-49.04a1.44,1.44,0,0,1,.848-1.313,1.44,1.44,0,0,1,1.545.234L65.985-29a1.44,1.44,0,0,1,.486,1.079,1.44,1.44,0,0,1-.486,1.079L42.09-5.721a1.44,1.44,0,0,1-1.545.234A1.44,1.44,0,0,1,39.7-6.8v-6.074a1.44,1.44,0,0,0-1.44-1.44H5.046a1.44,1.44,0,0,1-1.018-.422,1.44,1.44,0,0,1-.422-1.018V-40.086A1.44,1.44,0,0,1,4.027-41.1a1.44,1.44,0,0,1,1.018-.422Z"
              fill="#929FB5"
              fillRule="evenodd"
              className={style.arrow_border}
            />
          </g>
        </svg>
        <div className={currentStar == 0 ? style.empty_card : style.null}>
          <div style={{ opacity: currentStar == 0 ? 0 : 1 }}>
            <ItemBlockComponent
              type={
                store.getState().addItemFilterState.value != null
                  ? store.getState().addItemFilterState.value.split("-")[0]
                  : null
              }
              forge={true}
              mint={true}
              custom_stars={currentStar + 1}
              hover={false}
            />
          </div>
        </div>
      </div>
      <div
        className={`${style.colored_button} ${style.red_button}`}
        style={{ marginTop: "15px" }}
        onClick={() => {
          clearItemIndex();
        }}
      >
        Clear All
      </div>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div>Forge</div>
      <p className={style.transparent_text} style={{ marginTop: "5px" }}>
        If you continue with forging, the 3 base NFTs will be burned and a new
        one will be minted to your inventory.
      </p>
      <div
        className={`${style.colored_button} ${style.grey_button}`}
        style={{
          marginTop: "15px",
          justifyContent: "center",
          height: "50px",
        }}
        onClick={async () => {
          if (
            (() => {
              let allow: boolean = true;
              for (let i = 0; i < addItemIndexState.length; i++) {
                if (addItemIndexState[i] == null) {
                  allow = false;
                }
              }
              return allow;
            })()
          ) {
            let ids: any = [];
            let token_ids: any = [];

            for (let i = 0; i < addItemIndexState.length; i++) {
              ids.push(addItemIndexState[i].id);
              token_ids.push(addItemIndexState[i].nft_token_id);
            }

            // Connect to the ERC-20 token contract using its ABI and address
            const tokenContract = new web3.eth.Contract(
              ettr_json.abi,
              store.getState().currentEttrContractAddressState.value
            );

            // Call the balanceOf function on the ERC-20 token contract
            const tokenBalance = formatTokenBalance(
              await tokenContract.methods
                //@ts-ignore
                .balanceOf(store.getState().currentWalletAccountState.value)
                .call(),
              18
            );

            console.log(tokenBalance, " - tb");
            let token_uri: string = generateLongId();
            if (
              tokenBalance >=
              (currentStar == 1
                ? 100.0
                : currentStar == 2
                ? 200.0
                : currentStar == 3
                ? 300.0
                : currentStar == 4
                ? 500
                : 0)
            ) {
              CLTRNFTContract.methods
                .cltrnft_forge(
                  token_ids[0],
                  token_ids[1],
                  token_ids[2],
                  token_uri,
                  currentStar == 1
                    ? 100
                    : currentStar == 2
                    ? 200
                    : currentStar == 3
                    ? 300
                    : currentStar == 4
                    ? 500
                    : 0,
                  store.getState().currentEttrContractAddressState.value
                )
                .send({
                  //@ts-ignore
                  from: store.getState().currentWalletAccountState.value,
                  gas: 6721975,
                })
                .on("transactionHash", (hash: any) => {})
                .on("receipt", (receipt: any) => {
                  if (receipt.events && receipt.events.TokenMinted) {
                    const event = receipt.events.TokenMinted;
                    const sender = event.returnValues.sender; // Change "sender" to the correct parameter name in the event
                    const tokenId = event.returnValues.tokenId; // Change "tokenId" to the correct parameter name in the event

                    (async () => {
                      await forgeNFT({
                        type: store
                          .getState()
                          .addItemFilterState.value.split("-")[0],
                        nft_ids: ids,
                        token_uri: token_uri,
                        token_id: tokenId,
                      });
                      window.location.reload();
                    })();

                    // Use the values as needed
                  }
                });
            } else {
              link_messageBoxShow(
                "You do not have sufficient ETTR balance",
                false
              );
            }
          }
        }}
      >
        <img
          src={"./images/svgs/clettr-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>
          {currentStar == 1
            ? 99.99
            : currentStar == 2
            ? 199.99
            : currentStar == 3
            ? 299.99
            : currentStar == 4
            ? 499.99
            : 0}
          <span
            className={style.transparent_text}
            style={{ margin: "0px 5px" }}
          >
            {decimalFormatter(
              store.getState().tickerPriceState.value != null
                ? (currentStar == 1
                    ? 99.99
                    : currentStar == 2
                    ? 199.99
                    : currentStar == 3
                    ? 299.99
                    : currentStar == 4
                    ? 499.99
                    : 0) * store.getState().tickerPriceState.value
                : 0
            )}
          </span>
          <span className={style.transparent_text}>
            {store.getState().currentCurrencyState.value.toUpperCase()}
          </span>
        </p>
      </div>
      <p
        className={style.transparent_text}
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        Confused on what this means? Check out <a href="/docs?forge">Docs</a>
      </p>
    </div>
  );
};

export default ForgePopupComponent;
