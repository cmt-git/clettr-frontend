import style from "../../styles/component/reports-component/reports-block-component-style.module.scss";
import TransactionsBlockComponent from "./transactions-block-component";

const ReportsBlockComponent = (props: any) => {
  return (
    <div className={style.reports_block_component_root}>
      {/* <div className={style.grey_info_block} style={{ textAlign: "center" }}>
        Reports
      </div>
      <p style={{ marginTop: "10px" }}>
        This is where you will be able to see balance changes in your account.
      </p> */}
      {/* <div className={style.line} /> */}
      <TransactionsBlockComponent />
    </div>
  );
};

export default ReportsBlockComponent;
