import style from '../../../styles/component/docs-component/popups/docs-popups-component-style.module.scss';
import ItemBlockComponent from '../../item-block-component/item-block-component';

const PassiveNFTPopupComponent = () => {
    return(
        <div className={style.docs_popup_component_root}>
            <div className={style.grey_info_block} style={{textAlign:"center"}}>
                Passive NFT
            </div>
            <div className={style.float_element} style={{margin:"50px 0px"}}>
                <ItemBlockComponent data={{
                    id: 12,
                    current_owner: "",
                    original_owner: "",
                    creation_date: "",
                    nft_type: "passive",
                    nft_traits: "pink",
                    nft_hash: "220K1KENIL",
                    nft_stars: "5",
                    nft_requirement: "pink",
                    status: null,
                    market_info: null
                }} hover={false}/>
            </div>
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px", marginTop:"20px"}}>
                Passive NFTs are one of the two NFT categories in Clettr along with <a href="">Active NFTs</a>. Passive NFTs are also called Nodes, and is the cheaper one between the two NFT categories, its price is at a constant price of <span>4.99 USDC</span>. Passive NFTs from its name will earn its user income passively, as Passive NFTs can be shared with the community, allowing it to be used by them once per week. Passive NFTs are one of the two requirements to be able to play and earn rewards. The value of a Passive NFT can also go up depending on the demand for its hash, and can resold in the marketplace.
            </p>
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px", marginTop:"20px"}}>
                Passive NFTs also have requirements, which simply means for it be partnered with Active NFTs it must meet its requirement. For example if a Passive NFT has a requirement of 3 Stars, and Striped only Active NFTs with the same traits can be partnered with it. Passive NFTs can also be forged, and the more stars a Passive NFT has, the more rewards it will be able to give per round.
            </p>
            <div style={{display:"flex", alignItems:"center", marginTop:"20px", width:"100%", gap:"15px", maxWidth:"1000px"}}>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        1 Star
                    </p>
                    <p style={{display:"flex", alignItems:"center"}}>
                        0.1 Ettr
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        2 Stars
                    </p>
                    <p>
                        0.2 Ettr
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        3 Stars
                    </p>
                    <p>
                        0.35 Ettr
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        4 Stars
                    </p>
                    <p>
                        0.4 Ettr
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        5 Stars
                    </p>
                    <p>
                        0.5 Ettr
                    </p>
                </div>
            </div>
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px", marginTop:"20px"}}>
                Passive NFTs also have its own traits, like colors. This colors can be used to predict the starting letter of the words that are going to need to be cracked during gameplay. However it can only predict 4 Letters as the other Letter is Randomed.
            </p>
            <div style={{display:"flex", alignItems:"center", marginTop:"20px", width:"100%", gap:"15px", maxWidth:"1000px"}}>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Pink
                    </p>
                    <p style={{display:"flex", alignItems:"center"}}>
                        A  B  C  D
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Purple
                    </p>
                    <p>
                        D  E  F  G
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Blue
                    </p>
                    <p>
                        G  H  I  J
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Teal
                    </p>
                    <p>
                        J  K  L  M
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Lime
                    </p>
                    <p>
                        M  N  O  P
                    </p>
                </div>
            </div>
            <div style={{display:"flex", alignItems:"center", marginTop:"20px", width:"100%", gap:"15px", maxWidth:"1000px", marginBottom:"200px"}}>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Green
                    </p>
                    <p style={{display:"flex", alignItems:"center"}}>
                        P  Q  R  S
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Yellow
                    </p>
                    <p>
                        S  T  U  V
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Orange
                    </p>
                    <p>
                        V  W  X  Y
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Red
                    </p>
                    <p>
                        Y  Z  A  B
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PassiveNFTPopupComponent;