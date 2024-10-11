// import { createSlice } from "@reduxjs/toolkit";

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
//       state.profile.imageUrl = action.payload; // Store image URL in Redux
//     },
//     updateCoverPhoto: (state, action) => {
//       // New action to update cover photo
//       state.profile.coverPhoto = action.payload; // Store cover photo URL in Redux
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
// } = taskSlice.actions;

// export default taskSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

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
    name: " ",
    profession: " ",
    imageUrl: "/path-to-initial-avatar.png",
    coverPhoto: "/path-to-default-cover-photo.png", 
  },
  darkMode: false, // Adding dark mode to the state
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
      state.profile.imageUrl = action.payload; // Store image URL in Redux
    },
    updateCoverPhoto: (state, action) => {
      // New action to update cover photo
      state.profile.coverPhoto = action.payload; // Store cover photo URL in Redux
    },

    // Action to update dark mode
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
  updateDarkMode, // Export dark mode action
} = taskSlice.actions;

export default taskSlice.reducer;
