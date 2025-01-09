import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";
import projectreducer from "./ProjectSlice"

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    projects : projectreducer,
  },
});

export default store;
