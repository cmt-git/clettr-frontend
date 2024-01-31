import style from "../../../styles/component/popup-component/popup-content-style.module.scss";

const SyncPopupComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={`${style.popup_content_root}`}
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          className={style.loading_circle_container}
          style={{ height: "40px" }}
        >
          <img src="./images/svgs/loading-circle.svg" alt="loading-circle" />
        </div>
        <p
          className={style.transparent_text}
          style={{
            wordWrap: "break-word",
            width: "300px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Syncing NFTs from your wallet. This make take some time please wait.
        </p>
      </div>
    </div>
  );
};

export default SyncPopupComponent;
