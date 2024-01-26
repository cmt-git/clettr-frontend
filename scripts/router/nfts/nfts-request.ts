import { link_messageBoxShow } from "../../../component/messagebox-component/messagebox-component";
import { closePopup } from "../../../component/popup-component/popup-container-component";
import { axiosInstance } from "../axios-instance";

export const mintNFT = async (json: {
  type: string;
  token_id: string;
  token_uri: string;
}) => {
  await axiosInstance
    .post("/nfts/mint", {
      type: json.type,
      token_id: json.token_id,
      token_uri: json.token_uri,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data.success) {
        closePopup();
      }
    });
};

export const forgeNFT = async (json: {
  type: string;
  nft_ids: any;
  token_id: string;
  token_uri: string;
}) => {
  await axiosInstance
    .post("/nfts/forge", {
      type: json.type,
      nft_ids: json.nft_ids,
      token_id: json.token_id,
      token_uri: json.token_uri,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data.success == true) {
        closePopup();
        window.location.reload();
      }
    });
};

export const marketSellNFT = async (json: any) => {
  await axiosInstance
    .post("/nfts/market_sell", {
      nft_id: json.nft_id,
      currency: json.currency,
      price: json.price,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data.success == true) {
        closePopup();
        window.location.reload();
      }
    });
};

export const marketRevokeNFT = async (json: any) => {
  await axiosInstance
    .post("/nfts/market_revoke", {
      nft_id: json.nft_id,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data.success == true) {
        closePopup();
        window.location.reload();
      }
    });
};

export const marketBuyNFT = async (json: any) => {
  await axiosInstance
    .post("/nfts/market_buy", {
      nft_id: json.nft_id,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data.success == true) {
        closePopup();
        window.location.reload();
      }
    });
};

export const simulatorMint = async (json: { amount: number }) => {
  await axiosInstance
    .post("/simulation/mint", {
      json,
    })
    .then((res) => {
      link_messageBoxShow(res.data["message"], res.data["success"]);

      if (res.data.success == true) {
        closePopup();
        window.location.reload();
      }
    });
};
