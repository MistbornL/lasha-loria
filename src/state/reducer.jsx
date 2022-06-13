import { STORE_QUERRY } from "./type";
import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: {},
    categories: {},
  },
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload;
    },
    storeCategories: (state, action) => {
      state.categories = { ...action.payload, isSelected: false };
    },
  },
});
export const { storeData, storeCategories } = storeSlice.actions;
export default storeSlice;
