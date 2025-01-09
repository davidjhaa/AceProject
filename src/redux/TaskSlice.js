import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setTask: (state, action) => {
        state.push(action.payload);
      },
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      },      
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
