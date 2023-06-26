import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from "../composable/useApi.jsx"

export const signIn = createAsyncThunk('auth/signIn', async payload => {
  const response = await api('user/login', {body: JSON.stringify(payload)})

  return (await response.json()).body.token
})

export const loadProfile = createAsyncThunk('auth/loadProfile', async () => {
  const response = await api('user/profile')

  return (await response.json()).body
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    profile: null,
    token: null
  },
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.token = action.payload
    },
    [signIn.rejected]: () => {
      console.log('REJECTED')
    },
    [loadProfile.fulfilled]: (state, action) => {
      state.profile = action.payload
    },
  }
})

// export const {setUser} = authSlice.actions
export default authSlice.reducer