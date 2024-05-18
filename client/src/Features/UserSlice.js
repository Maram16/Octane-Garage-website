import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";




export const login = createAsyncThunk("users/login ", async (userData) => {
  try {
    const response = await axios.post("http://127.0.0.1:3002/login", {
      remail: userData.email,
      rpassword: userData.password,
    });
   
    console.log(response);
    // localStorage.setItem("user",JSON.stringify(response.data.User))
    return response.data.user;
  } catch (error) {
    alert("Invalid Credentials...");
  }
});



export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData)=>{
      try{
          console.log(userData);
              const response = await axios.post("http://127.0.0.1:3002/registerUser",{
                  firstname:userData.firstname,
                  lastname:userData.lastname,
                  email:userData.email,
                  phone:userData.phone,
                  password:userData.password,
              });


              const user = response.data.user;
              return user;
          }
              catch(error){
                  console.log(error);
              }
          }
      );
    
      
    
    
      const initVal = {
          user: [],
          isSuccess: false,
          isError: false,
          isLoading: false,
      };


      export const UserSlice = createSlice({
          name: "users",
          initialState: initVal,
          reducers:{  

          },

          extraReducers:(builder)=>{
              builder
              .addCase(login.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
            
              })
              
              .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                
              })
                .addCase(registerUser.pending, (state) => {
                  state.isLoading = true;
                })
                .addCase(registerUser.fulfilled, (state, action) => {
                  state.isLoading = false;
                })
                .addCase(registerUser.rejected, (state) => {
                  state.isLoading = false;
                  state.isError = true;
                })
                
                

          }
      });
  

      export default UserSlice.reducer;






















        





        
        
        
    
