import { STORE_QUERRY } from "./type";

const initialState = {
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_QUERRY:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};
export default reducer;
