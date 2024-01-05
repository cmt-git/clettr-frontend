import PlayHistoryComponent from "./play-history-component";
import StatBlock from "./stat-block-component";
import WeeklyHashesComponent from "./weekly-hashes-component";
import WelcomeBlockComponent from "./welcome-block-component";
import style from "../../styles/pages/page-style.module.scss";

const IndexBlockComponent = (props: any) => {
  return (
    <div style={{ width: "100%" }}>
      <WelcomeBlockComponent />
      <div className={style.line} />
      <WeeklyHashesComponent type="active" />
      <div style={{ height: "15px" }} />
      <WeeklyHashesComponent type="passive" />
      <div className={style.line} />
      <StatBlock />
      <div className={style.line} />
      <PlayHistoryComponent query={props.query} />
    </div>
  );
};

export default IndexBlockComponent;
