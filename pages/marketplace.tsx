import Head from "next/head";
import style from "../styles/pages/page-style.module.scss";
import WeeklyHashesComponent from "../component/index-component/weekly-hashes-component";
import MessageBoxComponent from "../component/messagebox-component/messagebox-component";
import NavbarComponent from "../component/navbar-component/navbar-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import WelcomeBlockComponent from "../component/index-component/welcome-block-component";
import StatBlock from "../component/index-component/stat-block-component";
import MarketplaceBlockComponent from "../component/marketplace-component/marketplace-block-component";
import FooterComponent from "../component/footer-component";
import { useEffect, useState } from "react";
import { store } from "./_app";
import { useLazyQuery } from "@apollo/client";
import { MARKET_QUERY } from "../scripts/graphql/market-query/market-query";
import { useRouter } from "next/router";

const MarketplacePage = () => {
  const router = useRouter();
  const [doneLoadingAndUserNotLoggedin, setNotLoggedIn]: any = useState(null);
  const dispatch = store.dispatch;
  const [marketQuery, { loading, error, data }] = useLazyQuery(MARKET_QUERY);

  useEffect(() => {
    marketQuery({ variables: { page: 1 } });
  }, []);

  useEffect(() => {
    if (data === undefined) {
      return;
    }

    dispatch({ type: "queryStateReducer/SET", value: data });
    if (data.user != null) {
      dispatch({ type: "edit/loggedStateReducer/LOGGED_IN" });
      setNotLoggedIn(false);
    } else {
      dispatch({ type: "edit/loggedStateReducer/LOGGED_OUT" });
      setNotLoggedIn(true);
    }
  }, [data]);

  return (
    <div className={style.page_root}>
      <NavbarComponent />
      <PopupContainerComponent />
      <MessageBoxComponent />
      <Head>
        <title>Clettr | Marketplace</title>
      </Head>
      <div className={style.page_main}>
        <MarketplaceBlockComponent query={marketQuery} />
      </div>
      <FooterComponent />
    </div>
  );
};

export default MarketplacePage;
