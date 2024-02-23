import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  decimalFormatter,
  getFormattedTime,
  timeConverter,
} from "../../scripts/misc/stringFormatter";
import { RootState } from "../../scripts/redux/rootReducer";
import style from "../../styles/component/index-components/play-history-component.module.scss";
import ItemBlockComponent from "../item-block-component/item-block-component";
import PageBlockComponent from "../pageblock-component";
import SelectBoxComponent from "../select-box-component/select-box-component";
import { gql, useLazyQuery } from "@apollo/client";

const PlayHistoryComponent = (props: any) => {
  const [filterState, setFilterState] = useState("Search by Recent Times");
  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const colorThemeState = useSelector((state: RootState) => {
    return state.colorThemeState.value;
  });

  const [playHistoryQuery, { loading, error, data }] = useLazyQuery(gql`
    query ($page: Int, $filter: String) {
      user_play_history_query(page: $page, filter: $filter) {
        user_play_history {
          match_nfts {
            id
            current_owner
            original_owner
            creation_date
            nft_token_id
            nft_type
            nft_traits
            nft_hash
            nft_stars
            nft_requirement
            status
            market_info
          }
          date
          words_cracked
          rounds
          total_boost
          final_difficulty
          reward
        }
      }
    }
  `);

  useEffect(() => {
    playHistoryQuery({
      variables: {
        filter: filterState,
      },
    });
  }, [filterState]);

  const PlayHistoryBlock = (props: any) => {
    return (
      <div className={style.play_history_block}>
        <div className={style.phb_info_block}>
          <p>
            <span className={style.transparent_text}>Time</span>{" "}
            {timeConverter(
              Number(
                data?.user_play_history_query?.user_play_history[props.index]
                  .date
              )
            )}
          </p>
          <p>
            <span className={style.transparent_text}>Node</span> #
            {
              data?.user_play_history_query?.user_play_history[props.index]
                .match_nfts[0].id
            }
          </p>
          <p>
            <span className={style.transparent_text}>Inventory</span>{" "}
            {(() => {
              let letters: string = "";

              for (
                let i = 0;
                i <
                data?.user_play_history_query?.user_play_history[props.index]
                  .match_nfts.length -
                  1;
                i++
              ) {
                const letter_trait_split =
                  data?.user_play_history_query?.user_play_history[
                    props.index
                  ].match_nfts[i + 1].nft_traits.split("-");

                letters += letter_trait_split[0] + ", ";
              }

              return letters.substring(0, letters.length - 2);
            })()}
          </p>
          <div className={style.phb_earnings_block}>
            <p className={style.transparent_text}>Earnings</p>
            <img
              src={"./images/svgs/clettr-token.svg"}
              alt="clettr-token"
              style={{ width: "20px" }}
            />
            <p>
              {decimalFormatter(
                data?.user_play_history_query?.user_play_history[props.index]
                  .reward
              )}
            </p>
          </div>
        </div>
        <div className={style.phb_main_item_container}>
          <div className={style.php_left_item_container}>
            <ItemBlockComponent
              data={
                data?.user_play_history_query?.user_play_history[props.index]
                  .match_nfts[0]
              }
              hover={false}
            />
          </div>
          <div className={style.vertical_line} />
          <div className={style.phb_right_item_container}>
            {(() => {
              let arr_item_blocks: any = [];

              for (
                let i = 0;
                i <
                data?.user_play_history_query?.user_play_history[props.index]
                  .match_nfts.length -
                  1;
                i++
              ) {
                arr_item_blocks.push(
                  <ItemBlockComponent
                    data={
                      data?.user_play_history_query?.user_play_history[
                        props.index
                      ].match_nfts[i + 1]
                    }
                    hover={false}
                    no_borders={true}
                  />
                );
              }

              return arr_item_blocks;
            })()}
          </div>
        </div>
        <div className={style.info_block_group}>
          <div
            className={style.grey_info_block}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={style.transparent_text}>Set Hash</p>
            <div>
              {(() => {
                let hash: string = "";

                for (
                  let i = 0;
                  i <
                  data?.user_play_history_query?.user_play_history[props.index]
                    .match_nfts.length -
                    1;
                  i++
                ) {
                  hash +=
                    data?.user_play_history_query?.user_play_history[
                      props.index
                    ].match_nfts[i + 1].nft_hash;
                }

                return hash;
              })()}
            </div>
          </div>
          <div
            className={style.grey_info_block}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={style.transparent_text}>Node Hash</p>
            <div>
              {
                data?.user_play_history_query?.user_play_history[props.index]
                  .match_nfts[0].nft_hash
              }
            </div>
          </div>
          <div
            className={style.grey_info_block}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={style.transparent_text}>Total Boost</p>
            <p className={style.yellow_text}>
              {`x${
                data?.user_play_history_query?.user_play_history[props.index]
                  .total_boost
              } Boost`}
            </p>
          </div>
        </div>
        <div className={style.info_block_group}>
          <div
            className={style.grey_info_block}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={style.transparent_text}>Total Rounds</p>
            <div>
              {
                data?.user_play_history_query?.user_play_history[props.index]
                  .rounds
              }
            </div>
          </div>
          <div
            className={style.grey_info_block}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={style.transparent_text}>Words Cracked</p>
            <div>
              {data?.user_play_history_query?.user_play_history[
                props.index
              ].words_cracked.split("-").length - 1}
            </div>
          </div>
          <div
            className={style.grey_info_block}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={style.transparent_text}>Final Difficulty</p>
            <p>
              {
                data?.user_play_history_query?.user_play_history[props.index]
                  .final_difficulty
              }
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          {(() => {
            let words: any = [];
            let cracked_words_split =
              data?.user_play_history_query?.user_play_history[
                props.index
              ].words_cracked.split("-");
            for (let i = 0; i < cracked_words_split.length; i++) {
              if (cracked_words_split[i].length >= 5) {
                words.push(
                  <div
                    className={style.light_black_info_block}
                    style={{ textAlign: "center", maxWidth: "150px" }}
                  >
                    <p>{cracked_words_split[i]}</p>
                  </div>
                );
              }
            }

            return words;
          })()}
        </div>
      </div>
    );
  };

  useEffect(() => {}, []);

  return (
    <div className={style.play_history_component_root}>
      <h1 className={style.title}>Play History</h1>
      <div
        className={style.description_container}
        style={{ marginBottom: "15px" }}
      >
        <p className={style.p_description}>
          Shows your play history from 30 days ago
        </p>
        <div className={style.description_stat_container}>
          <p className={style.transparent_text}>
            Gains{" "}
            <span
              style={{ color: colorThemeState == "dark" ? "white" : "black" }}
            >
              1,234
            </span>
          </p>
          <p className={style.transparent_text}>
            Rounds{" "}
            <span
              style={{ color: colorThemeState == "dark" ? "white" : "black" }}
            >
              482
            </span>
          </p>
        </div>
      </div>
      <SelectBoxComponent
        style={style}
        data={[
          "Search by Recent Times",
          "Search by Oldest Times",
          "Search by Earnings",
          "Search by Difficulty",
        ]}
        state={setFilterState}
      />
      <div className={style.play_history_block_container}>
        {data?.user_play_history_query?.user_play_history.length > 0 ? (
          (() => {
            let history_blocks: any = [];

            for (
              let i = 0;
              i < data?.user_play_history_query?.user_play_history.length;
              i++
            ) {
              history_blocks.push(<PlayHistoryBlock index={i} />);
            }
            return history_blocks;
          })()
        ) : (
          <div
            className={style.grey_info_block}
            style={{ justifyContent: "center", display: "flex" }}
          >
            ⚠️&nbsp;No Play History
          </div>
        )}
      </div>
      <div style={{ marginTop: "-15px" }}>
        <PageBlockComponent
          query={playHistoryQuery}
          variables={{ filter: filterState }}
        />
      </div>
    </div>
  );
};

export default PlayHistoryComponent;
