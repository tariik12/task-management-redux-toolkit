import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/tasksSlice";

export const store = configureStore({
    reducer: {
        tasks:tasksSlice
    },
  })
  