import { useState } from "react";

import getBlockchain from "../../ethereum/ethereum";
import { ethers } from "ethers";
import { axiosInstance } from "../axios-instance";
import axios from "axios";
import { showMBlink } from "../../../components/messageboxManager-component";

export const connectWallet = async (changePopup: any, registerPopup: any) => {

    let networkId: any = null;
    const setNetworkId: any = (value: any) => {
        networkId = value;
    }

    let address: any = null;
    const setAddress: any = (value: any) => {
        address = value;
    }

    let signature: any = null;
    const setSignature: any = (value: any) => {
        signature = value;
    }

    await getBlockchain(setNetworkId, setAddress, setSignature);

    // // -> register
    if (networkId == 97 && address != null && signature != null){
        await axiosInstance.post('/user/connect', {
            "bsc_address": address,
            "signature": signature
        }).then(res => {
    
            showMBlink(res.data["message"], res.data["success"]);

            if(res.data["accountCreated"] == false){
                changePopup(registerPopup(address))
            }
        })
    }
}

export const test = () => {

}