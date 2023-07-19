import {
  configureStore 
} from '@reduxjs/toolkit'

import walletReducer from './reducers/walletSlice'
import contractReducer from './reducers/contractSlice'

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    contract: contractReducer
  },
})