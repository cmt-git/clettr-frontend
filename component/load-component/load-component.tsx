import { useEffect, useState } from "react";
import Web3 from "web3";
import { link_messageBoxShow } from "../messagebox-component/messagebox-component";
import { store } from "../../pages/_app";
import { simulatorMint } from "../../scripts/router/nfts/nfts-request";
import settings from "../../settings.json";

const ettr_json = require("../../abis/Ettr.json");
const susdc_json = require("../../abis/SUSDC.json");
const web3 = new Web3(
  `wss://${
    settings.environment == "development" ? "localhost" : "159.223.39.105"
  }:7545`
);

export default function LoadComponent(_props: any) {
  const [SUSDCContract, setSUSDCContract]: any = useState(null);
  const [ETTRContract, setETTRContract]: any = useState(null);

  useEffect(() => {
    (async () => {
      //const networkId = await web3.eth.net.getId();
      setETTRContract(
        new web3.eth.Contract(
          ettr_json.abi,
          ettr_json["networks"]["5777"]["address"]
        )
      );

      setSUSDCContract(
        new web3.eth.Contract(
          susdc_json.abi,
          susdc_json["networks"]["5777"]["address"]
        )
      );

      // if (networkData) {

      // } else {
      //   alert("Smart Contract has not been detected");
      // }
    })();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          SUSDCContract.methods
            .susdc_mint(5)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 5 SUSDC", true);
              window.location.reload();
            });
        }}
      >
        <img
          src={"./images/svgs/usdc-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 5 SUSDC (Simulated USDC)</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          ETTRContract.methods
            .ettr_mint(50)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 50 Ettr", true);
              (async () => {
                await simulatorMint({
                  amount: 50,
                });
                window.location.reload();
              })();
            });
        }}
      >
        <img
          src={"./images/svgs/clettr-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 50 Ettr</p>
      </div>
    </div>
  );
}
