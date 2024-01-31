import { useState } from "react";
import style from "../../styles/component/item-block-component-style.module.scss";
import InventoryPopupComponent from "../navbar-component/popups/inventory-popup-component";
import { changePopup } from "../popup-component/popup-container-component";

const AddItemBlockComponent = (props: any) => {
  return (
    <div
      className={`${style.item_component_main} ${
        props.hover !== false ? style.item_component_hover : style.null
      } ${style.choose_item_card_root}`}
      onClick={() => {
        if (props.no_hover !== true) {
          changePopup(
            <InventoryPopupComponent
              add_index={props.add_index}
              no_5_stars={props.no_5_stars}
            />
          );
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="82.08"
        height="82.08"
        viewBox="0 0 82.08 82.08"
      >
        <g transform="translate(0 82.08)">
          <path
            d="M41.04-82.08A41.059,41.059,0,0,1,82.08-41.04,41.059,41.059,0,0,1,41.04,0,41.059,41.059,0,0,1,0-41.04,41.059,41.059,0,0,1,41.04-82.08Zm0,8.88A32.175,32.175,0,0,1,73.2-41.04,32.175,32.175,0,0,1,41.04-8.88,32.175,32.175,0,0,1,8.88-41.04,32.175,32.175,0,0,1,41.04-73.2Z"
            fill="#fff"
            fill-rule="evenodd"
          />
          <path
            d="M41.04-28.773a4.406,4.406,0,0,1,4.4,4.4,4.406,4.406,0,0,1-4.4,4.4,4.406,4.406,0,0,1-4.4-4.4A4.406,4.406,0,0,1,41.04-28.773Z"
            fill="#fff"
            fill-rule="evenodd"
          />
          <path
            d="M45.444-57.711a4.4,4.4,0,0,0-4.4-4.4h0a4.4,4.4,0,0,0-4.4,4.4v21.2a4.4,4.4,0,0,0,4.4,4.4h0a4.4,4.4,0,0,0,4.4-4.4Z"
            fill="#fff"
            fill-rule="evenodd"
          />
        </g>
      </svg>
      <p
        className={style.transparent_text}
        style={{ marginTop: "15px", fontSize: "15px" }}
      >
        Choose {props.type == "letter" ? "Letter" : "Node"} Item
      </p>
    </div>
  );
};

export default AddItemBlockComponent;
