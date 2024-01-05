import style from '../../../styles/component/popup-component/popup-content-style.module.scss';
import ItemBlockComponent from '../../item-block-component/item-block-component';
import { closePopup } from '../../popup-component/popup-container-component';

const LetterCheckInventoryPopupComponent = () => {
    return(
        <div className={`${style.popup_content_root}`} style={{width:"auto"}}>
            <div style={{width:"100%", marginBottom:"10px"}} onClick={() => closePopup()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.05" height="14.048" viewBox="0 0 14.05 14.048"
                    className={style.close_button}
                >
                    <path d="M7.025,9.214,2.19,14.048,0,11.858,4.835,7.024,0,2.19,2.19,0,7.025,4.835,11.86,0l2.19,2.19L9.215,7.025l4.834,4.834-2.189,2.19Z" fill="#d08080"/>
                </svg>
            </div>
            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>
                Inventory
            </p>
            <div className={style.line} style={{margin:"20px 0px"}}></div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", gap:"15px"}}>
                <ItemBlockComponent type={"letter"} hover={false}/>
                <ItemBlockComponent type={"letter"} hover={false}/>
                <ItemBlockComponent type={"letter"} hover={false}/>
                <ItemBlockComponent type={"letter"} hover={false}/>
                <ItemBlockComponent type={"letter"} hover={false}/>
            </div>
            <div className={style.line} style={{margin:"20px 0px"}}/>
            <div style={{display:"flex", gap:"15px"}}>
                <div className={style.grey_info_block}
                    style={{display:"flex", justifyContent:"space-between"}}
                >
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Hash
                    </p>
                    <p>
                        A8HHJ44VBN
                    </p>
                </div>
                <div className={style.grey_info_block}
                    style={{display:"flex", justifyContent:"space-between"}}
                >
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Total Boost
                    </p>
                    <p>
                        x108
                    </p>
                </div>
            </div>
            <div className={`${style.grey_button} ${style.colored_button}`}
                style={{marginTop:"15px"}}
            >
                Change Set
            </div>
        </div>
    )
}

export default LetterCheckInventoryPopupComponent;