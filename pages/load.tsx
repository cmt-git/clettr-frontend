import FooterComponent from "../component/footer-component";
import MessageBoxComponent from "../component/messagebox-component/messagebox-component";
import NavbarComponent from "../component/navbar-component/navbar-component";
import PlayBlockComponent from "../component/play-component/play-block-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import style from "../styles/pages/page-style.module.scss";
import LoadComponent from "../component/load-component/load-component";

export default function page() {
  return (
    <div className={style.page_root}>
      <NavbarComponent />
      <PopupContainerComponent />
      <MessageBoxComponent />
      <div className={style.page_main}>
        <LoadComponent style={style} />
      </div>
      <FooterComponent />
    </div>
  );
}
