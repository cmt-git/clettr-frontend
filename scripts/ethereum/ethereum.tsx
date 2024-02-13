import detectEthereumProvider from "@metamask/detect-provider";
import { ethers, Contract } from "ethers";

const getBlockchain = (
  networkId_link: any,
  address_link: any,
  signature_link: any
) =>
  new Promise(async (resolve, reject) => {
    let provider: any = await detectEthereumProvider();
    if (provider) {
      await provider.request({ method: "eth_requestAccounts" });
      const networkId = await provider.request({ method: "net_version" });
      networkId_link(networkId);

      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();

      const message = "Connect to Beastclash Web Application.";
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();

      signature_link(signature);
      address_link(address);

      resolve(null);
    }
    reject("Install Metamask");
  });

export default getBlockchain;
