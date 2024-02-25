import { SlowBuffer } from "buffer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../pages/_app";
import {
  calculateActiveBoost,
  getComparedHash,
} from "../../../scripts/misc/compareHash";
import { RootState } from "../../../scripts/redux/rootReducer";
import { updateSet } from "../../../scripts/router/user/user-request";
import style from "../../../styles/component/popup-component/popup-content-style.module.scss";
import AddItemBlockComponent from "../../item-block-component/add-item-block-component";
import ItemBlockComponent from "../../item-block-component/item-block-component";
import { closePopup } from "../../popup-component/popup-container-component";

const SetPopupComponent = () => {
  const addItemsLength = 5;

  const [addItemIndexHash, setAddItemIndexHash]: any = useState("----------"); //? keep default value at 10 dash
  const addItemIndexState = useSelector((state: RootState) => {
    return state.addItemIndexState.value;
  });

  const dispatch = useDispatch();
  //? initialize addItem redux state
  useEffect(() => {
    if (
      addItemIndexState == null ||
      store.getState().addItemTypeState.value != "set_popup"
    ) {
      let init_arr: any = [];
      for (let i = 0; i < addItemsLength; i++) {
        if (store.getState().queryState.value.user_set.user_set != null) {
          init_arr.push(store.getState().queryState.value.user_set.user_set[i]);
        } else {
          init_arr.push(null);
        }
      }

      store.dispatch({ type: "edit/addItemIndexReducer/SET", value: init_arr });
      store.dispatch({
        type: "edit/addItemTypeReducer/SET",
        value: "set_popup",
      });
    }

    dispatch({ type: "edit/addItemFilterReducer/SET", value: "active" });
  }, []);

  useEffect(() => {
    setAddItemIndexHash(
      (() => {
        return (
          (addItemIndexState != null && addItemIndexState[0] != null
            ? addItemIndexState[0].nft_hash
            : "--") +
          (addItemIndexState != null && addItemIndexState[1] != null
            ? addItemIndexState[1].nft_hash
            : "--") +
          (addItemIndexState != null && addItemIndexState[2] != null
            ? addItemIndexState[2].nft_hash
            : "--") +
          (addItemIndexState != null && addItemIndexState[3] != null
            ? addItemIndexState[3].nft_hash
            : "--") +
          (addItemIndexState != null && addItemIndexState[4] != null
            ? addItemIndexState[4].nft_hash
            : "--")
        );
      })()
    );
  }, [addItemIndexState]);

  return (
    <div className={`${style.popup_content_root}`} style={{ width: "auto" }}>
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
        Set
      </p>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {(() => {
          let add_items_arr = [];
          for (let i = 0; i < addItemsLength; i++) {
            add_items_arr.push(
              <span>
                {addItemIndexState != null && addItemIndexState[i] != null ? (
                  <ItemBlockComponent
                    no_borders={true}
                    inventory_popup={true}
                    data={addItemIndexState[i]}
                    add_index={i}
                  />
                ) : (
                  <AddItemBlockComponent type={"letter"} add_index={i} />
                )}
              </span>
            );
          }
          return add_items_arr;
        })()}
      </div>
      <div
        className={`${style.colored_button} ${style.red_button}`}
        style={{ marginTop: "15px" }}
        onClick={async () => {
          let init_arr: any = [];
          for (let i = 0; i < addItemsLength; i++) {
            init_arr.push(null);
          }

          store.dispatch({
            type: "edit/addItemIndexReducer/SET",
            value: init_arr,
          });
          store.dispatch({
            type: "edit/addItemTypeReducer/SET",
            value: "set_popup",
          });
          dispatch({
            type: "edit/addItemFilterReducer/SET",
            value: "active",
          });

          await updateSet({
            reset: true,
          });

          window.location.reload();
        }}
      >
        Clear All
      </div>
      <div className={style.line} style={{ margin: "20px 0px" }} />
      <div style={{ display: "flex", gap: "15px" }}>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Set Hash</p>
          <p>{addItemIndexHash}</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Compared Hash</p>
          <p>{getComparedHash(addItemIndexHash, "active")}</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>Total Boost</p>
          <p className={style.yellow_text}>
            {"x" + calculateActiveBoost(addItemIndexHash) + " Boost"}
          </p>
        </div>
      </div>
      <div
        className={`${style.grey_button} ${style.colored_button}`}
        style={{ marginTop: "15px" }}
        onClick={async () => {
          if (
            (() => {
              let not_full: boolean = false;
              for (let i = 0; i < addItemIndexHash.length; i++) {
                if (addItemIndexHash[i] == "-") {
                  not_full = true;
                }
              }
              return not_full == false;
            })()
          ) {
            let ids: any = [];

            for (let i = 0; i < addItemIndexState.length; i++) {
              ids.push(addItemIndexState[i].id);
            }

            await updateSet({
              set_ids: ids,
            });

            window.location.reload();
          }
        }}
      >
        Update
      </div>
    </div>
  );
};

export default SetPopupComponent;
