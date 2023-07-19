import { 
  createSlice
} from '@reduxjs/toolkit'

const initialState = {
  connected: false,
  provider: {},
  address: "",
  CTbalance: 0, // CSCT balance
  BNBbalance: 0, // BNB balance
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    connected: (state, action) => {
      state.connected = true
      state.provider = action.payload.provider
      state.address = action.payload.address
      state.CTbalance = action.payload.CTbalance
      state.BNBbalance = action.payload.BNBbalance
    },
    disConnected: (state) => {
      state.connected = false
      state.provider = {}
      state.address = ""
      state.CTbalance = 0
      state.BNBbalance = 0
    },
    balanceChanged: (state, action) => {
      state.CTbalance = action.payload.CTbalance
      state.BNBbalance = action.payload.BNBbalance
    }
  }
})

export const {
  connected,
  disConnected,
  balanceChanged,
} = walletSlice.actions

export default walletSlice.reducer