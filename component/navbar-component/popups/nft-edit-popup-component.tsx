import { useEffect, useRef, useState } from "react";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import { closePopup } from "../../popup-component/popup-container-component";
import ItemBlockComponent from "../../item-block-component/item-block-component";
import { nftInfoValidation } from "./scripts/nftValidator";
import {
  createNFT,
  enforcementNFT,
  updateNFT,
} from "../../../scripts/router/nfts/nfts-request";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";

export default function NFTEditPopupComponent(_props: any) {
  const NFTType: any = useRef();
  const NFTTraits: any = useRef();
  const NFTHash: any = useRef();
  const NFTStars: any = useRef();
  const NFTReq: any = useRef();
  const NFTOwnerUsername: any = useRef();
  const NFTTokenId: any = useRef();

  const [images, setImages]: any = useState(["", "", ""]);

  function updateImages(_image_link: string | null | ArrayBuffer) {
    const images_arr = images;

    if (typeof _image_link == "string") {
      for (let i = 0; i < images_arr.length; i++) {
        if (images_arr[i] == "") {
          images_arr[i] = _image_link;
          break;
        } else if (i == images_arr.length - 1) {
          images_arr[0] = images[1];
          images_arr[1] = images[2];
          images_arr[2] = _image_link;
        }
      }

      setImages([...images_arr]);
    }
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        updateImages(reader.result);
        //setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    NFTType.current.value = _props.data?.nft_type || null;
    NFTTraits.current.value = _props.data?.nft_traits || null;
    NFTHash.current.value = _props.data?.nft_hash || null;
    NFTStars.current.value = _props.data?.nft_stars || null;
    NFTReq.current.value = _props.data?.nft_requirement || null;
    NFTOwnerUsername.current.value = _props.data?.current_owner || null;
    NFTTokenId.current.value = _props.data?.nft_token_id || null;
  }, [_props.data]);

  return (
    <div
      className={style.popup_content_root}
      style={{
        width: "100vw",
        maxWidth: "750px",
        gap: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: "100%", marginBottom: "10px" }}
        onClick={() => closePopup()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.05"
          height="14.048"
          viewBox="0 0 14.05 14.048"
          className={style.close_button}
        >
          <path
            d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z"
            fill="#d08080"
          />
        </svg>
      </div>
      {_props.type != "create" ? (
        <>
          <ItemBlockComponent
            data={_props.data}
            no_click={true}
            hover={false}
            //add_index={props.add_index}
          />
          <p style={{ width: "100%", textAlign: "center", fontSize: "15px" }}>
            NFT #{_props.data?.id}
          </p>
        </>
      ) : null}
      <div style={{ display: "flex", gap: "15px", width: "100%" }}>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Token Id</p>
            </div>
            <div className={style.input_box}>
              <input
                placeholder="NFT Token Id"
                ref={NFTTokenId}
                disabled={_props.type != "create"}
              />
            </div>
          </div>
        </div>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Type</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Type" ref={NFTType} />
            </div>
          </div>
        </div>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Traits</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Traits" ref={NFTTraits} />
            </div>
          </div>
        </div>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Hash</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Hash" ref={NFTHash} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "15px", width: "100%" }}>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Stars</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Stars" ref={NFTStars} />
            </div>
          </div>
        </div>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Requirement</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Requirement" ref={NFTReq} />
            </div>
          </div>
        </div>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Owner</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Owner Username" ref={NFTOwnerUsername} />
            </div>
          </div>
        </div>
      </div>
      {_props.type == "create" ? (
        <div style={{ display: "flex", gap: "15px", width: "100%" }}>
          <div
            className={`${style.colored_button} ${style.green_button}`}
            onClick={async () => {
              const data = {
                nft_type: NFTType.current.value,
                nft_traits: NFTTraits.current.value,
                nft_hash: NFTHash.current.value,
                nft_stars: NFTStars.current.value,
                nft_req: NFTReq.current.value,
                nft_owner_username: NFTOwnerUsername.current.value,
                nft_token_id: NFTTokenId.current.value,
              };
              if (nftInfoValidation(data) == true) {
                const nft = await createNFT(data);

                link_messageBoxShow(nft?.message, nft?.success);

                if (nft?.success) {
                  window.location.reload();
                }
              }
            }}
          >
            Create NFT
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "15px", width: "100%" }}>
          <div
            className={`${style.colored_button} ${style.grey_button}`}
            onClick={async () => {
              const data = {
                nft_type: NFTType.current.value,
                nft_traits: NFTTraits.current.value,
                nft_hash: NFTHash.current.value,
                nft_stars: NFTStars.current.value,
                nft_req: NFTReq.current.value,
                nft_owner_username: NFTOwnerUsername.current.value,
                nft_token_id: NFTTokenId.current.value,
              };
              if (nftInfoValidation(data) == true) {
                const nft = await updateNFT(data);

                link_messageBoxShow(nft?.message, nft?.success);

                if (nft?.success) {
                  window.location.reload();
                }
              }
            }}
          >
            Update NFT
          </div>
          {_props.data?.status == null ? (
            <div
              className={`${style.colored_button} ${style.red_button}`}
              onClick={async () => {
                const nft = await enforcementNFT({
                  nft_token_id: NFTTokenId.current.value,
                });

                link_messageBoxShow(nft?.message, nft?.success);

                if (nft?.success) {
                  window.location.reload();
                }
              }}
            >
              Soft Delete NFT
            </div>
          ) : _props.data?.status == "burned" ? (
            <div
              className={`${style.colored_button} ${style.green_button}`}
              onClick={async () => {
                const nft = await enforcementNFT({
                  nft_token_id: NFTTokenId.current.value,
                });

                link_messageBoxShow(nft?.message, nft?.success);

                if (nft?.success) {
                  window.location.reload();
                }
              }}
            >
              Recover NFT
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
