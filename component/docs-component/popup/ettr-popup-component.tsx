import style from '../../../styles/component/docs-component/popups/docs-popups-component-style.module.scss';
import WelcomeBlockComponent from '../../index-component/welcome-block-component';
import ItemBlockComponent from '../../item-block-component/item-block-component';

const EttrPopupComponent = () => {
    return(
        <div className={style.docs_popup_component_root}>
            <div className={style.grey_info_block} style={{textAlign:"center"}}>
                Ettr
            </div>
            <div style={{display:"flex", alignItems:"center", marginTop:"50px", marginBottom:"-35px"}}>
                <img src="./images/svgs/clettr-token.svg" alt="clettr-logo" style={{width:"50px"}}/>
                <p style={{marginLeft:"10px", fontSize:"25px"}}>
                    Ettr
                </p>
            </div>
            <div className={style.float_element} style={{margin:"50px 0px"}}>
                <WelcomeBlockComponent priceonly={true}/>
            </div>
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px", marginTop:"20px"}}>
                Ettr is the token used by Clettr. It is minted by rewards after gameplay. Its price, like any other cryptocurrency revolves around its demand. Its supply and demand is heavily affected by the <span>Random Hash System</span> and by Clettr's forging system and marketplace. Ettr is exclusively used on Clettr.
            </p>
        </div>
    )
}

export default EttrPopupComponent;