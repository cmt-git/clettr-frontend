import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../pages/_app";
import { calculatePassiveBoost } from "../../scripts/misc/compareHash";
import { RootState } from "../../scripts/redux/rootReducer";
import style from "../../styles/component/item-block-component-style.module.scss";
import ForgePopupComponent from "../inventory-component/popups/forge-popup-component";
import SetPopupComponent from "../inventory-component/popups/set-popup-component";
import { link_messageBoxShow } from "../messagebox-component/messagebox-component";
import InventoryPopupComponent from "../navbar-component/popups/inventory-popup-component";
import PlayPopupComponent from "../play-component/popups/play-popup-component";
import {
  changePopup,
  openPopup,
} from "../popup-component/popup-container-component";
import LetterItem from "./items/letter-item";
import NodeItem from "./items/node-item";
import LetterInfoPopupComponent from "./items/popups/letter-info-popup-component";
import NodeInfoPopupComponent from "./items/popups/node-info-popup-component";

const ItemBlockComponent = (props: any) => {
  const dispatch = useDispatch();

  const queryState = useSelector((state: RootState) => {
    return state.queryState.value;
  });

  let return_html: any = null;
  return_html =
    props.mint !== true ? (
      <div
        className={`${style.item_component_main} ${
          props.hover !== false ? style.item_component_hover : style.null
        }
                ${
                  props.data?.status == "market_sell" &&
                  props.no_borders == null
                    ? style.item_component_border_red
                    : style.null
                }
                ${
                  queryState != null &&
                  queryState.user_set != null &&
                  (() => {
                    for (
                      let i = 0;
                      i < queryState.user_set.user_set.length;
                      i++
                    ) {
                      if (
                        queryState.user_set.user_set[i] != null &&
                        queryState.user_set.user_set[i].id == props.data?.id
                      ) {
                        return true;
                      }
                    }

                    return false;
                  })() &&
                  props.no_borders == null
                    ? style.item_component_border_white
                    : null
                }
            `}
        onClick={() => {
          if (
            props.hover !== false &&
            props.add_index == null &&
            props.inventory_popup !== true &&
            props.no_click !== true
          ) {
            if (props.change_popup) {
              changePopup(
                props.data?.nft_type == "passive" ? (
                  <NodeInfoPopupComponent data={props.data} />
                ) : (
                  <LetterInfoPopupComponent data={props.data} />
                )
              );
            } else {
              openPopup(
                props.data?.nft_type == "passive" ? (
                  <NodeInfoPopupComponent data={props.data} />
                ) : (
                  <LetterInfoPopupComponent data={props.data} />
                )
              );
            }
          }

          if (props.add_index != null) {
            const addItemStateArr = store.getState().addItemIndexState.value;
            addItemStateArr[props.add_index] = props.data;

            dispatch({
              type: "edit/addItemIndexReducer/SET",
              value: addItemStateArr,
            });

            if (store.getState().addItemTypeState.value == "set_popup") {
              changePopup(<SetPopupComponent />);
            }

            if (store.getState().addItemTypeState.value == "forge_popup") {
              changePopup(<ForgePopupComponent />);
            }

            if (store.getState().addItemTypeState.value == "play_popup") {
              changePopup(<PlayPopupComponent />);
            }
          }

          if (props.inventory_popup == true) {
            changePopup(
              <InventoryPopupComponent
                add_index={props.add_index}
                no_5_stars={props.no_5_stars}
                set_traits={props.set_traits}
              />
            );
          }

          if (props.no_click === true && props.custom_click_function) {
            props.custom_click_function();
          }
        }}
      >
        <div className={style.ibc_header}>
          {props.mint === true
            ? "x1 Boost"
            : props.data?.nft_type == "passive"
            ? "x" + calculatePassiveBoost(props.data?.nft_hash) + " Boost"
            : "--- Boost"}
        </div>
        <div className={style.ibc_title_block}>
          {props.mint !== true &&
          props.result !== true &&
          props.data?.status == "burned" ? (
            <div
              className={style.ibc_error}
              onMouseEnter={() => {
                link_messageBoxShow("This NFT has been burned.", false);
              }}
            >
              !
            </div>
          ) : null}
          {props.mint === true ? (
            <p>
              {props.data?.nft_type == "passive"
                ? "Random Node"
                : "Random Letter"}
            </p>
          ) : (
            <p>
              {props.data?.nft_type == "passive"
                ? `Node #${props.data?.id}`
                : props.result !== true
                ? `Letter ${props.data?.nft_traits.substring(0, 1)} #${
                    props.data?.id
                  }`
                : "Letter A #---"}
            </p>
          )}
        </div>
        <div className={style.ibc_star_container}>
          {(() => {
            let stars: any = [];

            for (let i = 0; i < Number(props.data?.nft_stars); i++) {
              stars.push(
                <svg
                  className={style.star_svg}
                  xmlns="http://www.w3.org/2000/svg"
                  width="46.13"
                  height="43.872"
                  viewBox="0 0 46.13 43.872"
                >
                  <g transform="translate(-1.187 48.504)">
                    <path
                      d="M24.252-48.5l7.567,13.837,15.5,2.92L36.5-20.274,38.507-4.632,24.252-11.379,10-4.632l2.012-15.642L1.187-31.746l15.5-2.92Z"
                      fill="#ffa600"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              );
            }

            return stars;
          })()}
        </div>
        <p className={style.transparent_text}>
          {props.data?.nft_type == "passive" ? "Passive NFT" : "Active NFT"}
        </p>
        <div className={style.item_container}>
          {props.data?.nft_type == "passive" ? (
            <NodeItem mint={props.mint} data={props.data} />
          ) : (
            <LetterItem mint={props.mint} data={props.data} />
          )}
        </div>
        {props.mint === true ? (
          <div>
            {props.data?.nft_type == "passive"
              ? "- Requirements"
              : "--- --- ---"}
          </div>
        ) : (
          <div>
            {props.data?.nft_type == "passive"
              ? `${props.data?.nft_requirement.split("-").length} ${
                  props.data?.nft_requirement.split("-").length > 1
                    ? "Requirements"
                    : "Requirement"
                }`
              : `${
                  props.data?.nft_traits.split("-")[1][0].toUpperCase() +
                  props.data?.nft_traits
                    .split("-")[1]
                    .substring(1, props.data?.nft_traits.split("-")[1].length)
                } ${
                  props.data?.nft_traits.split("-")[2][0].toUpperCase() +
                  props.data?.nft_traits
                    .split("-")[2]
                    .substring(1, props.data?.nft_traits.split("-")[2].length)
                } ${props.data?.nft_traits.substring(0, 1)}`}
          </div>
        )}
        <div className={style.line} />
        <p className={style.transparent_text}>Hash</p>
        <div className={style.ibc_hash_box} style={{ fontSize: "15px" }}>
          {props.data != null && props.data?.nft_hash != null
            ? props.data?.nft_hash
            : "--"}
        </div>
      </div>
    ) : (
      <div
        className={`${style.item_component_main} ${
          props.hover !== false ? style.item_component_hover : style.null
        }`}
      >
        <div className={style.ibc_header}>x1 Boost</div>
        <div className={style.ibc_title_block}>
          <p>
            {props.type == "passive"
              ? props.forge == true
                ? "Forge Node"
                : "Random Node"
              : props.forge == true
              ? "Forge Letter"
              : "Random Letter"}
          </p>
        </div>
        <div className={style.ibc_star_container}>
          {(() => {
            let stars: any = [];
            const star_count: number =
              props.custom_stars != null && props.custom_stars > 0
                ? props.custom_stars
                : 1;

            for (let i = 0; i < star_count; i++) {
              stars.push(
                <svg
                  className={style.star_svg}
                  xmlns="http://www.w3.org/2000/svg"
                  width="46.13"
                  height="43.872"
                  viewBox="0 0 46.13 43.872"
                >
                  <g transform="translate(-1.187 48.504)">
                    <path
                      d="M24.252-48.5l7.567,13.837,15.5,2.92L36.5-20.274,38.507-4.632,24.252-11.379,10-4.632l2.012-15.642L1.187-31.746l15.5-2.92Z"
                      fill="#ffa600"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              );
            }

            return stars;
          })()}
        </div>
        <p className={style.transparent_text}>
          {props.type == "passive" ? "Passive NFT" : "Active NFT"}
        </p>
        <div className={style.item_container}>
          {props.type == "passive" ? (
            <NodeItem mint={props.mint} data={props.data} />
          ) : (
            <LetterItem mint={props.mint} data={props.data} />
          )}
        </div>
        <div>{props.type == "passive" ? "- Requirements" : "--- --- ---"}</div>
        <div className={style.line} />
        <p className={style.transparent_text}>Hash</p>
        <div className={style.ibc_hash_box} style={{ fontSize: "15px" }}>
          --
        </div>
      </div>
    );

  return return_html;
};

export default ItemBlockComponent;
