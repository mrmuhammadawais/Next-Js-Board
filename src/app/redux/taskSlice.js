import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  isModalOpen: false,
  newTask: {
    title: '',
    description: '',
  },
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    updateNewTask(state, action) {
      state.newTask = action.payload;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  addTask,
  openModal,
  closeModal,
  updateNewTask,
  deleteTask,
} = taskSlice.actions;
export default taskSlice.reducer;