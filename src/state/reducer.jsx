import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: { categories: [], currencies: [] },
    categories: [],
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
    currencies: [],
  },
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload;
    },
    storeCategories: (state, action) => {
      state.categories = state.categories = action.payload.map((item) => ({
        ...item,
        isSelected: false,
      }));
    },
    storeProduct: (state, action) => {
      state.product = action.payload;
    },
    storeToCart: (state, action) => {
      state.cart = action.payload;
    },

    setName: (state, action) => {
      state.name = action.payload;
    },
    storeCurrencies: (state, action) => {
      state.currencies = action.payload.map((item) => ({
        ...item,
        isSelected: false,
      }));
    },
  },
});
export const {
  storeData,
  storeCategories,
  storeProduct,
  storeToCart,
  setName,
  storeCurrencies,
} = storeSlice.actions;
export default storeSlice;
