import { GET_CURR, TOGGLE_CLICK } from "./type";

const initialState = {
  currencies: [],
  click: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURR:
      return {
        ...state,
        currencies: action.payload.currencies,
      };
    case TOGGLE_CLICK:
      return {
        ...state,
        click: action.payload.click,
      };
    default:
      return state;
  }
};
export default reducer;
