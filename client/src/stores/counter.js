import {createSlice} from '@reduxjs/toolkit'

const conterSlice = createSlice({
  name: 'counter',
  initialState: {
    total: 0
  },
  reducers: {
    increment(state) {
      state.total = state.total + 1
    },
    decrement(state) {
      state.total = state.total - 1
    },
    reset(state) {
      state.total = 0
    }
  }
})

export const {increment, decrement, reset} = conterSlice.actions
export default conterSlice.reducer