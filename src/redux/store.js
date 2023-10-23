import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/tasksSlice";
import usersSlice from "./user/usersSlice";

export const store = configureStore({
    reducer: {
        tasksSlice:tasksSlice,
        usersSlice:usersSlice
    },
  })
  