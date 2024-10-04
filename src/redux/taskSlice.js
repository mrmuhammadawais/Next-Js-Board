
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  isModalOpen: false,
  newTask: {
    title: '',
    description: '',
  },
  profile: {
    name: 'Muhammad Awais',
    profession: 'Front End Developer',
    imageUrl: '/path-to-initial-avatar.png', 
  },
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    toggleTaskCompletion(state, action) {
      const { taskId, subtaskId } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      const subtask = task.subtasks.find((subtask) => subtask.id === subtaskId);
      subtask.completed = !subtask.completed;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask(state, action) {
      const { id, title, description, subtasks } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], title, description, subtasks };
      }
    },
    updateTaskStatus(state, action) {
      const { taskId, status } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.status = status;
      }
    },

    updateProfileImage(state, action) {
      state.profile.imageUrl = action.payload;
    },
    updateProfileName(state, action) {
      state.profile.name = action.payload;
    },
    updateProfileProfession(state, action) {
      state.profile.profession = action.payload;
    },
  },
});

export const {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  editTask,
  updateTaskStatus,
  updateProfileImage,
  updateProfileName,
  updateProfileProfession,
} = taskSlice.actions;

export default taskSlice.reducer;










