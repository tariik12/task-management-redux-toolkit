import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/tasksSlice";
import usersSlice from "./user/usersSlice";
import baseApi from "./featurse/api/baseApi";

export const store = configureStore({
    reducer: {
        tasksSlice:tasksSlice,
        usersSlice:usersSlice,
        [baseApi.reducerPath]:baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),


  })
  