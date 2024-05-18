import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "./Features/UserSlice";
import ProdectReducer from "./Features/UserSlice";


export const store = configureStore({
  reducer: { 
    users: UseReducer,
    products:ProdectReducer,
  
 },
});