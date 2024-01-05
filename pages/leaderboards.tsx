import Head from 'next/head';
import style from '../styles/pages/page-style.module.scss';
import WeeklyHashesComponent from '../component/index-component/weekly-hashes-component';
import MessageBoxComponent from '../component/messagebox-component/messagebox-component';
import NavbarComponent from "../component/navbar-component/navbar-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import WelcomeBlockComponent from '../component/index-component/welcome-block-component';
import StatBlock from '../component/index-component/stat-block-component';
import BattleHistoryComponent from '../component/index-component/battle-history-component';
import PlayerNumberComponent from '../component/leaderboards-component/player-number-component';
import SearchUsernameComponent from '../component/leaderboards-component/search-username-component';
import SortComponent from '../component/leaderboards-component/sort-component';
import LineComponent from '../component/leaderboards-component/line-component';
import PlayerComponent from '../component/leaderboards-component/player-component';
import FooterComponent from '../component/footer-component';

const MarketplacePage = () => {

  return(
    <div className={style.page_root}>
      <NavbarComponent/>
      <PopupContainerComponent/>
      <MessageBoxComponent/>
      <Head>
        <title>Clettr | Leaderboards</title>
      </Head>
      <div className={style.page_main}>
        <PlayerNumberComponent/>
        <SearchUsernameComponent/>
        <SortComponent/>
        <LineComponent/>
        <PlayerComponent/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default MarketplacePage;