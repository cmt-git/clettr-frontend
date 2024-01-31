import style from "../../styles/component/reports-component/reports-block-component-style.module.scss";
import SummaryBlockComponent from "./summary-block/summary-block-component";
import TransactionsBlockComponent from "./transactions-block-component";

const ReportsBlockComponent = (props: any) => {
  return (
    <div className={style.reports_block_component_root}>
      <SummaryBlockComponent />
      <div className={style.line}></div>
      <TransactionsBlockComponent />
    </div>
  );
};

export default ReportsBlockComponent;
