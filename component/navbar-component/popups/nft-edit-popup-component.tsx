import { useState } from "react";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import { closePopup } from "../../popup-component/popup-container-component";

export default function NFTEditPopupComponent() {
  const [images, setImages]: any = useState(["", "", ""]);

  function updateImages(_image_link: string | null | ArrayBuffer) {
    const images_arr = images;

    console.log(_image_link, typeof _image_link);
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

      console.log(images_arr);
      setImages([...images_arr]);
    }
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    console.log(file, " - file log");
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        updateImages(reader.result);
        //setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={style.popup_content_root}
      style={{
        width: "100vw",
        maxWidth: "750px",
        gap: "15px",
        display: "flex",
        flexDirection: "column",
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
      <p style={{ width: "100%", textAlign: "center", fontSize: "15px" }}>
        NFT #000
      </p>
      <div className={style.line} />
      <div style={{ display: "flex", gap: "15px", width: "100%" }}>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Type</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Type" />
            </div>
          </div>
        </div>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Traits</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Traits" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "15px", width: "100%" }}>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Hash</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Hash" />
            </div>
          </div>
        </div>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Stars</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Stars" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "15px", width: "100%" }}>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Req</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Hash" />
            </div>
          </div>
        </div>
        <div className={style.input_container} style={{ width: "100%" }}>
          <div className={style.input_container}>
            <div className={style.input_info}>
              <p style={{ marginBottom: "10px" }}>Set NFT Stars</p>
            </div>
            <div className={style.input_box}>
              <input placeholder="NFT Stars" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <div className={`${style.colored_button} ${style.grey_button}`}>
          Update NFT
        </div>
        <div className={`${style.colored_button} ${style.red_button}`}>
          Soft Delete NFT
        </div>
      </div>
    </div>
  );
}
