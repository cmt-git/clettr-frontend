import style from "../styles/component/footer-component-style.module.scss";

const FooterComponent = () => {
  return (
    <div className={style.footer_component_root}>
      <div className={`${style.block_container} ${style.social_media_block}`}>
        <p style={{ width: "100%" }}>Connect with us!</p>
        <div className={style.line} />
        <div className={style.social_media_container}>
          <div className={style.fcr_smc_row}>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-discord-logo.svg"}
                alt="discord-logo"
              />
              <p>Clettr Discord</p>
            </div>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-facebook-logo.svg"}
                alt="facebook-logo"
              />
              <p>@clettr</p>
            </div>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-reddit-logo.svg"}
                alt="reddit-logo"
                style={{ width: "20px" }}
              />
              <p>/clettr</p>
            </div>
          </div>
          <div className={style.fcr_smc_row} style={{ marginTop: "10px" }}>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-tiktok-logo.svg"}
                alt="tiktok-logo"
              />
              <p>@clettr</p>
            </div>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-twitter-logo.svg"}
                alt="twitter-logo"
              />
              <p>@clettr</p>
            </div>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-youtube-logo.svg"}
                alt="youtube-logo"
              />
              <p>@clettr</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.logo_block} ${style.block_container}`}>
        <div className={style.fc_logo_container}>
          <img
            src="./images/svgs/clettr-logo.svg"
            alt="clettr-logo"
            className={style.fc_logo}
          />
          <img
            src="./images/svgs/clettr-word-logo.svg"
            alt="clettr-word-logo"
            className={style.fc_word_logo}
          />
        </div>
        <div className={style.copyright_container}>
          <p style={{ fontSize: "16px", marginTop: "20px" }}>© Clettr</p>
          <p className={style.transparent_text} style={{ marginTop: "0px" }}>
            All rights reserved
          </p>
        </div>
      </div>
      <div className={`${style.contact_block} ${style.block_container}`}>
        <p style={{ width: "100%" }}>Contact</p>
        <div className={style.line} />
        <div className={style.social_media_container}>
          <div className={style.fcr_smc_row}>
            <div
              className={style.dark_black_info_block}
              style={{ display: "flex" }}
            >
              <p
                className={style.transparent_text}
                style={{
                  marginRight: "5px",
                }}
              >
                Email
              </p>
              <p>clettr.contact@clettr.com</p>
            </div>
          </div>
          <div className={style.fcr_smc_row} style={{ marginTop: "10px" }}>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-twitter-logo.svg"}
                alt="twitter-logo"
              />
              <p>@dev_1</p>
            </div>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-twitter-logo.svg"}
                alt="twitter-logo"
              />
              <p>@dev_2</p>
            </div>
            <div
              className={`${style.colored_button} ${style.dark_black_button}`}
            >
              <img
                src={"./images/svgs/circle-twitter-logo.svg"}
                alt="twitter-logo"
              />
              <p>@dev_3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
