import Head from 'next/head';
import FooterComponent from '../component/footer-component';
import MessageBoxComponent from '../component/messagebox-component/messagebox-component';
import NavbarComponent from '../component/navbar-component/navbar-component';
import PopupContainerComponent from '../component/popup-component/popup-container-component';
import SettingsBlockComponent from '../component/settings-component/settings-block-component';
import style from '../styles/pages/page-style.module.scss';

const Settings = () => {
    return(
        <div className={style.page_root}>
            <NavbarComponent/>
            <PopupContainerComponent/>
            <MessageBoxComponent/>
            <Head>
                <title>Beastclash | Home</title>
            </Head>
            <div className={style.page_main}>
                <SettingsBlockComponent/>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default Settings;