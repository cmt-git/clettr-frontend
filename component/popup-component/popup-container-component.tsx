import { useEffect, useState } from 'react';
import style from '../../styles/component/popup-component/popup-container-component-style.module.scss';

export let openPopup: any = null;

export let changePopup: any = null;

export let closePopup: any  = null;

export let backPopup: any = null;

const PopupContainerComponent = () => {

    const[contentPopup, setContentPopup]: any = useState(null);
    const[storedPopup, setStoredPopup]: any = useState(null);
    const[showPopup, setShowPopup]: any = useState(false);
    const[scaleValue, setScaleValue]: any = useState(0);
    const[opacityValue, setOpacityValue]: any = useState(0);

    const localOpenPopup = (content: any) => {
        setScaleValue(1);
        setOpacityValue(0.8);
        setShowPopup(true);

        setContentPopup(content);
        setStoredPopup(content);

        let element: any = document.querySelector("html");
        element.style.overflowY = "hidden";
    }

    const localClosePopup = () => {
        setScaleValue(0);
        setOpacityValue(0);

        setTimeout(() => {
            setShowPopup(false);
        }, 300); // -> sync time with ($TransitionSettings;)

        let element: any = document.querySelector("html");
        element.style.overflowY = "scroll";
    }

    const localBackPopup = () => {
        setContentPopup(storedPopup);
    }

    openPopup = localOpenPopup;
    changePopup = setContentPopup;
    backPopup = localBackPopup;
    closePopup = localClosePopup;

    return(
        <div className={style.popup_container_component_root}
            style={{
                backgroundColor: `rgba(24, 24, 24, ${opacityValue})`,
                visibility: showPopup ? "visible" : "hidden"
            }}
        >
            <div className={style.popup_close_button_background} onClick={() => localClosePopup()}/>
            <div className={style.popup_container_component_main}
                style={{transform:`scale(${scaleValue})`}}
            >
                {
                    contentPopup
                }
            </div>
        </div>
    )
}

export default PopupContainerComponent;