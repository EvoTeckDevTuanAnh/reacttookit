import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testReducer from '../features/test/CounterSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer,
  },
});

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing