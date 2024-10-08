import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import profileReducer from './taskSlice'

const store = configureStore({
  reducer: {
    profile:profileReducer,
    tasks: taskReducer,
  },
});

export default store;


