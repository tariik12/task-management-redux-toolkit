import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:'Tarik',
    email:'tariikul12@gmail.com',
    
}
const usersSlice =createSlice ({
    name:'userSlice',
    initialState,
    reducers:{},
});

export default usersSlice.reducer;