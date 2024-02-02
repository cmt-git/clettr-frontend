import { link_messageBoxShow } from "../../../component/messagebox-component/messagebox-component";
import getBlockchain from "../../ethereum/ethereum";
import { axiosInstance } from "../axios-instance";

export const connectWallet = async (changePopup: any, registerPopup: any) => {
  let networkId: any = null;
  const setNetworkId: any = (value: any) => {
    networkId = value;
  };

  let address: any = null;
  const setAddress: any = (value: any) => {
    address = value;
  };

  let signature: any = null;
  const setSignature: any = (value: any) => {
    signature = value;
  };

  await getBlockchain(setNetworkId, setAddress, setSignature);

  // // -> register
  if (networkId == 97 && address != null && signature != null) {
    await axiosInstance
      .post("/user/connect", {
        bsc_address: address,
        signature: signature,
      })
      .then((res) => {
        link_messageBoxShow(res.data["message"], res.data["success"]);

        if (res.data["accountCreated"] == false) {
          changePopup(registerPopup(address));
        }
      });
  }
};

export const test = () => {};
