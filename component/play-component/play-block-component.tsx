import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../../pages/_app";
import { decimalFormatter } from "../../scripts/misc/stringFormatter";
import { RootState } from "../../scripts/redux/rootReducer";
import { playMain } from "../../scripts/router/play/play-request";
import style from "../../styles/component/play-component/play-block-component-style.module.scss";
import ItemBlockComponent from "../item-block-component/item-block-component";
import LetterItem from "../item-block-component/items/letter-item";

const PlayBlockComponent = (props: any) => {
  const router = useRouter();
  const playState = useSelector((state: RootState) => {
    return state.playState.value;
  });

  const [playResult, setPlayResult]: any = useState(null);

  useEffect(() => {
    if (playState == null) {
      router.push("/");
    } else {
      (async () => {
        setPlayResult(
          await playMain({
            node_id: playState.node.id,
          })
        );
      })();
    }
  }, [playState]);

  let return_html =
    playState == null || playResult == null ? (
      <div className={style.loading_circle_container}>
        <img src="./images/svgs/loading-circle.svg" alt="loading-circle" />
      </div>
    ) : (
      <div className={style.play_block_component_root}>
        <div className={style.pbc_info_container}>
          <div
            className={style.light_grey_info_block}
            style={{ display: "flex", justifyContent: "center" }}
          >
            Set
          </div>
          <div
            className={style.pbc_set_item_container}
            style={{ margin: "15px 0px" }}
          >
            <div className={style.pbc_left_item_container}>
              <ItemBlockComponent
                data={playState.node}
                no_borders={true}
                hover={false}
              />
            </div>
            <div className={style.vertical_line} style={{ height: "440px" }} />
            <div className={style.pbc_right_item_container}>
              {(() => {
                let arr_item_blocks: any = [];
                for (let i = 0; i < playState.set.length; i++) {
                  arr_item_blocks.push(
                    <ItemBlockComponent
                      data={playState.set[i]}
                      no_borders={true}
                      hover={false}
                    />
                  );
                }

                return arr_item_blocks;
              })()}
            </div>
          </div>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <div
              className={style.light_black_info_block}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Set Hash</p>
              <p>{playState.set_hash}</p>
            </div>
            <div
              className={style.light_black_info_block}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Node Hash</p>
              <p>{playState.node.nft_hash}</p>
            </div>
            <div
              className={style.light_black_info_block}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Total Boost</p>
              <p className={style.yellow_text}>{`x${playState.boost} Boost`}</p>
            </div>
          </div>
          <div className={style.line} />
          <div
            className={style.light_grey_info_block}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            Results
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <div
              className={style.light_black_info_block}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Rounds</p>
              <p>{playResult.rounds}</p>
            </div>
            <div
              className={style.light_black_info_block}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                Final Difficulty
              </p>
              <p>{playResult.final_difficulty}</p>
            </div>
            <div
              className={style.light_black_info_block}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src="./images/svgs/clettr-token.svg"
                  alt="clettr-logo"
                  style={{ width: "15px", transform: "scale(1.5)" }}
                />
                <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Rewards</p>
              </div>
              <p style={{ display: "flex", gap: "5px" }}>
                {decimalFormatter(playResult.total_reward)}
                <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                  {decimalFormatter(
                    store.getState().tickerPriceState.value != null
                      ? Number(store.getState().tickerPriceState.value) *
                          Number(playResult.total_reward)
                      : 0
                  )}
                </span>
                <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                  {store.getState().currentCurrencyState.value.toUpperCase()}
                </span>
              </p>
            </div>
          </div>
          <div className={style.line} />
          <div
            className={style.light_grey_info_block}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            Word Cracked
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {(() => {
              let words_arr: any = [];

              for (let i = 0; i < playResult.words_cracked.length; i++) {
                words_arr.push(
                  <div
                    className={style.grey_info_block}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      maxWidth: "250px",
                    }}
                  >
                    {playResult.words_cracked[i]}
                  </div>
                );
              }

              return words_arr;
            })()}
          </div>
        </div>
      </div>
    );

  return return_html;
};

export default PlayBlockComponent;
