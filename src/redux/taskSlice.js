// import { createSlice } from "@reduxjs/toolkit";
// import cover01 from "../../src/assets/cover01.png"
// const initialState = {
//   tasks: [
//     {
//       id: 1,
//       title: "Task Title",
//       description: "",
//       subtasks: [
//         { id: 1, text: "Here is task one", completed: false },
//         { id: 2, text: "Here is task Two", completed: true },
//         { id: 3, text: "Here is task Three", completed: false },
//       ],
//       status: "todo",
//     },
//     {
//       id: 2,
//       title: "Task Title",
//       description: "",
//       subtasks: [
//         { id: 1, text: "Here is task one", completed: false },
//         { id: 2, text: "Here is task Two", completed: false },
//       ],
//       status: "todo",
//     },
//     {
//       id: 3,
//       title: "Task Title",
//       description: "",
//       subtasks: [{ id: 1, text: "Here is task one", completed: false }],
//       status: "inprogress",
//     },
//     {
//       id: 4,
//       title: "Task Title",
//       description: "",
//       subtasks: [
//         { id: 1, text: "Here is task one", completed: true },
//         { id: 2, text: "Here is task Two", completed: true },
//       ],
//       status: "completed",
//     },
//   ],
//   isModalOpen: false,
//   newTask: {
//     title: "",
//     description: "",
//   },
//   profile: {
//     name: " ",
//     profession: " ",
//     imageUrl: "/path-to-initial-avatar.png",
//     coverPhoto: "/path-to-default-cover-photo.png",
//   },
//   darkMode: false,
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask(state, action) {
//       state.tasks.push(action.payload);
//     },

//     toggleTaskCompletion(state, action) {
//       const { taskId, subtaskId } = action.payload;
//       const task = state.tasks.find((task) => task.id === taskId);
//       const subtask = task.subtasks.find((subtask) => subtask.id === subtaskId);
//       subtask.completed = !subtask.completed;
//     },
//     deleteTask(state, action) {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     editTask(state, action) {
//       const { id, title, description, subtasks } = action.payload;
//       const taskIndex = state.tasks.findIndex((task) => task.id === id);
//       if (taskIndex !== -1) {
//         state.tasks[taskIndex] = {
//           ...state.tasks[taskIndex],
//           title,
//           description,
//           subtasks,
//         };
//       }
//     },
//     updateTaskStatus(state, action) {
//       const { taskId, status } = action.payload;
//       const task = state.tasks.find((task) => task.id === taskId);
//       if (task) {
//         task.status = status;
//       }
//     },

//     updateProfileName: (state, action) => {
//       state.profile.name = action.payload;
//     },
//     updateProfileProfession: (state, action) => {
//       state.profile.profession = action.payload;
//     },
//     updateProfileImage: (state, action) => {
//       state.profile.imageUrl = action.payload;
//     },
//     updateCoverPhoto: (state, action) => {
//       state.profile.coverPhoto = action.payload;
//     },

//     updateDarkMode: (state, action) => {
//       state.darkMode = action.payload;
//     },
//   },
// });

// export const {
//   addTask,
//   toggleTaskCompletion,
//   deleteTask,
//   editTask,
//   updateTaskStatus,
//   updateProfileName,
//   updateProfileProfession,
//   updateProfileImage,
//   updateCoverPhoto,
//   updateDarkMode,
// } = taskSlice.actions;

// export default taskSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import cover01 from "../../src/assets/cover01.png";  // Import the cover photo
// import proImg from '../assets/proImg.png'
// const initialState = {
//   tasks: [
//     {
//       id: 1,
//       title: "Task Title",
//       description: "",
//       subtasks: [
//         { id: 1, text: "Here is task one", completed: false },
//         { id: 2, text: "Here is task Two", completed: true },
//         { id: 3, text: "Here is task Three", completed: false },
//       ],
//       status: "todo",
//     },
//     {
//       id: 2,
//       title: "Task Title",
//       description: "",
//       subtasks: [
//         { id: 1, text: "Here is task one", completed: false },
//         { id: 2, text: "Here is task Two", completed: false },
//       ],
//       status: "todo",
//     },
//     {
//       id: 3,
//       title: "Task Title",
//       description: "",
//       subtasks: [{ id: 1, text: "Here is task one", completed: false }],
//       status: "inprogress",
//     },
//     {
//       id: 4,
//       title: "Task Title",
//       description: "",
//       subtasks: [
//         { id: 1, text: "Here is task one", completed: true },
//         { id: 2, text: "Here is task Two", completed: true },
//       ],
//       status: "completed",
//     },
//   ],
//   isModalOpen: false,
//   newTask: {
//     title: "",
//     description: "",
//   },
//   profile: {
//     name: " ",
//     profession: " ",
//     imageUrl: proImg.src,
//     coverPhoto: cover01.src,  // Set cover01 as the default cover photo
//   },
//   darkMode: false,
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask(state, action) {
//       state.tasks.push(action.payload);
//     },

//     toggleTaskCompletion(state, action) {
//       const { taskId, subtaskId } = action.payload;
//       const task = state.tasks.find((task) => task.id === taskId);
//       const subtask = task.subtasks.find((subtask) => subtask.id === subtaskId);
//       subtask.completed = !subtask.completed;
//     },
//     deleteTask(state, action) {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//     editTask(state, action) {
//       const { id, title, description, subtasks } = action.payload;
//       const taskIndex = state.tasks.findIndex((task) => task.id === id);
//       if (taskIndex !== -1) {
//         state.tasks[taskIndex] = {
//           ...state.tasks[taskIndex],
//           title,
//           description,
//           subtasks,
//         };
//       }
//     },
//     updateTaskStatus(state, action) {
//       const { taskId, status } = action.payload;
//       const task = state.tasks.find((task) => task.id === taskId);
//       if (task) {
//         task.status = status;
//       }
//     },

//     updateProfileName: (state, action) => {
//       state.profile.name = action.payload;
//     },
//     updateProfileProfession: (state, action) => {
//       state.profile.profession = action.payload;
//     },
//     updateProfileImage: (state, action) => {
//       state.profile.imageUrl = action.payload;
//     },
//     updateCoverPhoto: (state, action) => {
//       state.profile.coverPhoto = action.payload;
//     },

//     updateDarkMode: (state, action) => {
//       state.darkMode = action.payload;
//     },
//   },
// });

// export const {
//   addTask,
//   toggleTaskCompletion,
//   deleteTask,
//   editTask,
//   updateTaskStatus,
//   updateProfileName,
//   updateProfileProfession,
//   updateProfileImage,
//   updateCoverPhoto,
//   updateDarkMode,
// } = taskSlice.actions;

// export default taskSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";
import cover01 from "../../src/assets/cover01.png";  // Import the cover photo
import proImg from '../assets/proImg.png';

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Task Title",
      description: "",
      subtasks: [
        { id: 1, text: "Here is task one", completed: false },
        { id: 2, text: "Here is task Two", completed: true },
        { id: 3, text: "Here is task Three", completed: false },
      ],
      status: "todo",
    },
    {
      id: 2,
      title: "Task Title",
      description: "",
      subtasks: [
        { id: 1, text: "Here is task one", completed: false },
        { id: 2, text: "Here is task Two", completed: false },
      ],
      status: "todo",
    },
    {
      id: 3,
      title: "Task Title",
      description: "",
      subtasks: [{ id: 1, text: "Here is task one", completed: false }],
      status: "inprogress",
    },
    {
      id: 4,
      title: "Task Title",
      description: "",
      subtasks: [
        { id: 1, text: "Here is task one", completed: true },
        { id: 2, text: "Here is task Two", completed: true },
      ],
      status: "completed",
    },
  ],
  isModalOpen: false,
  newTask: {
    title: "",
    description: "",
  },
  profile: {
    name: "Thomas Anree",  // Default name
    profession: "UX Designer",  // Default profession
    imageUrl: proImg.src,
    coverPhoto: cover01.src,  // Set cover01 as the default cover photo
  },
  darkMode: false,
};

const taskSlice = createSlice({
  name: "tasks",
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
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          title,
          description,
          subtasks,
        };
      }
    },
    updateTaskStatus(state, action) {
      const { taskId, status } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.status = status;
      }
    },
    updateProfileName: (state, action) => {
      state.profile.name = action.payload;
    },
    updateProfileProfession: (state, action) => {
      state.profile.profession = action.payload;
    },
    updateProfileImage: (state, action) => {
      state.profile.imageUrl = action.payload;
    },
    updateCoverPhoto: (state, action) => {
      state.profile.coverPhoto = action.payload;
    },
    updateDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  editTask,
  updateTaskStatus,
  updateProfileName,
  updateProfileProfession,
  updateProfileImage,
  updateCoverPhoto,
  updateDarkMode,
} = taskSlice.actions;

export default taskSlice.reducer;
