import { useEffect, useRef, useState } from "react";
import {
  connectWallet,
  loginAccount,
  updateQuestionnaire,
} from "../../../scripts/router/user/user-request";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import {
  changePopup,
  closePopup,
  openPopup,
} from "../../popup-component/popup-container-component";
import RegisterPopup from "./register-popup-component";
import SelectBoxComponent from "../../select-box-component/select-box-component";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import IdSubmissionPopupComponent from "./id-submission-popup-component";

export default function QuestionnairePopupComponent() {
  const [question1State, setQuestion1State] = useState("0-1 Years");
  const [question2State, setQuestion2State] = useState("1");
  const [question3State, setQuestion3State] = useState("Yes");
  const [question4State, setQuestion4State] = useState("Yes");
  const [question5State, setQuestion5State] = useState("No Idea");
  const [question6State, setQuestion6State] = useState("Yes");
  const [question7State, setQuestion7State] = useState("Yes");
  const [question8State, setQuestion8State] = useState("Yes");
  const [question9State, setQuestion9State] = useState("Yes");
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
        Questionnaire
      </p>
      <p>
        1. How many years have you been actively involved in the cryptocurrency
        space?
      </p>
      <SelectBoxComponent
        style={style}
        data={["0-1 Years", "2-5 Years", "5+ Years"]}
        state={setQuestion1State}
      />
      <p>
        2. On a scale of 1 to 10, how would you rate your overall knowledge of
        cryptocurrencies and blockchain technology?
      </p>
      <SelectBoxComponent
        style={style}
        data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        state={setQuestion2State}
      />
      <p>
        3. Have you ever participated in cryptocurrency trading or investment
        activities?
      </p>
      <SelectBoxComponent
        style={style}
        data={["Yes", "No"]}
        state={setQuestion3State}
      />
      <p>
        4. Do you understand the concept of private keys and public addresses in
        cryptocurrency transactions?
      </p>
      <SelectBoxComponent
        style={style}
        data={["Yes", "No"]}
        state={setQuestion4State}
      />
      <p>
        5. How familiar are you with the potential risks associated with
        investing in cryptocurrencies, such as market volatility and regulatory
        uncertainties?
      </p>
      <SelectBoxComponent
        style={style}
        data={["No Idea", "Some Idea", "Extensive Idea"]}
        state={setQuestion5State}
      />
      <p>
        6. Have you experienced any significant gains or losses in your
        cryptocurrency portfolio? If comfortable, please share a brief example.
      </p>
      <SelectBoxComponent
        style={style}
        data={["Yes", "No"]}
        state={setQuestion6State}
      />
      <p>
        7. How often do you stay updated on cryptocurrency market trends, news,
        and developments?
      </p>
      <SelectBoxComponent
        style={style}
        data={["Yes", "Sometimes", "No"]}
        state={setQuestion7State}
      />
      <p>
        8. Are you aware of and understand the security measures necessary for
        safeguarding your cryptocurrency holdings, such as using hardware
        wallets and implementing two-factor authentication?
      </p>
      <SelectBoxComponent
        style={style}
        data={["Yes", "No"]}
        state={setQuestion8State}
      />
      <p>
        9. This crypto game does not guarantee 100% profit, and may pose some
        risk to your investment. Do you still wish to continue?
      </p>
      <SelectBoxComponent
        style={style}
        data={["Yes", "No"]}
        state={setQuestion9State}
      />
      <div
        className={`${style.colored_button} ${style.grey_button}`}
        onClick={async () => {
          let questionnaire = await updateQuestionnaire({
            question_1: question1State,
            question_2: question2State,
            question_3: question3State,
            question_4: question4State,
            question_5: question5State,
            question_6: question6State,
            question_7: question7State,
            question_8: question8State,
            question_9: question9State,
          });
          //@ts-ignore
          if (questionnaire?.success) {
            link_messageBoxShow("Questionnaire has been updated.", true);
            changePopup(<IdSubmissionPopupComponent />);
          } else {
            //@ts-ignore
            if (questionnaire?.message) {
              //@ts-ignore
              link_messageBoxShow(questionnaire?.message);
            } else {
              link_messageBoxShow("Questionnaire has not been updated.");
            }
          }
        }}
      >
        Continue
      </div>
    </div>
  );
}
