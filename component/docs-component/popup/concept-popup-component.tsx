import style from '../../../styles/component/docs-component/popups/docs-popups-component-style.module.scss';
import ItemBlockComponent from '../../item-block-component/item-block-component';

const ConceptPopupComponent = () => {
    return(
        <div className={style.docs_popup_component_root}>
            <div className={style.grey_info_block} style={{textAlign:"center"}}>
                Concept
            </div>
            <div style={{display:"flex", margin:"50px 0px"}}>
                <img src="./images/svgs/clettr-logo.svg" alt="clettr-logo" 
                    style={{width:"50px"}}
                />
                <img src="./images/svgs/clettr-word-logo.svg" alt="clettr-word-logo" 
                    style={{width:"70px", marginLeft:"5px"}}
                />
            </div>
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px"}}>
                Clettr is a crypto game that uses <a href={"https://www.binance.org/en"}>Binance's Binance Smart Chain or BSC</a>. Clettr is built around what we call a <span style={{color:"white"}}>Random Hash System</span>, Clettr's gameplay mechanics revolves around this system. A Random Hash System simply encourages demand for the token, to boost its demand and supply allowing the token's price to be stable.
            </p>
            <p style={{color:"rgba(255, 255, 255, 0.5)", marginTop:"20px", lineHeight:"25px"}}>
                The Random Hash System does its magic by generating a weekly hash per week seperated into two categories, a weekly hash for <a href="">Passive</a> and <a href="">Active</a> NFTs. These hashes are 10 characters long and will determine the prizes a player will receive when playing. For example a hash is generated for the Passive NFT category let's say it's 3AGGH9LO1W, now let's say a user has a Passive NFT with the same exact hash that would mean a perfect boost of <span className={style.yellow_text}>x50</span>. If a user wins 21 Ettr, it would be have a bonus of x50 making their total prize of 1,050. Each character that is the exact position as their counterpart hash is boosted by <span className={style.yellow_text}>x5</span> however if that is not case it would only have default values of 1x. 
            </p>
            <div className={style.float_element} style={{marginTop:"50px", marginBottom:"35px"}}>
                <ItemBlockComponent data={{
                    id: 0,
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
            <p style={{color:"rgba(255, 255, 255, 0.5)", marginTop:"20px", lineHeight:"25px"}}>
                Active NFTs uses the same reward system, however an Active NFT by itself only has 2 hash, that would a user would have to collect 5 more to create a Set and it creates a 10 character long hash.
            </p>
            <div style={{marginTop:"50px", marginBottom:"35px"}}>
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
            <p style={{color:"rgba(255, 255, 255, 0.5)", lineHeight:"25px", marginTop:"20px"}}>
                Clettr's gameplay is relatively simple, you need to form a set and choose a node then play, the server will calculate your set's winning chance against the words it has chosen based on the node you chose. On the initial rounds it will only choose words with short lengths, making your winrate high, however as the server progresses its calculation of words needed to be cracked gets longer and longer until your set can no longer go further. The server will then mint your rewards based on the final round, and total boost by both hashes, and stars.
            </p>
            <p style={{color:"rgba(255, 255, 255, 0.5)", marginTop:"20px", lineHeight:"25px", marginBottom:"200px"}}>
                To encourage further more demand with the game's token called <a href="">Ettr</a>. A <a href="">Forging</a> system is created to encourage burning of tokens. Forged items affects many attributes of the game giving more rewards to players. Ettr can also be used in the marketplace with 2% tax, though a player can choose to sell their assets with USDC with 10% tax. 
            </p>
        </div>
    )
}

export default ConceptPopupComponent;