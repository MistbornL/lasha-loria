import { configureStore } from "@reduxjs/toolkit";
import { storeSlice } from "./state/reducer";

export default configureStore({
  reducer: {
    store: storeSlice.reducer,
  },
});
