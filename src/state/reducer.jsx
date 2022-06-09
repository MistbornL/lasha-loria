import { GET_CURR } from "./type";

const initialState = {
  currency: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURR:
      return {
        ...state,
        currency: action.payload.currency,
      };
    default:
      return state;
  }
};
export default reducer;
