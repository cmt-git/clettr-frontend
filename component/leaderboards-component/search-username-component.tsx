import style from '../../styles/component/leaderboards-components/search-username-component.module.scss';

const SearchUsernameComponent = () => {
    return(
        <div>
            <form>
                <input className={style.search_hash_component_main} type="text" placeholder="🔍 Search Username"></input>
            </form>
        </div>
    )
}

export default SearchUsernameComponent