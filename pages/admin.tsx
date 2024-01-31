import Head from "next/head";
import MessageBoxComponent from "../component/messagebox-component/messagebox-component";
import NavbarComponent from "../component/navbar-component/navbar-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import style from "../styles/pages/page-style.module.scss";
import FooterComponent from "../component/footer-component";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { store } from "./_app";
import { INDEX_QUERY } from "../scripts/graphql/index-query/index-query";
import AdminBlockComponent from "../component/admin/admin-block/admin-block-component";

export default function Page() {
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
        <title>Clettr | Admin</title>
      </Head>
      <div className={style.page_main}>
        {doneLoadingAndUserNotLoggedin === false ? (
          <AdminBlockComponent />
        ) : (
          <div className={style.loading_circle_container}>
            <img src="./images/svgs/loading-circle.svg" alt="loading-circle" />
          </div>
        )}
      </div>
      <FooterComponent />
    </div>
  );
}
