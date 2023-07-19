import { 
  createSlice
} from '@reduxjs/toolkit'

const initialState = {
  status: false,
  contract: {},
}

export const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    connectContract: (state, payload) => {
      state.status = true
      state.contract = payload.contract
    },
  }
})

export const {
  connectContract,
} = contractSlice.actions

export default contractSlice.reducer