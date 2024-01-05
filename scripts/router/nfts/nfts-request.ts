import { link_messageBoxShow } from "../../../component/messagebox-component/messagebox-component";
import { closePopup } from "../../../component/popup-component/popup-container-component";
import { axiosInstance } from "../axios-instance";

export const mintNFT = async (json: any) => {
    await axiosInstance.post('/nfts/mint', {
        "type" : json.type,
        "long_id" : json.long_id
    }).then(res => {
        link_messageBoxShow(res.data["message"], res.data["success"]);

        if (res.data.success){
            closePopup();
        }
    })
}

export const forgeNFT = async (json: any) => {

    await axiosInstance.post('/nfts/forge', {
        "type" : json.type,
        "nft_ids": json.nft_ids,
        "long_id": json.long_id
    }).then(res => {
        link_messageBoxShow(res.data["message"], res.data["success"]);

        if (res.data.success == true){
            closePopup();
            window.location.reload();
        }
    })
}

export const marketSellNFT = async (json: any) => {
    await axiosInstance.post('/nfts/market_sell', {
        "nft_id": json.nft_id,
        "currency": json.currency,
        "price": json.price
    }).then(res => {
        link_messageBoxShow(res.data["message"], res.data["success"]);

        if (res.data.success == true){
            closePopup();
            window.location.reload();
        }
    })
};

export const marketRevokeNFT = async (json: any) => {
    await axiosInstance.post('/nfts/market_revoke', {
        "nft_id": json.nft_id
    }).then(res => {
        link_messageBoxShow(res.data["message"], res.data["success"]);

        if (res.data.success == true){
            closePopup();
            window.location.reload();
        }
    })
};

export const marketBuyNFT = async (json: any) => {
    await axiosInstance.post('/nfts/market_buy', {
        "nft_id": json.nft_id
    }).then(res => {
        link_messageBoxShow(res.data["message"], res.data["success"]);

        if (res.data.success == true){
            closePopup();
            window.location.reload();
        }
    })
};
