import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasks/taskSlice';
import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
