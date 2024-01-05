import Head from "next/head";
import style from "../styles/pages/page-style.module.scss";
import WeeklyHashesComponent from "../component/index-component/weekly-hashes-component";
import MessageBoxComponent from "../component/messagebox-component/messagebox-component";

import NavbarComponent from "../component/navbar-component/navbar-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import WelcomeBlockComponent from "../component/index-component/welcome-block-component";
import StatBlock from "../component/index-component/stat-block-component";
import PlayHistoryComponent from "../component/index-component/play-history-component";
import { useLazyQuery } from "@apollo/client";
import { INDEX_QUERY } from "../scripts/graphql/index-query/index-query";
import { useEffect, useState } from "react";
import { store } from "./_app";
import FooterComponent from "../component/footer-component";
import IndexBlockComponent from "../component/index-component/index-block-component";
import IndexDefaultBlockComponent from "../component/index-component/index-default-block-component";
import ReportsBlockComponent from "../component/reports-component/reports-block-component";

const ReportsPage = () => {
  const [doneLoadingAndUserNotLoggedin, setNotLoggedIn]: any = useState(null);
  const dispatch = store.dispatch;
  const [indexQuery, { loading, error, data }] = useLazyQuery(INDEX_QUERY);

  useEffect(() => {
    indexQuery();
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
        <title>Clettr | Reports</title>
      </Head>
      <div className={style.page_main}>
        {doneLoadingAndUserNotLoggedin === false ? (
          <ReportsBlockComponent />
        ) : (
          <div className={style.loading_circle_container}>
            <img src="./images/svgs/loading-circle.svg" alt="loading-circle" />
          </div>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default ReportsPage;
