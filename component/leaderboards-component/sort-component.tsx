import style from '../../styles/component/leaderboards-components/sort-component.module.scss'

const SortComponent = () => {
    return(
        <div>
            <form>
                <select className={style.sort_component_main}>
                    <option>Sorted by Total Gains</option>
                    <option>Sorted by ...</option>
                    <option>Sorted by ...</option>
                </select>
            </form>
        </div>
    )
}

export default SortComponent