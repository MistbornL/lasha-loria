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
    cart: [],
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
      if (state.cart.length === 0) {
        state.cart.push({ ...action.payload, count: 1 });
      } else {
        state.cart.map((item) => {
          if (item.name === action.payload.name) {
            item.count += 1;
          } else {
            state.cart.push({ ...action.payload, count: 1 });
          }
          return item;
        });
      }
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
