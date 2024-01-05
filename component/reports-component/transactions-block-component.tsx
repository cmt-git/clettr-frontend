import style from "../../styles/component/reports-component/reports-block-component-style.module.scss";

const TransactionsBlockComponent = () => {
  const TransactionBlock = () => {
    return <div>Hello From Transaction BLock!</div>;
  };

  return (
    <div className={style.transactions_block_component}>
      <h1>Transactions</h1>
      {(() => {
        let array: any = [];

        for (let i = 0; i < 5; i++) {
          array.push(<TransactionBlock />);
        }
        return array;
      })()}
    </div>
  );
};

export default TransactionsBlockComponent;
