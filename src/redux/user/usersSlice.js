import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:'Tarikul',
    email:'tariikul12@gmail.com',
    usersSlice:[],
}
const usersSlice =createSlice ({
    name:'userSlice',
    initialState,
    reducers:{},
});

export default usersSlice.reducer;