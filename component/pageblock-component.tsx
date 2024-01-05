import { useEffect, useState } from 'react';
import { store } from '../pages/_app';
import getScreenWidth from '../scripts/misc/getScreenWidth';
import style from '../styles/component/pageblock-component-style.module.scss';

const PageBlockComponent = (props: any) => {
    
    let offset = ["settings"].includes(props.cut) ? 0.3 : 1
    const _width = getScreenWidth() * offset;
    const[pages, setPages]: any = useState(null);
    const[currentPage, setCurrentPage]: any = useState(1);

    //? avoid errors on start
    const[Initialized, setInitialized]: any = useState(null);

    const getPagesValues = () => {
        let index = 1;
        let threshold = 0;

        for(let i = 0; i < 30; i++){
            if (_width + 100 > 60 * i + 1 && threshold < i){
                threshold = i;
            }
        }

        if (threshold != 29){
            threshold -= 1;
        }

        while((index + threshold <= currentPage) && threshold != 0){
            index += threshold
        }

        let loopVal = index - 1;

        // -> _width == 0 to fix delay in getting state value
        if (currentPage <= threshold || _width == 0){
            loopVal += 1;
        }

        let arr = []
        for(let i = loopVal; i < index + 30; i++){
            arr.push(i);
        }
        setPages(arr);

        if (Initialized == true){
            if (store.getState().addItemFilterState.value == null){
                props.query({variables: {page: currentPage}});
            }
            else{
                props.query({variables: {page: currentPage, filters: store.getState().addItemFilterState.value}});
            } 
        }
        else {
            setInitialized(true);
        }   
    }

    useEffect(() => {
        getPagesValues();
    }, [currentPage])

    return(
        <div className={`${style.page_block_component_root} ${style.light_grey_info_block}`} style={{marginTop:"30px"}}>
            <p style={{marginLeft:"10px", fontSize:"13px"}}>
                Page
            </p>
            <div className={style.numbers_body} style={{width:"100%", display:"flex"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21"
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    <path d="M9.636,1.481a1,1,0,0,1,1.728,0L20.123,16.5a1,1,0,0,1-.864,1.5H1.741a1,1,0,0,1-.864-1.5Z" transform="translate(0 21) rotate(-90)" fill="#fff"/>
                </svg>
                <div style={{display:"flex"}}>
                    {
                        pages != null ?
                            pages.map((value: any, index: any) => {
                                return <p className={currentPage != value ? style.unselected : style.null} style={{
                                    // -> needs to be synced with getPagesValue
                                    visibility: _width + 100 < 60 * index + 1 ? "hidden":"visible", 
                                    position: _width + 100 < 60 * index + 1 ? "absolute": "relative"
                                }}
                                    onClick={() => setCurrentPage(value)}
                                >
                                    {
                                        value
                                    }
                                </p>;
                            })
                        :
                            null
                    }
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21"
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    <path d="M9.636,1.481a1,1,0,0,1,1.728,0L20.123,16.5a1,1,0,0,1-.864,1.5H1.741a1,1,0,0,1-.864-1.5Z" transform="translate(18) rotate(90)" fill="#fff"/>
                </svg>
            </div>
        </div>
    )
}

export default PageBlockComponent;