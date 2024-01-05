import style from '../../../styles/component/popup-component/popup-content-style.module.scss';
import InventoryBlockComponent from '../../inventory-component/inventory-block-component';
import { backPopup, closePopup } from "../../popup-component/popup-container-component";

const InventoryPopupComponent = (props: any) => {
    return(
        <div className={style.popup_content_root} style={{width:"100vw", maxWidth:"1000px"}}>
            <div style={{width:"100%", marginBottom:"10px"}} onClick={() => backPopup()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.971" height="26.416" viewBox="0 0 16.971 26.416"
                    className={style.close_button}
                    style={{width:"10px"}}
                >
                    <g transform="translate(0 26.416)">
                        <path d="M13.237-26.416,0-13.179,3.734-9.445,16.971-22.682Z" fill="#d08080" fill-rule="evenodd"/>
                        <path d="M13.237,0,0-13.237l3.734-3.734L16.971-3.734Z" fill="#d08080" fill-rule="evenodd"/>
                    </g>
                </svg>
            </div>
            <p style={{width:"100%", textAlign:"center", fontSize:"15px"}}>
            Inventory
            </p>
            <div className={style.line} style={{margin:"20px 0px"}}/>
            <InventoryBlockComponent popup={true} add_index={props.add_index} not_user={props.not_user}/>
        </div>
    )
}

export default InventoryPopupComponent;