import Web3 from "web3";
import { store } from "../../pages/_app";

const ettr_json = require("../../abis/Ettr.json");
const susdc_json = require("../../abis/SUSDC.json");

export async function SetContracts() {
  try {
    //@ts-ignore
    await window.ethereum.request({ method: "eth_requestAccounts" });

    //@ts-ignore
    const currentAccount = window.ethereum.selectedAddress;

    console.log(currentAccount, " - current account");
    if (currentAccount) {
      console.log(currentAccount, store.getState().currentWalletAccountState);
      if (store.getState().currentWalletAccountState == null) {
        console.log("- loaded wallet!", currentAccount);
        store.dispatch({
          type: "edit/currentWalletAccountReducer/SET",
          value: currentAccount,
        });
      }
    }
  } catch (error) {
    alert("Wallet could not be loaded.");
    console.error("Error accessing MetaMask accounts:", error);
  }

  store.dispatch({
    type: "edit/currentSUSDCContractAddressReducer/SET",
    value: susdc_json["networks"]["5777"]["address"],
  });

  store.dispatch({
    type: "edit/currentEttrContractAddressReducer/SET",
    value: ettr_json["networks"]["5777"]["address"],
  });
}

export function formatTokenBalance(rawBalance: number, decimals: number) {
  const divisor = 10 ** decimals;
  return rawBalance / divisor;
}
