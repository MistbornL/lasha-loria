import { STORE_QUERRY } from "./type";
import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: {},
    categories: {},
    product: {},
  },
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload;
    },
    storeCategories: (state, action) => {
      state.categories = { ...action.payload, isSelected: false };
    },
    storeProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { storeData, storeCategories, storeProduct } = storeSlice.actions;
export default storeSlice;
