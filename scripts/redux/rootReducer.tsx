import { combineReducers } from "redux";
import {
  addItemFilterReducer,
  addItemIndexReducer,
  addItemTypeReducer,
  colorThemeReducer,
  currentCurrencyReducer,
  currentEttrContractAddressReducer,
  currentSUSDCContractAddressReducer,
  currentWalletAccountReducer,
  loggedStateReducer,
  playStateReducer,
  queryStateReducer,
  tickerPriceReducer,
} from "./reducers/misc-reducer";

const rootReducers = combineReducers({
  queryState: queryStateReducer,
  loggedState: loggedStateReducer,
  tickerPriceState: tickerPriceReducer,
  currentCurrencyState: currentCurrencyReducer,
  addItemIndexState: addItemIndexReducer,
  addItemTypeState: addItemTypeReducer,
  addItemFilterState: addItemFilterReducer,
  playState: playStateReducer,
  currentWalletAccountState: currentWalletAccountReducer,
  currentEttrContractAddressState: currentEttrContractAddressReducer,
  currentSUSDCContractAddressState: currentSUSDCContractAddressReducer,
  colorThemeState: colorThemeReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
