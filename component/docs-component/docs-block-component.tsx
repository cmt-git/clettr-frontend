import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from '../../styles/component/docs-component/docs-block-component-style.module.scss';
import ActiveNFTPopupComponent from './popup/active-nft-popup-component';
import ConceptPopupComponent from './popup/concept-popup-component';
import EttrPopupComponent from './popup/ettr-popup-component';
import ForgeInfoPopupComponent from './popup/forge-info-popup-component';
import PassiveNFTPopupComponent from './popup/passive-nft-popup-component';

const DocsBlockComponent = () => {

    const[docsIndex, setDocsIndex]: any = useState(1);

    const router = useRouter();
    useEffect(() => {
        if (router.asPath.toString().split('?').length - 1 > 0){
            const current_index = router.asPath.toString().split('?')[1];
            setDocsIndex(
                current_index === "passive" ? 
                    2
                :
                current_index === "active" ?
                    3 
                :
                current_index === "ettr" ? 
                    4
                :
                current_index === "forge" ? 
                    5
                :
                    1
            )
        }
    }, [])
    return(
        <div className={style.docs_block_component_root}>
            <div className={style.docs_dashboard}>
                <div className={style.dbc_logo_container}>
                    <img src="./images/svgs/clettr-logo.svg" alt="clettr-logo" 
                        className={style.dbc_logo}
                    />
                    <p>
                        Docs
                    </p>
                </div>
                <div className={style.line}/>
                <div className={style.dbc_buttob_container}>
                    <div className={docsIndex == 1 ? style.docs_button_selected : style.docs_button}
                        onClick={() => setDocsIndex(1)}
                    >
                        <div/>
                        <p>
                            Concept
                        </p>
                    </div>
                    <div className={docsIndex == 2 ? style.docs_button_selected : style.docs_button}
                        onClick={() => setDocsIndex(2)}
                    >
                        <div/>
                        <p>
                            Passive NFTs
                        </p>
                    </div>
                    <div className={docsIndex == 3 ? style.docs_button_selected : style.docs_button}
                        onClick={() => setDocsIndex(3)}
                    >
                        <div/>
                        <p>
                            Active NFTs
                        </p>
                    </div>
                    <div className={docsIndex == 4 ? style.docs_button_selected : style.docs_button}
                        onClick={() => setDocsIndex(4)}
                    >
                        <div/>
                        <p>
                            Ettr
                        </p>
                    </div>
                    <div className={docsIndex == 5 ? style.docs_button_selected : style.docs_button}
                        onClick={() => setDocsIndex(5)}
                    >
                        <div/>
                        <p>
                            Forging
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.docs_main}
            >
                {
                    docsIndex == 1 ?
                        <ConceptPopupComponent/>
                    :
                    docsIndex == 2 ?
                        <PassiveNFTPopupComponent/>
                    :
                    docsIndex == 3 ?
                        <ActiveNFTPopupComponent/>
                    :
                    docsIndex == 4 ?
                        <EttrPopupComponent/>
                    :
                    docsIndex == 5 ?
                        <ForgeInfoPopupComponent/>
                    :
                        null
                }
            </div>  
        </div>
    )
}

export default DocsBlockComponent;