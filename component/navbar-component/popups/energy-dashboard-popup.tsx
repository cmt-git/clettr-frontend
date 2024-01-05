import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../scripts/redux/rootReducer";
import style from "../../../styles/component/navbar-component/popup/energy-dashboard-popup.module.scss";

const EnergyDashboardPopup = () => {

    const[currentTime, setCurrentTime]: any = useState(new Date().getTime());

    const queryState = useSelector((state: RootState) => {
        return state.queryState.value
    });

    const getFormattedTime = (time: any) => {
        let date = new Date(time);
        let currentHour = (24 - date.getHours());
        let hours = currentHour.toString().length === 1 ? "0" + currentHour : currentHour;
        let minutes = "0" + (60 - date.getMinutes());
        let seconds = "0" + (60 - date.getSeconds());
        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime;
    }

    useEffect(() => {
        setTimeout(() => {
            const formattedTime = getFormattedTime(currentTime);
            if(formattedTime == "00:00:00"){
                setCurrentTime(new Date().getTime());
            }
            else {
                setCurrentTime(currentTime + 1000);
            }
        }, 1000)
    }, [currentTime]);

    //! PLEASE ANY CHANGES MADE WITH ENERGY LIMIT MUST BE SYNCED WITH BACKED
    return(
        <div className={style.energy_dashboard_popup_root}>
            <div className={style.energy_dashboard_main}>
                <div className={style.energy_container}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 40.546 58.389"
                        style={{width:"10px"}}
                    >
                        <g data-name="Group 6" transform="translate(0 58.389)">
                            <path d="M25.073-58.389,0-23.127l17.52.188L15.473,0,40.546-35.367H23.025Z" fill="#ffac05" fill-rule="evenodd"/>
                        </g>
                    </svg>
                    <p style={{marginRight:"10px"}}>
                        {queryState.user_info.current_energy}/{queryState.user_info.max_energy}
                    </p>
                    <p style={{opacity:"0.5", width:"130px", textAlign:"left"}}>
                        Resets in {getFormattedTime(currentTime)}
                    </p>
                </div>
                <div className={style.line}/>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                    Energy resets at 12:00 PM GMT+8 everyday. Energy limit can be increased based on how many <span className={style.link_hover} style={{color:"white"}}>Active</span> NFTs you own.
                </p>
                <div className={style.energy_limit_container}>
                    <div className={style.energy_limit_info_container}>
                        <div className={style.left_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 40.546 58.389"
                                style={{width:"10px"}}
                            >
                                <g data-name="Group 6" transform="translate(0 58.389)">
                                    <path d="M25.073-58.389,0-23.127l17.52.188L15.473,0,40.546-35.367H23.025Z" fill="#ffac05" fill-rule="evenodd"/>
                                </g>
                            </svg>
                            <p style={{marginRight:"10px"}}>
                                3 Max
                            </p>
                        </div>
                        <p className={style.right_container}>
                            Below 20 Active NFTs
                        </p>
                    </div>
                    <div className={style.energy_limit_info_container}>
                        <div className={style.left_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 40.546 58.389"
                                style={{width:"10px"}}
                            >
                                <g data-name="Group 6" transform="translate(0 58.389)">
                                    <path d="M25.073-58.389,0-23.127l17.52.188L15.473,0,40.546-35.367H23.025Z" fill="#ffac05" fill-rule="evenodd"/>
                                </g>
                            </svg>
                            <p style={{marginRight:"10px"}}>
                                5 Max
                            </p>
                        </div>
                        <p className={style.right_container}>
                            Above 20 Active NFTs
                        </p>
                    </div>
                    <div className={style.energy_limit_info_container}>
                        <div className={style.left_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 40.546 58.389"
                                style={{width:"10px"}}
                            >
                                <g data-name="Group 6" transform="translate(0 58.389)">
                                    <path d="M25.073-58.389,0-23.127l17.52.188L15.473,0,40.546-35.367H23.025Z" fill="#ffac05" fill-rule="evenodd"/>
                                </g>
                            </svg>
                            <p style={{marginRight:"10px"}}>
                                8 Max
                            </p>
                        </div>
                        <p className={style.right_container}>
                            Above 40 Active NFTs
                        </p>
                    </div>
                    <div className={style.energy_limit_info_container}>
                        <div className={style.left_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 40.546 58.389"
                                style={{width:"10px"}}
                            >
                                <g data-name="Group 6" transform="translate(0 58.389)">
                                    <path d="M25.073-58.389,0-23.127l17.52.188L15.473,0,40.546-35.367H23.025Z" fill="#ffac05" fill-rule="evenodd"/>
                                </g>
                            </svg>
                            <p style={{marginRight:"10px"}}>
                                12 Max
                            </p>
                        </div>
                        <p className={style.right_container}>
                            Above 65 Active NFTs
                        </p>
                    </div>
                    <div className={style.energy_limit_info_container} style={{marginBottom:"0px"}}>
                        <div className={style.left_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 40.546 58.389"
                                style={{width:"10px"}}
                            >
                                <g data-name="Group 6" transform="translate(0 58.389)">
                                    <path d="M25.073-58.389,0-23.127l17.52.188L15.473,0,40.546-35.367H23.025Z" fill="#ffac05" fill-rule="evenodd"/>
                                </g>
                            </svg>
                            <p style={{marginRight:"10px"}}>
                                15 Max
                            </p>
                        </div>
                        <p className={style.right_container}>
                            Above 80 Active NFTs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnergyDashboardPopup;