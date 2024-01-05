export const queryStateReducer = (state = { value: "" }, action: any) => {
  switch (action.type) {
    case "queryStateReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};

export const loggedStateReducer = (state = { value: false }, action: any) => {
  switch (action.type) {
    case "edit/loggedStateReducer/LOGGED_IN":
      return { value: true };
    case "edit/loggedStateReducer/LOGGED_OUT":
      return { value: false };
    default:
      return state;
  }
};

export const tickerPriceReducer = (state = { value: 0 }, action: any) => {
  switch (action.type) {
    case "edit/tickerPriceReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};

export const currentCurrencyReducer = (
  state = { value: "usd" },
  action: any
) => {
  switch (action.type) {
    case "edit/currentCurrencyReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};

export const addItemFilterReducer = (state = { value: null }, action: any) => {
  switch (action.type) {
    case "edit/addItemFilterReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};

export const addItemTypeReducer = (state = { value: null }, action: any) => {
  switch (action.type) {
    case "edit/addItemTypeReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};

export const addItemIndexReducer = (state = { value: null }, action: any) => {
  switch (action.type) {
    case "edit/addItemIndexReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};

export const playStateReducer = (state = { value: null }, action: any) => {
  switch (action.type) {
    case "edit/playStateReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};

export const currentWalletAccountIndexReducer = (
  state = { value: 2 },
  action: any
) => {
  switch (action.type) {
    case "edit/currentWalletAccountIndexReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};

export const currentEttrContractAddressReducer = (
  state = { value: "0x5d61FbD4b4314C997C1f353f3A5174493656acE1" },
  action: any
) => {
  switch (action.type) {
    case "edit/currentEttrContractAddressReducer/SET":
      return { value: action.value };
    default:
      return state;
  }
};
