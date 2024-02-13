import { useState } from "react";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import {
  changePopup,
  closePopup,
} from "../../popup-component/popup-container-component";
import { governmentId } from "../../../scripts/router/user/user-request";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import RegisterQRCodePopupComponent from "./register-qrcode-popup-component";

export default function IdSubmissionPopupComponent() {
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
        maxWidth: "500px",
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
        Id Submission
      </p>
      <div className={style.line} />
      <div className={style.input_container}>
        <div className={style.input_container}>
          <div className={style.input_info}>
            <p style={{ marginBottom: "10px" }}>
              Please enter a valid Government Id. Max Of 3
            </p>
          </div>
          <div className={style.input_box}>
            <input
              placeholder="Enter NFT Id"
              type="file"
              accept=".jpg, .png, .webp"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>

      {/* <input className={`${style.colored_button} ${style.grey_button}`}>
        Upload Government Id
      </input> */}
      {images.map((value: any) => {
        if (value !== "") {
          return <img src={value} className={style.popup_img_container} />;
        }
      })}
      <div
        className={`${style.colored_button} ${style.grey_button}`}
        onClick={async () => {
          const government_id = await governmentId({
            image_1: images[0],
            image_2: images[1],
            image_3: images[2],
          });

          link_messageBoxShow(government_id?.message, government_id?.success);

          if (government_id.success) {
            changePopup(
              <RegisterQRCodePopupComponent
                username={"Clettr Account"}
                type={1}
              />
            );
          }
        }}
      >
        Continue
      </div>
    </div>
  );
}
