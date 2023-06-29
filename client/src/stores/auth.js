import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from "../composable/useApi.jsx"

const initialState = {
  profile: null,
  firstName: '',
  lastName: '',
  token: localStorage.getItem('token') || ''
}

export const signIn = createAsyncThunk('auth/signIn', async payload => {
  const response = await api('user/login', {body: JSON.stringify(payload)})

  return (await response.json()).body.token
})

export const loadProfile = createAsyncThunk('auth/loadProfile', async () => {
  const response = await api('user/profile')

  return (await response.json()).body
})

export const logout = () => {
  return(dispatch) =>{
    dispatch(logoutAction())
  }
}

const logoutAction = createAction('auth/logout')

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.token = action.payload
      localStorage.setItem('token', action.payload) // Stocke le token dans le local storage
    },
    [signIn.rejected]: () => {
      console.log('REJECTED')
    },
    [loadProfile.fulfilled]: (state, action) => {
      state.profile = action.payload
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    [logoutAction]: (state) => {
      state.profile = null
      state.firstName = ''
      state.lastName = ''
      state.token = ''
      localStorage.removeItem('token') // Supprime le token du local storage lors de la déconnexion
    }
  }
})

export default authSlice.reducer
// export const {logout} = authSlice.actions