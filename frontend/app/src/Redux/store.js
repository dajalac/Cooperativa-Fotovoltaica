import { configureStore } from '@reduxjs/toolkit';
import UsinaReducer from './UsinaSlice';
import InvestidorReducer from './InvestidorSlice';


const store = configureStore({
  reducer: {
      usinaInfo: UsinaReducer,
      investidor: InvestidorReducer
  },
})

export default store