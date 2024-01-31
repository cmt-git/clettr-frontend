import { useSelector } from "react-redux";
import getScreenWidth from "../../../scripts/misc/getScreenWidth";
import style from "../../../styles/component/navbar-component/popup/leaderboard-popup-component-style.module.scss";
import PageBlockComponent from "../../pageblock-component";
import { closePopup } from "../../popup-component/popup-container-component";
import { RootState } from "../../../scripts/redux/rootReducer";

const LeaderboardPopupComponent = () => {
  const _width = getScreenWidth();

  const colorThemeState = useSelector((state: RootState) => {
    return state.colorThemeState.value;
  });

  const LeaderboardBlock = () => {
    return (
      <div className={style.profile_block}>
        <div className={style.grey_info_block}>
          <p className={style.transparent_text}>
            <span className={style.yellow_text}>#1</span> Player{" "}
            <span>test-</span>
          </p>
          <p className={style.transparent_text}>
            Join Date <span>10/12/2022</span>
          </p>
        </div>
        <div className={style.line} />
        <div className={style.ppc_data_container} style={{ marginTop: "10px" }}>
          <div className={style.light_black_info_block}>
            <p className={style.transparent_text}>
              Total Gains <span>89,323</span>
            </p>
          </div>
          <div className={style.light_black_info_block}>
            <p className={style.transparent_text}>
              Rounds Played <span>89,323</span>
            </p>
          </div>
        </div>
        <div className={style.ppc_data_container} style={{ marginTop: "10px" }}>
          <div className={style.light_black_info_block}>
            <p className={style.transparent_text}>
              Active NFTs <span>89,323</span>
            </p>
          </div>
          <div className={style.light_black_info_block}>
            <p className={style.transparent_text}>
              Passive NFTs <span>89,323</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={style.popup_content_root}
      style={{ maxWidth: "750px", width: "100vw" }}
    >
      <div
        style={{ width: "100%", marginBottom: "15px" }}
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
      <div
        style={{
          display: "flex",
          flexDirection: _width > 650 ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            marginBottom: _width > 650 ? "0px" : "10px",
          }}
        >
          Leaderboards
        </p>
        <p className={style.transparent_text} style={{ textAlign: "center" }}>
          <span
            style={{ color: colorThemeState == "dark" ? "white" : "black" }}
          >
            1,234,454
          </span>{" "}
          Players
        </p>
      </div>
      <div className={style.line}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginBottom: "15px",
        }}
      >
        <div className={style.input_box} style={{ width: "100%" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56.515"
            height="56.515"
            viewBox="0 0 56.515 56.515"
            style={{
              transform: "scale(0.3)",
              marginRight: "-20px",
              marginLeft: "-10px",
            }}
          >
            <g transform="translate(0 56.515)">
              <path
                d="M33.379-14.481A22.323,22.323,0,0,1,22.44-11.635,22.451,22.451,0,0,1,0-34.075a22.451,22.451,0,0,1,22.44-22.44,22.451,22.451,0,0,1,22.44,22.44,22.323,22.323,0,0,1-2.846,10.939L54.723-10.448A6.12,6.12,0,0,1,56.515-6.12a6.12,6.12,0,0,1-1.792,4.327h0A6.12,6.12,0,0,1,50.4,0a6.12,6.12,0,0,1-4.327-1.793ZM22.44-48.11A14.041,14.041,0,0,1,36.474-34.075,14.041,14.041,0,0,1,22.44-20.041,14.041,14.041,0,0,1,8.406-34.075,14.041,14.041,0,0,1,22.44-48.11Z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </g>
          </svg>
          <input type="text" placeholder="Search by Username" />
        </div>
        <div className={style.select_box}>
          <select>
            <option>Total Gains</option>
            <option>Rounds Played</option>
            <option>Active NFTs</option>
            <option>Passive NFTs</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="51"
            viewBox="0 0 25 51"
          >
            <g transform="translate(-1393 -359)">
              <path
                d="M12.5,0,25,19H0Z"
                transform="translate(1393 359)"
                fill="#fff"
              />
              <path
                d="M12.5,0,25,19H0Z"
                transform="translate(1418 410) rotate(180)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className={style.leaderboard_block_container}>
        {(() => {
          let arr_leaderboard_block: any = [];

          for (let i = 0; i < 10; i++) {
            arr_leaderboard_block.push(<LeaderboardBlock />);
          }

          return arr_leaderboard_block;
        })()}
      </div>
      <PageBlockComponent cut="settings" />
    </div>
  );
};

export default LeaderboardPopupComponent;
