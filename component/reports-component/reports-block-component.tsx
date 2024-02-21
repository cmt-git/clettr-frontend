import { useEffect, useRef, useState } from "react";
import style from "../../styles/component/reports-component/reports-block-component-style.module.scss";
import SummaryBlockComponent from "./summary-block/summary-block-component";
import TransactionsBlockComponent from "./transactions-block-component";

const ReportsBlockComponent = (_props: any) => {
  const usernameRef: any = useRef();
  const [username, setUsername]: any = useState(null);

  return (
    <div className={style.reports_block_component_root}>
      {_props.username == true ? (
        <div className={style.input_container} style={{ marginBottom: "15px" }}>
          <div className={style.input_info}>
            <p
              className={style.transparent_text}
              style={{ marginBottom: "10px" }}
            >
              Search for User
            </p>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <div className={style.input_box}>
              <input placeholder="Enter Username" ref={usernameRef} />
            </div>
            <div
              className={`${style.colored_button} ${style.grey_button}`}
              style={{ maxWidth: "150px" }}
              onClick={async () => {
                setUsername(usernameRef.current.value);
              }}
            >
              Search
            </div>
          </div>
        </div>
      ) : null}
      <SummaryBlockComponent
        global={_props.global}
        username={username}
        show_success={_props.show_success}
      />
      <div className={style.line}></div>
      <TransactionsBlockComponent
        global={_props.global}
        username={username}
        show_success={_props.show_success}
      />
    </div>
  );
};

export default ReportsBlockComponent;
