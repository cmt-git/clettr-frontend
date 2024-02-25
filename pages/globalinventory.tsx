import Head from "next/head";
import style from "../styles/pages/page-style.module.scss";
import MessageBoxComponent from "../component/messagebox-component/messagebox-component";
import NavbarComponent from "../component/navbar-component/navbar-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import InventoryBlockComponent from "../component/inventory-component/inventory-block-component";
import FooterComponent from "../component/footer-component";
import { INVENTORY_QUERY } from "../scripts/graphql/inventory-query/inventory-query";
import { useEffect, useState } from "react";
import { store } from "./_app";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";

const InventoryPage = () => {
  const [doneLoadingAndUserNotLoggedin, setNotLoggedIn]: any = useState(null);
  const dispatch = store.dispatch;
  const [inventoryQuery, { loading, error, data }] =
    useLazyQuery(INVENTORY_QUERY);

  const router = useRouter();

  useEffect(() => {
    inventoryQuery({ variables: { page: 1 } });
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

      router.push("/");
    }
  }, [data]);

  return (
    <div className={style.page_root}>
      <NavbarComponent />
      <PopupContainerComponent />
      <MessageBoxComponent />
      <Head>
        <title>Clettr | Inventory</title>
      </Head>
      <div className={style.page_main}>
        {doneLoadingAndUserNotLoggedin === false ? (
          <InventoryBlockComponent
            query={inventoryQuery}
            set_show={true}
            global={true}
          />
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

export default InventoryPage;
