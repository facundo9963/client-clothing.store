import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  list: [],
  // skip: 0,
  // limit: 10,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts } = productSlice.actions;

export default productSlice.reducer;
