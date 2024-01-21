import style from "../../../styles/component/docs-component/popups/docs-popups-component-style.module.scss";
import WelcomeBlockComponent from "../../index-component/welcome-block-component";
import AddItemBlockComponent from "../../item-block-component/add-item-block-component";
import ItemBlockComponent from "../../item-block-component/item-block-component";

const ForgeInfoPopupComponent = () => {
  return (
    <div className={style.docs_popup_component_root}>
      <div className={style.grey_info_block} style={{ textAlign: "center" }}>
        Forge
      </div>
      <div
        className={style.float_element}
        style={{
          margin: "50px 0px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <AddItemBlockComponent type={"letter"} no_hover={true} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66.866"
          height="49.12"
          viewBox="0 0 66.866 49.12"
          className={style.forge_arrow}
        >
          <g transform="translate(-1.606 52.48)">
            <path
              d="M38.257-41.526a1.44,1.44,0,0,0,1.44-1.44V-49.04a1.44,1.44,0,0,1,.848-1.313,1.44,1.44,0,0,1,1.545.234L65.985-29a1.44,1.44,0,0,1,.486,1.079,1.44,1.44,0,0,1-.486,1.079L42.09-5.721a1.44,1.44,0,0,1-1.545.234A1.44,1.44,0,0,1,39.7-6.8v-6.074a1.44,1.44,0,0,0-1.44-1.44H5.046a1.44,1.44,0,0,1-1.018-.422,1.44,1.44,0,0,1-.422-1.018V-40.086A1.44,1.44,0,0,1,4.027-41.1a1.44,1.44,0,0,1,1.018-.422Z"
              fill="#272C3F"
              fill-rule="evenodd"
              className={style.arrow_body}
            />
            <path
              d="M37.7-43.526H5.046a3.44,3.44,0,0,0-2.432,1.008,3.44,3.44,0,0,0-1.008,2.432v24.331a3.44,3.44,0,0,0,1.008,2.433,3.44,3.44,0,0,0,2.432,1.007H37.7V-6.8a3.44,3.44,0,0,0,2.026,3.136,3.44,3.44,0,0,0,3.692-.559l23.895-21.12a3.44,3.44,0,0,0,1.162-2.577A3.44,3.44,0,0,0,67.309-30.5L43.415-51.617a3.44,3.44,0,0,0-3.692-.559A3.44,3.44,0,0,0,37.7-49.04Zm.56,2a1.44,1.44,0,0,0,1.44-1.44V-49.04a1.44,1.44,0,0,1,.848-1.313,1.44,1.44,0,0,1,1.545.234L65.985-29a1.44,1.44,0,0,1,.486,1.079,1.44,1.44,0,0,1-.486,1.079L42.09-5.721a1.44,1.44,0,0,1-1.545.234A1.44,1.44,0,0,1,39.7-6.8v-6.074a1.44,1.44,0,0,0-1.44-1.44H5.046a1.44,1.44,0,0,1-1.018-.422,1.44,1.44,0,0,1-.422-1.018V-40.086A1.44,1.44,0,0,1,4.027-41.1a1.44,1.44,0,0,1,1.018-.422Z"
              fill="#929FB5"
              fill-rule="evenodd"
              className={style.arrow_border}
            />
          </g>
        </svg>
        <ItemBlockComponent
          data={{
            id: 12,
            current_owner: "",
            original_owner: "",
            creation_date: "",
            nft_type: "active",
            nft_traits: "A-pink-striped",
            nft_hash: "LE",
            nft_stars: "5",
            nft_requirement: null,
            status: null,
            market_info: null,
          }}
          forge={true}
          mint={true}
          custom_stars={5}
          hover={false}
        />
      </div>
      <p
        className={style.transparent_text}
        style={{
          lineHeight: "25px",
          marginTop: "20px",
        }}
      >
        Forging simply upgrades your NFTs adding more stars making them reward
        you more Ettr. Forging is also created to encourage burning of Ettr to
        keep its price stable by laws of supply and demand. Forging also changes
        the traits of your NFT, it affects everything from pattern, color, and
        especially hashes. You would need 3 Base NFTs to forge a new one. For
        example if you have 3 Active NFTs, it should be all the same letter else
        it would not be allowed. Colors, hashes, and patterns inherited are
        affected by the base NFT's traits, the chances of traits being inherited
        can be controlled for example, if two of the base NFTs are pink, and one
        is blue there is a 66% chance that the forge NFT is also pink and 33%
        chance of inheriting the color blue, patterns and hashes share the same
        logic.
      </p>
      <p
        className={style.transparent_text}
        style={{
          lineHeight: "25px",
          marginTop: "20px",
          textAlign: "left",
          width: "100%",
          marginBottom: "-10px",
        }}
      >
        Passive NFT upgrades give you more Ettr per round.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
          gap: "15px",
          maxWidth: "1000px",
        }}
      >
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>1 Star</p>
          <p style={{ display: "flex", alignItems: "center" }}>0.1 Ettr</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>2 Stars</p>
          <p>0.2 Ettr</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>3 Stars</p>
          <p>0.35 Ettr</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>4 Stars</p>
          <p>0.4 Ettr</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>5 Stars</p>
          <p>0.5 Ettr</p>
        </div>
      </div>
      <p
        className={style.transparent_text}
        style={{
          lineHeight: "25px",
          marginTop: "20px",
          textAlign: "left",
          width: "100%",
          marginBottom: "-10px",
        }}
      >
        Active NFT upgrades gives you Ettr reward boost per round.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
          gap: "15px",
          maxWidth: "1000px",
          marginBottom: "200px",
        }}
      >
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>1 Star</p>
          <p style={{ display: "flex", alignItems: "center" }}>+x0</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>2 Stars</p>
          <p>+x0.02</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>3 Stars</p>
          <p>+x0.044</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>4 Stars</p>
          <p>+x0.07</p>
        </div>
        <div
          className={style.grey_info_block}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={style.transparent_text}>5 Stars</p>
          <p>+x0.09</p>
        </div>
      </div>
    </div>
  );
};

export default ForgeInfoPopupComponent;
