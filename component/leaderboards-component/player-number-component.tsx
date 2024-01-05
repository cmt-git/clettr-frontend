import style from '../../styles/component/leaderboards-components/player-number-component.module.scss';

const PlayerNumberComponent = () => {
    return (
        <div className={style.player_number_component_main}>
            <p className={style.community}>Players</p>
            <p className={style.players_number}>98,323</p>
            <p className={style.players}>Players</p> 
        </div>
    )
}

export default PlayerNumberComponent