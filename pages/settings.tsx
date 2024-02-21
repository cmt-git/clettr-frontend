import Head from "next/head";
import FooterComponent from "../component/footer-component";
import MessageBoxComponent from "../component/messagebox-component/messagebox-component";
import NavbarComponent from "../component/navbar-component/navbar-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import SettingsBlockComponent from "../component/settings-component/settings-block-component";
import style from "../styles/pages/page-style.module.scss";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { INDEX_QUERY } from "../scripts/graphql/index-query/index-query";
import { store } from "./_app";

const Settings = () => {
  const dispatch = store.dispatch;
  const [doneLoadingAndUserNotLoggedin, setNotLoggedIn]: any = useState(null);
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
      window.location.href = "/";
    }
  }, [data]);

  return (
    <div className={style.page_root}>
      <NavbarComponent />
      <PopupContainerComponent />
      <MessageBoxComponent />
      <Head>
        <title>Beastclash | Home</title>
      </Head>
      <div className={style.page_main}>
        {doneLoadingAndUserNotLoggedin === false ? (
          <SettingsBlockComponent />
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

export default Settings;
