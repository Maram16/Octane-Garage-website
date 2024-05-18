import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 
const initialState = {
  items: [],
  status: null,
};
 
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        "https://octane-garage-website.onrender.com/products"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Re-throw the error to handle it in the component or another middleware
    }
  }
);
 
 
 
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});
 
export default productsSlice.reducer;
