import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objective: [],
  addTask: false,
};

const listSlice = createSlice({
  name: "objective",
  initialState,
  reducers: {
    showAddTask: (state) => {
      state.addTask = true;
    },
    hideAddTask: (state) => {
      state.addTask = false;
    },
    addTaskToArray: (state, action) => {
      state.objective.push({ ...action.payload, time: new Date().getTime() });
    },
    deleteTask: (state, action) => {
      state.objective = state.objective.filter(
        (e) => e.time !== action.payload.time
      );
    },
  },
});

export const selectList = (state) => state.objective.objective;
export const addTask = (state) => state.objective.addTask;
export const { showAddTask, hideAddTask, addTaskToArray, deleteTask } =
  listSlice.actions;
export default listSlice.reducer;
