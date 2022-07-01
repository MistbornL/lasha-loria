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
      state.categories = action.payload.map((item) => ({
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
            console.log("ah");
            state.cart.push({ ...action.payload, count: 1 });
            state.cart = [...new Set(state.cart)];
          }
          return item;
        });
      }
    },
    increment: (state, action) => {
      state.cart.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, count: (item.count += 1) };
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.cart.map((item) => {
        if (item.count === 0) {
          return (state.cart = state.cart.filter(
            (data) => data.name !== action.payload.name
          ));
        } else if (item.name === action.payload.name) {
          if (item.count !== 0) {
            return { ...item, count: (item.count -= 1) };
          }
        }
        return item;
      });
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
  increment,
  decrement,
} = storeSlice.actions;
export default storeSlice;
