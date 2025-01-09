import { createSlice } from '@reduxjs/toolkit';

// Initial state for projects
const initialState = {
  projects: [], 
};

// Create the slice using createSlice from Redux Toolkit
const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
  },
});

// Export the reducers
export const { setProjects, addProject } = projectSlice.actions;

// Export the reducer to be used in the store
export default projectSlice.reducer;
