import { useState, useSyncExternalStore } from 'react';
import style from '../../styles/component/messagebox-component/messagebox-component-style.module.scss';

export let link_messageBoxShow: any = null;

const MessageBoxComponent = () => {

    const[opacity, setOpacity]: any = useState(0);
    const[marginTop, setMarginTop]: any = useState(-20);
    const[message, setMessage]: any = useState("");
    const[barTime, setBarTime]: any = useState(0);
    const[barDuration, setBarDuration]: any = useState(0);
    const[boxType, setBoxType]: any = useState(0);

    const messageBoxShow = (message: any, color: any) => {
        
        setOpacity(1);
        setMarginTop(20);
        setBarTime(100);
        setMessage(message);
        setBarDuration(30);
        setBoxType(color == "green" || color == true ? style.message_box_green : style.message_box_red);

        setTimeout(() => {
            messageBoxHide();
        }, 30000);
    }

    const messageBoxHide = async () => {
        setOpacity(0);
        setMarginTop(-20);

        setBarDuration(0);
        await new Promise((resolve) => setTimeout(resolve, 100));
        setBarTime(0);
    }
    
    link_messageBoxShow = messageBoxShow;

    return(
        <div className={`${style.message_box_component_root} ${boxType}`}
            style={{
                opacity: opacity,
                marginTop: `${marginTop}px`,
            }}
        >
            <div className={style.message_box_component_main}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.05" height="14.048" viewBox="0 0 14.05 14.048"
                    className={style.close_button}
                    onClick={() => {messageBoxHide()}}
                >
                    <path d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z" fill="#d08080"/>
                </svg>
                <p>
                    {
                        message
                    }
                </p>
            </div>
            <div className={style.bar_main_container}>
                <div className={style.bar_time}
                    style={{
                        width: `${barTime}%`,
                        transitionDuration: `${barDuration}s`
                    }}
                />
            </div>
        </div>
    )
}

export default MessageBoxComponent;