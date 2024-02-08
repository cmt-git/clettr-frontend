import { useRef } from "react";
import style from "./admin-block-style.module.scss";
import PageBlockComponent from "../../pageblock-component";
//import { useLazyQuery } from "@apollo/client";
// import { useEffect, useRef } from "react";
// import { INVENTORY_QUERY } from "../../../scripts/graphql/inventory-query/inventory-query";
// import { INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/inventory-custom-query";
// import { openPopup } from "../../popup-component/popup-container-component";
// import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";

export default function AdminRegistrationBlockComponent() {
  const usernameRef: any = useRef();

  function UserRegistrationBlock() {
    return (
      <div className={style.ab_user_registration_block}>
        <p>Username</p>
        <div className={style.ab_ur_question_block}>
          <div>
            <h1>
              1. How many years have you been actively involved in the
              cryptocurrency space?
            </h1>
            <p>1</p>
          </div>
          <div>
            <h1>
              2. On a scale of 1 to 10, how would you rate your overall
              knowledge of cryptocurrencies and blockchain technology?
            </h1>
            <p>2</p>
          </div>
          <div>
            <h1>
              3. Have you ever participated in cryptocurrency trading or
              investment activities?
            </h1>
            <p>3</p>
          </div>
        </div>
        <div className={style.ab_ur_question_block}>
          <div>
            <h1>
              4. Do you understand the concept of private keys and public
              addresses in cryptocurrency transactions?
            </h1>
            <p>1</p>
          </div>
          <div>
            <h1>
              5. How familiar are you with the potential risks associated with
              investing in cryptocurrencies, such as market volatility and
              regulatory uncertainties?
            </h1>
            <p>2</p>
          </div>
          <div>
            <h1>
              6. Have you experienced any significant gains or losses in your
              cryptocurrency portfolio? If comfortable, please share a brief
              example.
            </h1>
            <p>3</p>
          </div>
        </div>
        <div className={style.ab_ur_question_block}>
          <div>
            <h1>
              7. How often do you stay updated on cryptocurrency market trends,
              news, and developments?
            </h1>
            <p>1</p>
          </div>
          <div>
            <h1>
              8. Are you aware of and understand the security measures necessary
              for safeguarding your cryptocurrency holdings, such as using
              hardware wallets and implementing two-factor authentication?
            </h1>
            <p>2</p>
          </div>
          <div>
            <h1>
              9. This crypto game does not guarantee 100% profit, and may pose
              some risk to your investment. Do you still wish to continue?
            </h1>
            <p>3</p>
          </div>
        </div>
        <div className={style.line} />
        <p>Government Ids</p>
        <div className={style.ab_ur_img} />
        <div className={style.ab_ur_img} />
        <div className={style.ab_ur_img} />
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <div className={`${style.colored_button} ${style.green_button}`}>
            Approve
          </div>
          <div className={`${style.colored_button} ${style.red_button}`}>
            Discard
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexDirection: "column",
      }}
    >
      <p>User Registration</p>
      <UserRegistrationBlock />
      <PageBlockComponent cut={"settings"} />
    </div>
  );
}
