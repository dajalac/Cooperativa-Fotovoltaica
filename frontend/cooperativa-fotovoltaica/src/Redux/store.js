import { configureStore } from '@reduxjs/toolkit';
import UsinaReducer from './UsinaSlice'


const store = configureStore({
  reducer: {
      usinaInfo: UsinaReducer
  },
})

export default store