import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAll: async (state) => {
      let allProducts = await axios.get(`http://localhost:3000/products`);
      state.products = allProducts;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAll } = productSlice.actions;

export default productSlice.reducer;
