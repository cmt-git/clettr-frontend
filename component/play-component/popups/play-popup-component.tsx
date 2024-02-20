import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../pages/_app";
import {
  calculateActiveBoost,
  calculatePassiveBoost,
  getComparedHash,
} from "../../../scripts/misc/compareHash";
import { getFormattedTime } from "../../../scripts/misc/stringFormatter";
import { RootState } from "../../../scripts/redux/rootReducer";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import AddItemBlockComponent from "../../item-block-component/add-item-block-component";
import ItemBlockComponent from "../../item-block-component/item-block-component";
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";
import InventoryPopupComponent from "../../navbar-component/popups/inventory-popup-component";
import {
  changePopup,
  closePopup,
} from "../../popup-component/popup-container-component";

const PlayPopupComponent = () => {
  const [setHash, changeSetHash]: any = useState("----------"); //? keep default value at 10 dash
  const router = useRouter();

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  const addItemIndexState = useSelector((state: RootState) => {
    return state.addItemIndexState.value;
  });

  const dispatch = useDispatch();
  //? initialize addItem redux state
  useEffect(() => {
    if (
      addItemIndexState == null ||
      store.getState().addItemTypeState.value != "play_popup"
    ) {
      let init_arr: any = [null];

      store.dispatch({ type: "edit/addItemIndexReducer/SET", value: init_arr });
    }

    store.dispatch({
      type: "edit/addItemTypeReducer/SET",
      value: "play_popup",
    });
    dispatch({ type: "edit/addItemFilterReducer/SET", value: "passive" });
    dispatch({ type: "edit/playStateReducer/SET", value: null });
  }, []);

  useEffect(() => {
    let set_hash = "";
    for (let i = 0; i < queryState.user_set.user_set.length; i++) {
      set_hash += queryState.user_set.user_set[i].nft_hash;
    }
    changeSetHash(set_hash);
  }, [queryState]);

  //? energy refill timer ⤵
  const [currentTime, setCurrentTime]: any = useState(new Date().getTime());
  useEffect(() => {
    setTimeout(() => {
      const formattedTime = getFormattedTime(currentTime);
      if (formattedTime == "00:00:00") {
        setCurrentTime(new Date().getTime());
      } else {
        setCurrentTime(currentTime + 1000);
      }
    }, 1000);
  }, [currentTime]);
  //? energy refill timer ⤴

  return (
    <div className={style.popup_content_root} style={{ width: "auto" }}>
      <div
        style={{ width: "100%", marginBottom: "10px" }}
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
      <p style={{ width: "100%", textAlign: "center", fontSize: "15px" }}>
        Play
      </p>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          height: "",
        }}
      >
        {
          <span>
            {addItemIndexState != null && addItemIndexState[0] != null ? (
              <ItemBlockComponent
                no_borders={true}
                inventory_popup={true}
                data={addItemIndexState[0]}
                add_index={0}
              />
            ) : (
              <AddItemBlockComponent type={"letter"} add_index={0} />
            )}
          </span>
        }
        <div
          className={style.vertical_line}
          style={{ height: "440px", margin: "0px" }}
        />
        {queryState.user_set != null
          ? (() => {
              let set_items_arr = [];
              for (let i = 0; i < queryState.user_set.user_set.length; i++) {
                set_items_arr.push(
                  <span>
                    <ItemBlockComponent
                      hover={false}
                      no_borders={true}
                      data={queryState.user_set.user_set[i]}
                    />
                  </span>
                );
              }
              return set_items_arr;
            })()
          : null}
      </div>
      <div
        className={`${style.grey_button} ${style.colored_button}`}
        style={{ marginTop: "15px" }}
        onClick={() => {
          //? force rerender
          async () => {
            dispatch({ type: "edit/addItemFilterReducer/SET", value: null });
            setTimeout(() => {
              dispatch({
                type: "edit/addItemFilterReducer/SET",
                value: "passive",
              });
            }, 1000);
          };
          changePopup(
            <InventoryPopupComponent add_index={0} not_user={true} />
          );
        }}
      >
        Use Community Node
      </div>
      {addItemIndexState != null &&
      addItemIndexState[0] != null &&
      addItemIndexState[0].nft_type == "passive" ? (
        <div className={style.requirement_box} style={{ marginTop: "15px" }}>
          <div
            className={style.grey_info_block}
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          >
            <p className={style.transparent_text}>Requirements</p>
          </div>
          <div
            className={style.black_info_block}
            style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
          >
            {(() => {
              const requirements =
                addItemIndexState[0].nft_requirement.split("-");
              const block_arr = [];

              for (let i = 0; i < requirements.length; i++) {
                block_arr.push(
                  <div className={style.light_black_info_block}>
                    <p className={style.transparent_text}>
                      {[
                        "pink",
                        "purple",
                        "blue",
                        "teal",
                        "lime",
                        "green",
                        "yellow",
                        "orange",
                        "red",
                      ].includes(requirements[i])
                        ? "Color"
                        : [
                            "striped",
                            "spotted",
                            "zigzag",
                            "checkered",
                            "cross",
                            "sharp",
                          ].includes(requirements[i])
                        ? "Pattern"
                        : ["5", "4", "3", "2", "1"].includes(requirements[i])
                        ? "Stars"
                        : "Letters"}
                    </p>
                    <p>
                      {requirements[i][0].toUpperCase() +
                        requirements[i].substring(1, requirements[i].length)}
                    </p>
                  </div>
                );
              }

              return block_arr;
            })()}
          </div>
        </div>
      ) : null}
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Node Hash</p>
          <p>
            {addItemIndexState != null && addItemIndexState[0] != null
              ? addItemIndexState[0].nft_hash
              : "----------"}
          </p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Compared Node Hash</p>
          <p>
            {addItemIndexState != null && addItemIndexState[0] != null
              ? getComparedHash(addItemIndexState[0].nft_hash, "passive")
              : "----------"}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          margin: "15px 0px",
        }}
      >
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Set Hash</p>
          <p>{setHash}</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Compared Set Hash</p>
          <p>{getComparedHash(setHash, "active")}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          margin: "15px 0px",
        }}
      >
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Energy</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40.546"
              height="58.389"
              viewBox="0 0 40.546 58.389"
              style={{ width: "15px", height: "15px" }}
            >
              <g data-name="Group 6" transform="translate(0 58.389)">
                <path
                  d="M25.073-58.389,0-23.127l17.52.188L15.473,0,40.546-35.367H23.025Z"
                  fill="#ffac05"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
            <p style={{ margin: "0px 5px", marginRight: "10px" }}>
              {queryState.user_info.current_energy}/
              {queryState.user_info.max_energy}
            </p>
            <p
              style={{
                opacity: 0.5,
                width: "130px",
                textAlign: "left",
                marginRight: "-12px",
              }}
            >
              Resets In {getFormattedTime(currentTime)}
            </p>
          </div>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Total Boost</p>
          <p className={style.yellow_text}>
            {addItemIndexState != null &&
            addItemIndexState[0] != null &&
            queryState.user_set != null
              ? `x${
                  calculateActiveBoost(setHash) +
                  calculatePassiveBoost(addItemIndexState[0].nft_hash)
                } Boost`
              : "--- Boost"}
          </p>
        </div>
      </div>
      <div
        className={`${style.light_grey_button} ${style.colored_button}`}
        style={{ marginTop: "15px" }}
        onClick={() => {
          let allow_play: boolean = true;
          let reason: string = "";
          let user_info_node_history_split = [];

          if (queryState.user_info.node_used != null) {
            user_info_node_history_split =
              queryState.user_info.node_used.split("-");
          }

          const ids: any = [];
          const id_repetition: any = [];

          for (let i = 0; i < user_info_node_history_split.length; i++) {
            if (user_info_node_history_split[i] != null) {
              if (ids.includes(user_info_node_history_split[i]) == false) {
                ids.push(user_info_node_history_split[i]);
                id_repetition.push(1);
              } else {
                let index = ids.indexOf(user_info_node_history_split[i]);
                let increment = id_repetition[index] + 1;
                id_repetition[index] = increment;

                if (
                  increment == 7 &&
                  addItemIndexState[0].id == user_info_node_history_split[i] &&
                  addItemIndexState[0].current_owner != queryState.user.username
                ) {
                  allow_play = false;
                  reason =
                    "You have used this community node seven times for this week.";
                }
              }
            }
          }

          const node_req = addItemIndexState[0].nft_requirement.split("-");
          for (let i = 0; i < node_req.length; i++) {
            for (let x = 0; x < queryState.user_set.user_set.length; x++) {
              const current_traits =
                queryState.user_set.user_set[x].nft_traits.split("-");
              for (let z = 0; z < current_traits.length; z++) {
                if (node_req[i] == current_traits[z]) {
                  const index = node_req.indexOf(node_req[i]);
                  if (index > -1) {
                    node_req.splice(index, 1); // 2nd parameter means remove one item only
                  }
                }

                if (
                  node_req[i] ==
                  Number(queryState.user_set.user_set[x].nft_stars)
                ) {
                  const index = node_req.indexOf(node_req[i]);
                  if (index > -1) {
                    node_req.splice(index, 1); // 2nd parameter means remove one item only
                  }
                }
              }
            }

            if (node_req.length == 0) {
              break;
            }
          }

          if (node_req.length > 0) {
            reason = "Your set does not meet the right node requirements.";
            allow_play = false;
          }

          if (queryState.user_info.current_energy > 0 && allow_play) {
            dispatch({
              type: "edit/playStateReducer/SET",
              value: {
                boost:
                  calculateActiveBoost(setHash) +
                  calculatePassiveBoost(addItemIndexState[0].nft_hash),
                set: queryState.user_set.user_set,
                set_hash: setHash,
                node: addItemIndexState[0],
              },
            });
            closePopup();
            //window.location.href = "/play";
            router.push("/play");
          } else {
            if (queryState.user_info.current_energy <= 0) {
              link_messageBoxShow(
                "You have no energy left. Please continue once it has been refilled.",
                false
              );
            } else {
              link_messageBoxShow(reason, false);
            }
          }
        }}
      >
        Play
      </div>
    </div>
  );
};

export default PlayPopupComponent;
