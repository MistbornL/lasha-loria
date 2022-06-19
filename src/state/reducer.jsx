import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: { categories: [], currencies: [] },
    categories: { name: "", product: [] },
    product: {
      id: "",
      name: "",
      inStock: undefined,
      gallery: [],
      description: "",
      category: "",
      attributes: [],
      prices: [],
      brand: "",
    },
    cart: {},
    name: "all",
    selectAll: false,
    selectTech: false,
    selectCloth: false,
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
    storeToCart: (state, action) => {
      state.cart = action.payload;
    },
    setSelectAll: (state) => {
      state.selectAll = true;
      state.selectCloth = false;
      state.selectTech = false;
    },
    setSelectTech: (state) => {
      state.selectAll = false;
      state.selectCloth = false;
      state.selectTech = true;
    },
    setSelectCloth: (state) => {
      state.selectAll = false;
      state.selectCloth = true;
      state.selectTech = false;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const {
  storeData,
  storeCategories,
  storeProduct,
  storeToCart,
  setSelectAll,
  setSelectTech,
  setSelectCloth,
  setName,
} = storeSlice.actions;
export default storeSlice;
