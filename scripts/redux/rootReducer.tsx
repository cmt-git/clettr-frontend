import { combineReducers } from "redux";
import { addItemFilterReducer, addItemIndexReducer, addItemTypeReducer, currentCurrencyReducer, currentEttrContractAddressReducer, currentWalletAccountIndexReducer, loggedStateReducer, playStateReducer, queryStateReducer, tickerPriceReducer } from "./reducers/misc-reducer";

const rootReducers = combineReducers({
    queryState: queryStateReducer,
    loggedState: loggedStateReducer,
    tickerPriceState: tickerPriceReducer,
    currentCurrencyState: currentCurrencyReducer,
    addItemIndexState: addItemIndexReducer,
    addItemTypeState: addItemTypeReducer,
    addItemFilterState: addItemFilterReducer,
    playState: playStateReducer,
    currentWalletAccountIndexState: currentWalletAccountIndexReducer,
    currentEttrContractAddressState: currentEttrContractAddressReducer,
});

export type RootState = ReturnType<typeof rootReducers>

export default rootReducers;