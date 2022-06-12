import { STORE_QUERRY } from "./type";
import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: {},
    // toggleCurrency: false
  },
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { storeData } = storeSlice.actions;
export default storeSlice;
