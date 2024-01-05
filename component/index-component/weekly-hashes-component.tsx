import style from "../../styles/component/index-components/weekly-hashes-component.module.scss";
import { openPopup } from "../popup-component/popup-container-component";
import LetterCheckInventoryPopupComponent from "./popups/letter-check-inventory-popup-component";
import NodeCheckInventoryPopupComponent from "./popups/node-check-inventory-popup";
import HashBoxComponent from "./sub-component/hash-box-component";

const WeeklyHashesComponent = (props: any) => {
  return (
    <div className={style.weekly_hashes_component_root}>
      <div style={{ fontSize: "15px" }}>
        {props.type == "active"
          ? "Weekly hashes for Active NFTs"
          : "Weekly hashes for Passive NFTs"}
      </div>
      <p className={style.description_p}>
        {props.type == "active"
          ? "Weekly hashes from week, August 7 - 13 2022. Boosted by Active NFT's hashes by 5x per hash character if aligned. Hashes for Active NFTs are based on an entire set."
          : "Weekly hashes from week, August 7 - 13 2022. Boosted by Passive NFT's hashes by 2x per hash character if aligned."}
      </p>
      <div className={style.hash_main_container}>
        <div className={style.hashes_container}>
          {(() => {
            let hash_boxes: any = [];
            for (let i = 0; i < 5; i++) {
              hash_boxes.push(<HashBoxComponent type={props.type} index={i} />);
            }

            return hash_boxes;
          })()}
        </div>
      </div>
    </div>
  );
};

export default WeeklyHashesComponent;
