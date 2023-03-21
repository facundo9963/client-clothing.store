import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";

export const store = configureStore({
  reducer: { product: productReducer },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
