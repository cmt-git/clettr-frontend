import Head from 'next/head';
import style from '../styles/pages/page-style.module.scss';

import MessageBoxComponent from '../component/messagebox-component/messagebox-component';
import NavbarComponent from "../component/navbar-component/navbar-component";
import PopupContainerComponent from "../component/popup-component/popup-container-component";
import FooterComponent from '../component/footer-component';
import DocsBlockComponent from '../component/docs-component/docs-block-component';
import { store } from './_app';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { INDEX_QUERY } from '../scripts/graphql/index-query/index-query';

const IndexPage = () => {

  const[doneLoadingAndUserNotLoggedin , setNotLoggedIn]: any = useState(null);
  const dispatch = store.dispatch;
  const [indexQuery, { loading, error, data }] = useLazyQuery(INDEX_QUERY);

  useEffect(() => {
    indexQuery();
  }, []);

  useEffect(() => {
    if (data === undefined){
      return;
    }

    dispatch({type: "queryStateReducer/SET", value: data});
    if (data.user != null){
      dispatch({type: "edit/loggedStateReducer/LOGGED_IN"})
      setNotLoggedIn(false);
    }
    else {
      dispatch({type: "edit/loggedStateReducer/LOGGED_OUT"});
      setNotLoggedIn(true);
    }
  }, [data]);

  return(
    <div className={style.page_root}>
      <NavbarComponent/>
      <PopupContainerComponent/>
      <MessageBoxComponent/>
      <Head>
        <title>Clettr | Docs</title>
      </Head>
      <div className={style.page_main} style={{padding:"0px", minHeight:"auto"}}>
        {
          doneLoadingAndUserNotLoggedin === false || doneLoadingAndUserNotLoggedin === true ? 
            <DocsBlockComponent/>
          :
            null
        }
      </div>
      <FooterComponent/>
    </div>
  )
}

export default IndexPage;