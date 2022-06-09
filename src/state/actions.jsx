import { GET_CURR, TOGGLE_CLICK } from "./type";

export const storeCurrency = (currencies) => ({
  type: GET_CURR,
  payload: {
    currencies: currencies,
  },
});

export const toggleClick = (click) => ({
  type: TOGGLE_CLICK,
  payload: {
    click,
  },
});
