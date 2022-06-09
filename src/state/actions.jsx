import { RENDER_POPUP } from "./types";

export const storeCurrency = (currency) => ({
  type: RENDER_POPUP,
  payload: {
    currency,
  },
});
