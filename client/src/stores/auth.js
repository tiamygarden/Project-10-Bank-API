import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from "../composable/useApi.jsx"

const initialState = {
  profile: null,
  token: ''
}

export const signIn = createAsyncThunk('auth/signIn', async payload => {
  const response = await api('user/login', {body: JSON.stringify(payload)})

  return (await response.json()).body.token
})

export const loadProfile = createAsyncThunk('auth/loadProfile', async () => {
  const response = await api('user/profile')

  return (await response.json()).body
})

// export const logout = () => ({
//   type: 'logout'
//
// })
//
// const rootReducer = (state, action) => {
//   if (action.type === 'logout') {
//     state = undefined
//   }
//
//   return reducer(state, action)
// }



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = ''
    }
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
    }
  }
})

// export const {setUser} = authSlice.actions
export default authSlice.reducer
export const {logout} = authSlice.actions