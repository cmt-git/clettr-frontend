import style from "../../styles/component/reports-component/reports-block-component-style.module.scss";
import TransactionsBlockComponent from "./transactions-block-component";

const ReportsBlockComponent = (props: any) => {
  return (
    <div className={style.reports_block_component_root}>
      <p>Hello!</p>
      <div className={style.line} />
      <TransactionsBlockComponent />
    </div>
  );
};

export default ReportsBlockComponent;
