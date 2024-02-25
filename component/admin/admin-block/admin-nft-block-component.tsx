import { useLazyQuery } from "@apollo/client";
import { NFT_QUERY } from "../../../scripts/graphql/admin-query/nft-query";
import style from "./admin-block-style.module.scss";
import { useEffect, useRef } from "react";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import { openPopup } from "../../popup-component/popup-container-component";
import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";
//import { useLazyQuery } from "@apollo/client";
// import { useEffect, useRef } from "react";
// import { INVENTORY_QUERY } from "../../../scripts/graphql/inventory-query/inventory-query";
// import { INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/inventory-custom-query";
// import { openPopup } from "../../popup-component/popup-container-component";
// import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";

export default function AdminNFTBlockComponent() {
  const nft_ref: any = useRef();
  const [nft_Query, { loading, error, data }] = useLazyQuery(NFT_QUERY);

  async function handleClick() {
    if (Number.isInteger(parseInt(nft_ref.current.value, 10))) {
      const nft = await nft_Query({
        variables: {
          id: Number.parseInt(nft_ref.current.value),
        },
      });

      if (nft.data?.nft) {
        openPopup(<NFTEditPopupComponent data={nft.data?.nft} />);
      } else {
        link_messageBoxShow("NFT with that id has not been found.", false);
      }
    } else {
      link_messageBoxShow("Enter a integer.", false);
    }
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nft_id: string | null = urlParams.get("nft_id");

    if (nft_id) {
      nft_ref.current.value = nft_id;
      handleClick();
    }
  }, []);

  return (
    <div className={style.admin_mini_block} style={{ maxWidth: "750px" }}>
      <div className={style.input_container} style={{ width: "100%" }}>
        <div className={style.input_container}>
          <div className={style.input_info}>
            <p style={{ marginBottom: "10px" }}>Search for NFT</p>
          </div>
          <div className={style.input_box}>
            <input placeholder="Enter NFT Id" ref={nft_ref} />
          </div>
        </div>
      </div>
      <div
        className={`${style.colored_button} ${style.grey_button}`}
        onClick={async () => {
          handleClick();
        }}
      >
        Search NFT
      </div>
      <p style={{ width: "100%", textAlign: "center" }}>or</p>
      <div
        className={`${style.colored_button} ${style.green_button}`}
        onClick={() => {
          openPopup(<NFTEditPopupComponent data={null} type={"create"} />);
        }}
      >
        Create NFT
      </div>
    </div>
  );
}
