import { STORE_QUERRY } from "./type";
import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: {},
    categories: {},
    // toggleCurrency: false
  },
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload;
    },
    storeCattegories: (state, action) => {
      state.categories = action.payload;
    },
  },
});
export const { storeData, storeCattegories } = storeSlice.actions;
export default storeSlice;
