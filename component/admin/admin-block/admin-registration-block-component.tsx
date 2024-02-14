import { useEffect, useRef } from "react";
import style from "./admin-block-style.module.scss";
import PageBlockComponent from "../../pageblock-component";
import { useLazyQuery } from "@apollo/client";
import { ADMIN_USER_QUERY } from "../../../scripts/graphql/admin-query/admin-user-query";
import { approvalRequest } from "../../../scripts/router/user/user-request";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
//import { useLazyQuery } from "@apollo/client";
// import { useEffect, useRef } from "react";
// import { INVENTORY_QUERY } from "../../../scripts/graphql/inventory-query/inventory-query";
// import { INVENTORY_CUSTOM_QUERY } from "../../../scripts/graphql/inventory-query/inventory-custom-query";
// import { openPopup } from "../../popup-component/popup-container-component";
// import NFTEditPopupComponent from "../../navbar-component/popups/nft-edit-popup-component";

async function approvalClickHandler(_data: {
  username: string;
  approval: boolean;
}) {
  const data = await approvalRequest({
    approval: _data.approval,
    username: _data.username,
  });

  if (data.success == true) {
    link_messageBoxShow(
      data.message + " Please reload page to update.",
      data.success
    );
  } else {
    link_messageBoxShow(data.message, data.success);
  }
}

export default function AdminRegistrationBlockComponent() {
  const [adminUserQuery, { loading, error, data }] =
    useLazyQuery(ADMIN_USER_QUERY);

  const usernameRef: any = useRef();

  useEffect(() => {
    adminUserQuery({
      variables: {
        page: 1,
      },
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  function UserRegistrationBlock(_localprops: any) {
    return (
      <div className={style.ab_user_registration_block}>
        <p>{_localprops?.data?.username}</p>
        <div className={style.ab_ur_question_block}>
          <div>
            <h1>
              1. How many years have you been actively involved in the
              cryptocurrency space?
            </h1>
            <p>{_localprops?.data?.question_1}</p>
          </div>
          <div>
            <h1>
              2. On a scale of 1 to 10, how would you rate your overall
              knowledge of cryptocurrencies and blockchain technology?
            </h1>
            <p>{_localprops?.data?.question_2}</p>
          </div>
          <div>
            <h1>
              3. Have you ever participated in cryptocurrency trading or
              investment activities?
            </h1>
            <p>{_localprops?.data?.question_3}</p>
          </div>
        </div>
        <div className={style.ab_ur_question_block}>
          <div>
            <h1>
              4. Do you understand the concept of private keys and public
              addresses in cryptocurrency transactions?
            </h1>
            <p>{_localprops?.data?.question_4}</p>
          </div>
          <div>
            <h1>
              5. How familiar are you with the potential risks associated with
              investing in cryptocurrencies, such as market volatility and
              regulatory uncertainties?
            </h1>
            <p>{_localprops?.data?.question_5}</p>
          </div>
          <div>
            <h1>
              6. Have you experienced any significant gains or losses in your
              cryptocurrency portfolio? If comfortable, please share a brief
              example.
            </h1>
            <p>{_localprops?.data?.question_6}</p>
          </div>
        </div>
        <div className={style.ab_ur_question_block}>
          <div>
            <h1>
              7. How often do you stay updated on cryptocurrency market trends,
              news, and developments?
            </h1>
            <p>{_localprops?.data?.question_7}</p>
          </div>
          <div>
            <h1>
              8. Are you aware of and understand the security measures necessary
              for safeguarding your cryptocurrency holdings, such as using
              hardware wallets and implementing two-factor authentication?
            </h1>
            <p>{_localprops?.data?.question_8}</p>
          </div>
          <div>
            <h1>
              9. This crypto game does not guarantee 100% profit, and may pose
              some risk to your investment. Do you still wish to continue?
            </h1>
            <p>{_localprops?.data?.question_9}</p>
          </div>
        </div>
        <div className={style.line} />
        <p>Government Ids</p>
        <img
          src={_localprops?.data?.government_id}
          className={style.ab_ur_img}
        />
        <img
          src={_localprops?.data?.government_id_1}
          className={style.ab_ur_img}
        />
        <img
          src={_localprops?.data?.government_id_2}
          className={style.ab_ur_img}
        />
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <div
            className={`${style.colored_button} ${style.green_button}`}
            onClick={() => {
              approvalClickHandler({
                username: _localprops?.data?.username,
                approval: true,
              });
            }}
          >
            Approve
          </div>
          <div
            className={`${style.colored_button} ${style.red_button}`}
            onClick={() => {
              approvalClickHandler({
                username: _localprops?.data?.username,
                approval: false,
              });
            }}
          >
            Reject
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "750px",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexDirection: "column",
      }}
    >
      <p>User Registration</p>
      {data?.user_infos?.length > 0 ? (
        data?.user_infos.map((value: any) => {
          return <UserRegistrationBlock key={1} data={value} />;
        })
      ) : (
        <div className={style.grey_info_block}>No Users Found</div>
      )}
      {/* <UserRegistrationBlock /> */}
      <PageBlockComponent cut={"settings"} query={adminUserQuery} />
    </div>
  );
}
