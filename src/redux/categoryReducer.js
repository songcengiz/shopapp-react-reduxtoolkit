import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    categories:[]
}
export const getCategories = createAsyncThunk("category",async()=>{
    const response = await fetch("http://localhost:3001/categories")
    const data = response.json()
    return data;
})
const categoryReducer = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder.addCase(getCategories.fulfilled,(state,action)=>{
        state.categories = action.payload
      })
    }
 })

 export default categoryReducer.reducer