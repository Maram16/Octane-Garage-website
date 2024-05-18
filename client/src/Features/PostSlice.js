import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
// Assuming your data fields are called prodid, prodname, prodprice, prodimage
export const fetchPosts = createAsyncThunk("products/fetchPosts", async () => {
  try {
    const response = await axios.get("https://octane-garage-website.onrender.com/fetchPosts");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
});
 
export const delProduct = createAsyncThunk("products/delProduct", async (prodid) => {
  try {
    await axios.delete(`https://octane-garage-website.onrender.com/${prodid}`);
    return prodid;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
});
 
export const savePost = createAsyncThunk("posts/savePost", async (postData) => {
  try {
    const response = await axios.post("https://octane-garage-website.onrender.com/savePost", {
      prodid: postData.prodid,
      prodname: postData.prodname,
      prodprice: postData.prodprice,
      prodimage: postData.prodimage
    });
    return response.data.post;
  } catch (error) {
    console.error("Error saving post:", error);
    throw error;
  }
});
 
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (postData) => {
    try {
      console.log(postData);
      //const { prodname, prodprice } = postData;
      const response = await axios.post("https://octane-garage-website.onrender.com/updateProduct", {
        prodname: postData.prodname,
        prodprice :postData.prodprice
      });
 
      const updatedProduct = response.data.product;
      return updatedProduct;
    } catch (error) {
      console.log(error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
);
 
 
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};
 
export const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(savePost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
 
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.posts.findIndex((post) => post.prodid === updatedProduct.prodid);
        if (index !== -1) {
          state.posts[index] = updatedProduct;
        }
      })
      .addCase(delProduct.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.prodid !== action.payload);
      });
  },
});
 
export default PostSlice.reducer;
 
