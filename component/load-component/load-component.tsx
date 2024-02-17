import { useEffect, useState } from "react";
import Web3 from "web3";
import { link_messageBoxShow } from "../messagebox-component/messagebox-component";
import { ganacheProvider, store } from "../../pages/_app";
import { simulatorMint } from "../../scripts/router/nfts/nfts-request";
import settings from "../../settings.json";

const ettr_json = require("../../abis/Ettr.json");
const susdc_json = require("../../abis/SUSDC.json");
const web3 = new Web3(ganacheProvider);

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
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          SUSDCContract.methods
            .susdc_mint(1)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 1 SUSDC", true);
              window.location.reload();
            });
        }}
      >
        <img
          src={"./images/svgs/usdc-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 1 SUSDC (Simulated USDC)</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          ETTRContract.methods
            .ettr_mint(1)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 1 Ettr", true);
              (async () => {
                await simulatorMint({
                  amount: 1,
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
        <p>Give 1 Ettr</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          SUSDCContract.methods
            .susdc_mint(2)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 2 SUSDC", true);
              window.location.reload();
            });
        }}
      >
        <img
          src={"./images/svgs/usdc-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 2 SUSDC (Simulated USDC)</p>z
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          ETTRContract.methods
            .ettr_mint(2)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 2 Ettr", true);
              (async () => {
                await simulatorMint({
                  amount: 2,
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
        <p>Give 2 Ettr</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          SUSDCContract.methods
            .susdc_mint(10)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 10 SUSDC", true);
              window.location.reload();
            });
        }}
      >
        <img
          src={"./images/svgs/usdc-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 10 SUSDC (Simulated USDC)</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          ETTRContract.methods
            .ettr_mint(10)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 10 Ettr", true);
              (async () => {
                await simulatorMint({
                  amount: 10,
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
        <p>Give 10 Ettr</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          SUSDCContract.methods
            .susdc_mint(50)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 50 SUSDC", true);
              window.location.reload();
            });
        }}
      >
        <img
          src={"./images/svgs/usdc-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 50 SUSDC (Simulated USDC)</p>
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
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          SUSDCContract.methods
            .susdc_mint(100)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 100 SUSDC", true);
              window.location.reload();
            });
        }}
      >
        <img
          src={"./images/svgs/usdc-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 100 SUSDC (Simulated USDC)</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          ETTRContract.methods
            .ettr_mint(100)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 100 Ettr", true);
              (async () => {
                await simulatorMint({
                  amount: 100,
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
        <p>Give 100 Ettr</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          SUSDCContract.methods
            .susdc_mint(500)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 500 SUSDC", true);
              window.location.reload();
            });
        }}
      >
        <img
          src={"./images/svgs/usdc-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 500 SUSDC (Simulated USDC)</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          ETTRContract.methods
            .ettr_mint(500)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 500 Ettr", true);
              (async () => {
                await simulatorMint({
                  amount: 500,
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
        <p>Give 500 Ettr</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          SUSDCContract.methods
            .susdc_mint(1000)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 1000 SUSDC", true);
              window.location.reload();
            });
        }}
      >
        <img
          src={"./images/svgs/usdc-token.svg"}
          alt="clettr-logo"
          style={{ width: "20px", marginRight: "5px" }}
        />
        <p>Give 1000 SUSDC (Simulated USDC)</p>
      </div>
      <div
        className={`${_props.style.grey_button} ${_props.style.colored_button}`}
        style={{ maxWidth: "300px" }}
        onClick={() => {
          ETTRContract.methods
            .ettr_mint(1000)
            .send({
              //@ts-ignore
              from: store.getState().currentWalletAccountState,
            })
            .on("transactionHash", (hash: any) => {
              link_messageBoxShow("Loaded 1000 Ettr", true);
              (async () => {
                await simulatorMint({
                  amount: 1000,
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
        <p>Give 1000 Ettr</p>
      </div>
    </div>
  );
}
