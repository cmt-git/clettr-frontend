import { useState } from "react";

import getBlockchain from "../../ethereum/ethereum";
import { ethers } from "ethers";
import { axiosInstance } from "../axios-instance";
import axios from "axios";
import { link_messageBoxShow } from "../../../component/messagebox-component/messagebox-component";
import { authenticatePopup } from "../../../component/popup-component/popups/authenticationPopup-component";
import {
  changePopup,
  closePopup,
} from "../../../component/popup-component/popup-container-component";
import RegisterQRCodePopupComponent from "../../../component/navbar-component/popups/register-qrcode-popup-component";

let networkId: any = null;
const setNetworkId: any = (value: any) => {
  networkId = value;
};

let bsc_address: any = null;
const setAddress: any = (value: any) => {
  bsc_address = value;
};

let signature: any = null;
const setSignature: any = (value: any) => {
  signature = value;
};

export const connectWallet = async (changePopup: any, registerPopup: any) => {
  try {
    await getBlockchain(setNetworkId, setAddress, setSignature);

    let data = {
      network: networkId,
      bsc_address: bsc_address,
      signature: signature,
    };

    localStorage.setItem("user-instance", JSON.stringify(data));
  } catch {
    console.warn("Failed to connect to Metamask wallet.");
  }

  //! networkId == 5777 is temporary!!
  if (
    (networkId == 97 || networkId == 5777) &&
    bsc_address != null &&
    signature != null
  ) {
    await axiosInstance
      .post("/user/connect", {
        bsc_address: bsc_address,
        signature: signature,
      })
      .then((res) => {
        if (res.data["account_created"] == false) {
          link_messageBoxShow(res.data["message"], res.data["success"]);
          changePopup(registerPopup(bsc_address));
        } else {
          window.location.reload();
        }
      });
  } else {
    if (bsc_address == null && signature == null) {
      link_messageBoxShow("Please install Metamask.", false);
    } else if ([97, 1337].includes(networkId) == false) {
      link_messageBoxShow("Please connect to Binance Smart Chain.", false);
    }
  }
};

export const ettrSubtract = async (json: any) => {
  await axiosInstance
    .post("/user/ettr_subtract", {
      value: json.value,
    })
    .then((res) => {
      if (res.data.success == false) {
        link_messageBoxShow(res.data["message"], res.data["success"]);
      }
      return true;
    });
};

export const validateAccount = async (json: any) => {
  await axiosInstance
    .post("/user/validate", {
      username: json["username"],
      email: json["email"],
      bsc_address: bsc_address,
      signature: signature,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);
      if (res.data["success"] == true) {
        authenticatePopup(registerAccount, {
          email: json["email"],
          username: json["username"],
          password: json["password"],
          confirm_password: json["confirm_password"],
        });
      }
    });
};

export const requestAuthCode = async (email: string) => {
  const data = JSON.parse(localStorage.getItem("user-instance") || "{}");
  await axiosInstance
    .post("/authentication/new", {
      email: email,
      bsc_address: data.bsc_address,
      signature: data.signature,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);
    });
};

export const requestEmailCode = async (json: any) => {
  await axiosInstance
    .post("/authentication/email_code", {
      email: json.email,
      new_email: json.new_email,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);
    });
};

export const changeEmail = async (json: any) => {
  await axiosInstance
    .post("/user/change_email", {
      email: json.email,
      new_email: json.new_email,
      password: json.password,
      authentication_code: json.authentication_code,
      authenticator_code: json.authenticator_code,
      email_code: json.email_code,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);
    });
};

export const register2FA = async (json: any) => {
  const data = JSON.parse(localStorage.getItem("user-instance") || "{}");
  await axiosInstance
    .post("/authentication/2FA/new", {
      bsc_address: data.bsc_address,
      signature: data.signature,
      secret: json["secret"],
      authentication_code: json["authentication_code"],
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data["success"]) {
        closePopup();
      }
    });
};

export const revoke2FA = async (json: any) => {
  const data = JSON.parse(localStorage.getItem("user-instance") || "{}");
  await axiosInstance
    .post("/authentication/2FA/revoke", {
      authentication_code: json["authentication_code"],
      authenticator_code: json["authenticator_code"],
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data["success"]) {
        closePopup();
        window.location.reload();
      }
    });
};

export const registerAccount = async (json: any) => {
  await axiosInstance
    .post("/user/register", {
      bsc_address: bsc_address,
      signature: signature,
      email: json["email"],
      username: json["username"],
      password: json["password"],
      confirm_password: json["password"],
      authentication_code: json["authentication_code"],
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data["success"]) {
        changePopup(
          <RegisterQRCodePopupComponent username={json["username"]} type={1} />
        );
      }
    });
};

export const loginAccount = async (json: any) => {
  await axiosInstance
    .post("/user/login", {
      email: json["email"],
      password: json["password"],
    })
    .then((res) => {
      if (res.data["success"]) {
        window.location.reload();
      } else {
        link_messageBoxShow(res.data["message"], res.data["success"]);
      }
    });
};

export const logoutAccount = async () => {
  await axiosInstance.post("/user/logout", {}).then((res) => {
    if (res.data["success"]) {
      window.location.reload();
    } else {
      link_messageBoxShow(res.data["message"], res.data["success"]);
    }
  });
};

export const revokeSession = async (id: number) => {
  await axiosInstance
    .post("/user/session_revoke", {
      id: id,
    })
    .then((res) => {
      if (res.data["success"]) {
        window.location.reload();
      } else {
        link_messageBoxShow(res.data["message"], res.data["success"]);
      }
    });
};

export const updateSet = async (json: any) => {
  await axiosInstance
    .post("/user/updateset", {
      set_ids: json.set_ids,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data["success"]) {
        closePopup();
      }
    });
};

export const transactionSummary = async (json: {
  to_date: string | null;
  from_date: string | null;
}) => {
  return await axiosInstance
    .post("/user/transactions/summary", json)
    .then((res) => {
      return res.data;
      // link_messageBoxShow(res.data["message"], res.data["success"]);

      // if (res.data["success"]) {
      //   closePopup();
      // }
    });
};
