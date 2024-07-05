import { configureStore } from '@reduxjs/toolkit'
import AuthSliceReducer from './Slice/AuthSlice'
export const store = configureStore({
  reducer: {
    auth:AuthSliceReducer,
  },
})
export default store;