import { useSelector } from 'react-redux';
import { RootState } from '../../../scripts/redux/rootReducer';
import style from '../../../styles/component/index-components/weekly-hashes-component.module.scss';
import { link_messageBoxShow } from "../../messagebox-component/messagebox-component";

const HashBoxComponent = (props: any) => {

    const queryState = useSelector((state: RootState) => {
        return state.queryState.value
    });

    return(
        <div className={style.hash_box}
            onClick={() => {
                link_messageBoxShow("Hash has been copied in clipboard!", true)
            }}
        >
            {
                queryState.misc[props.type == "active" ? "active_hashes" : "passive_hashes"][props.index]
            }
        </div>
    )
}

export default HashBoxComponent;