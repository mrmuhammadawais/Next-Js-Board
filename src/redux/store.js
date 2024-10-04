import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import profileReducer from './taskSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    profile:profileReducer,
  },
});

export default store;


