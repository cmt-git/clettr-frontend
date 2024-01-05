import Head from 'next/head';
import style from '../styles/pages/page-style.module.scss';
import MessageBoxComponent from '../component/messagebox-component/messagebox-component';
import NavbarComponent from "../component/navbar-component/navbar-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import MarketplaceBlockComponent from '../component/marketplace-component/marketplace-block-component';
import PlayBlockComponent from '../component/play-component/play-block-component';
import FooterComponent from '../component/footer-component';

const PlayPage = () => {

  return(
    <div className={style.page_root}>
      <NavbarComponent/>
      <PopupContainerComponent/>
      <MessageBoxComponent/>
      <Head>
        <title>Clettr | Marketplace</title>
      </Head>
      <div className={style.page_main}>
        <PlayBlockComponent></PlayBlockComponent>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default PlayPage;