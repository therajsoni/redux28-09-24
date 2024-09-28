import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // every Slice declare here line by line 1 params is name to access in ui page and second is slice name
  },
});

export default store;
