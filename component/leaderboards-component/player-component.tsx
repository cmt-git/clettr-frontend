import style from '../../styles/component/leaderboards-components/player-component.module.scss'

const PlayerComponent = () => {
    const ItemBlock = () => {
        return(
            <div className={style.player_component_main}>
                <div className={style.header}>
                    <p className={style.text}>
                        <span className={style.rank}>#1</span> &ensp; 
                        <span className={style.white}>Player </span> 123897GHgsd- 
                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;
                        <span className={style.white}>456,343 </span>Total Gains
                    </p>
                    
                    <div className={style.box}>
                        <p className={style.text}>Active NFTs</p>
                        <p className={style.white}>&nbsp; 89,232</p>
                    </div>    

                    <div className={style.box}>
                        <p className={style.text}>Passive NFTs</p>
                        <p className={style.white}>&nbsp; 89,232</p>
                    </div> 

                    <div className={style.box}>
                        <p className={style.text}>Rounds Played</p>
                        <p className={style.white}>&nbsp; 432</p>
                    </div> 

                    <div className={style.box}>
                        <p className={style.text}>Joined</p>
                        <p className={style.white}>&nbsp; 10/23/2022</p>
                    </div>

                    <div className={style.selectBox}>
                        <p className={style.name}>Profile</p>
                    </div>

                    <div className={style.selectBox}>
                    <p className={style.name}>Marketplace</p>
                    </div>                
                </div>

            </div>
        )
    }
    return(
        <div className={style.player_component_root}>
            {
                (() => {
                    let Item_blocks: any = [];
                        
                    for(let i = 0; i < 12; i++){
                        Item_blocks.push(ItemBlock());
                    }
                    return(Item_blocks);
                })()
            }
        </div>
    )
}

export default PlayerComponent