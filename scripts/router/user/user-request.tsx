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
import QuestionnairePopupComponent from "../../../component/navbar-component/popups/questionnaire-popup-component";
import IdSubmissionPopupComponent from "../../../component/navbar-component/popups/id-submission-popup-component";

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
        if (
          res.data["account_created"] == false ||
          res.data.account_approved == false
        ) {
          console.log(bsc_address, signature);
          link_messageBoxShow(res.data["message"], res.data["success"]);

          if (res.data.account_created == false) {
            changePopup(registerPopup(bsc_address));
          }

          //changePopup(<IdSubmissionPopupComponent />);
        } else {
          window.location.reload();
        }
      });
  } else {
    if (bsc_address == null && signature == null) {
      link_messageBoxShow("Please install Metamask.", false);
    } else if ([97, 5777].includes(networkId) == false) {
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
        changePopup(<QuestionnairePopupComponent />);
        // changePopup(
        //   <RegisterQRCodePopupComponent username={json["username"]} type={1} />
        // );
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

export const updateQuestionnaire = async (_data: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
  question_6: string;
  question_7: string;
  question_8: string;
  question_9: string;
}) => {
  if (bsc_address == "") {
    await getBlockchain(setNetworkId, setAddress, setSignature);
  }

  if (bsc_address != "") {
    return await axiosInstance
      .post("/user/questionnaire", {
        bsc_address: bsc_address,
        ..._data,
      })
      .then((res) => {
        link_messageBoxShow(res.data["message"], res.data["success"]);

        return res.data;
        // if (res.data["success"]) {
        //   closePopup();
        // }
      });
  } else {
    link_messageBoxShow("Wallet cannot be loaded.", false);
    return {
      success: false,
      message: "Wallet cannot be loaded.",
    };
  }

  return null;
};

export const transactionSummary = async (
  json: {
    to_date: string | null;
    from_date: string | null;
    global: boolean;
    username: string;
  },
  show_success: boolean
) => {
  return await axiosInstance
    .post("/user/transactions/summary", json)
    .then((res) => {
      if (show_success == true) {
        if (res.data.success === false) {
          link_messageBoxShow("Could not find user.", false);
        } else {
          link_messageBoxShow("Found User.", true);
        }
      }

      return res.data;
      // link_messageBoxShow(res.data["message"], res.data["success"]);

      // if (res.data["success"]) {
      //   closePopup();
      // }
    });
};

export const governmentId = async (_data: {
  image_1: string;
  image_2: string;
  image_3: string;
}) => {
  const formData = new FormData();
  formData.append("bsc_address", bsc_address);
  formData.append("image_1", _data.image_1);
  formData.append("image_2", _data.image_2);
  formData.append("image_3", _data.image_3);

  return await axiosInstance
    .put("/user/government", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const approvalRequest = async (_data: {
  approval: boolean;
  username: string;
}) => {
  return await axiosInstance.post("/user/approval", _data).then((res) => {
    return res.data;
  });
};
