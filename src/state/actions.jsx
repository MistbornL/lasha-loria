import { STORE_QUERRY } from "./type";

export const storeQuerry = (data) => ({
  type: STORE_QUERRY,
  payload: {
    data: data,
  },
});
