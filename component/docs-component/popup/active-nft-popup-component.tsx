import style from '../../../styles/component/docs-component/popups/docs-popups-component-style.module.scss';
import ItemBlockComponent from '../../item-block-component/item-block-component';

const ActiveNFTPopupComponent = () => {
    return(
        <div className={style.docs_popup_component_root}>
            <div className={style.grey_info_block} style={{textAlign:"center"}}>
                Active NFTs
            </div>
            <div className={style.float_element} style={{margin:"50px 0px"}}>
                <ItemBlockComponent data={{
                    id: 2022,
                    current_owner: "",
                    original_owner: "",
                    creation_date: "",
                    nft_type: "active",
                    nft_traits: "A-pink-striped",
                    nft_hash: "LE",
                    nft_stars: "5",
                    nft_requirement: null,
                    status: null,
                    market_info: null
                }} hover={false}/>
            </div>
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px", marginTop:"20px"}}>
                Active NFTs are one of the two NFT categories in Clettr along with <a href="">Passive NFTs</a>. Active NFTs are also called Letters, and is the most unstable in terms of prices among the two as the price of Passive NFTs is constant. From its name, Active NFTs can only be used actively to be able to earn unlike its counter part which can earn passively, Active NFTs can only not be shared. The value of a Active NFT can also go up depending on the demand for its hash or traits, and can resold in the marketplace.
            </p>
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px", marginTop:"20px"}}>
                Active NFTs has multiple traits compared to Passive NFTs these are patterns, colors, letters, and stars. These traits would need to match the requirement of a node for it to be able to be partnered with it. Active NFTs can also be forged for requirements or for more rewards, as the more stars an Active NFT has it add a little bit more rewards per round.
            </p>
            <div style={{display:"flex", alignItems:"center", marginTop:"20px", width:"100%", gap:"15px", maxWidth:"1000px"}}>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        1 Star
                    </p>
                    <p style={{display:"flex", alignItems:"center"}}>
                        +x0
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        2 Stars
                    </p>
                    <p>
                        +x0.02
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        3 Stars
                    </p>
                    <p>
                        +x0.044
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        4 Stars
                    </p>
                    <p>
                        +x0.07
                    </p>
                </div>
                <div className={style.grey_info_block} style={{display:"flex", justifyContent:"space-between"}}>
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        5 Stars
                    </p>
                    <p>
                        +x0.09
                    </p>
                </div>
            </div>
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px", marginTop:"20px"}}>
            Unlike Passive NFTs, Active NFTs only have 2 hashes so it would need 5 more partners called a Set and this would be able to for a hash of 10 characters allowing players to play the game.
            </p>
            <div style={{marginTop:"50px", marginBottom:"200px"}}>
                <div style={{display:"flex", alignItems:"center", gap:"15px"}}>
                    {
                        (() => {
                            let arr_item_blocks: any = [];
                            let dummy_data: any = [
                                ["E", "LK"],
                                ["T", "EI"],
                                ["T", "NK"],
                                ["R", "I0"],
                                ["S", "22"]
                            ]
                            for(let i = 0; i < 5; i++){
                                arr_item_blocks.push(<ItemBlockComponent
                                    data={{
                                        id: i + 1,
                                        current_owner: "",
                                        original_owner: "",
                                        creation_date: "",
                                        nft_type: "active",
                                        nft_traits: `${dummy_data[i][0]}-pink-striped`,
                                        nft_hash: dummy_data[i][1],
                                        nft_stars: "5",
                                        nft_requirement: null,
                                        status: null,
                                        market_info: null
                                    }} hover={false}
                                />)
                            }

                            return arr_item_blocks;
                        })()
                    }
                </div>
                <div className={style.light_black_info_block}
                    style={{display:"flex", justifyContent:"space-between", marginTop:"15px"}}
                >
                    <p style={{color:"rgba(255, 255, 255, 0.5)"}}>
                        Set Hash
                    </p>
                    <p>
                        A8HHJ44VBN
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ActiveNFTPopupComponent;