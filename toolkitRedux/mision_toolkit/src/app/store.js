import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slices/CounterSlice'
import textReducer from '../store/slices/TextSlice'
import postReducer from '../store/slices/PostSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    post: postReducer,
  },
})