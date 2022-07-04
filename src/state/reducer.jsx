import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: { categories: [], currencies: [] },
    categories: [],
    selectedCurrencies: "$",
    product: [],
    cart: [],
    uniqueCart: [],
    name: "all",
    currencies: [],
    selectedSize: "",
    selectedColor: "",
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
      state.product = action.payload.map((item) => ({
        ...item,
        selectedSize: "",
      }));
    },
    storeToCart: (state, action) => {
      if (state.cart.length === 0 && action.payload.inStock !== false) {
        state.cart.push({ ...action.payload, count: 1 });
      } else if (action.payload.inStock === false) {
        alert("Product Is Out Of Stack");
      } else {
        state.cart.map((item) => {
          if (item.name === action.payload.name) {
            item.count += 1;
          }
          if (item.name !== action.payload.name) {
            state.cart.push({ ...action.payload, count: 1 });
            state.cart = [
              ...state.cart
                .reduce((map, obj) => map.set(obj.id, obj), new Map())
                .values(),
            ];
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
    setSelectedCurrencies: (state, action) => {
      state.selectedCurrencies = action.payload;
    },
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
      //   state.procuct.map((item) => {
      //     if (item.name === action.payload.name) {
      //       return { ...action.payload, selectedSize: size };
      //     }
      //   });
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});
export const {
  setSelectedSize,
  setSelectedColor,
  setSelectedCurrencies,
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
