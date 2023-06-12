import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const signIn = createAsyncThunk('auth/signIn', async payload => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify(payload)
  })

  return (await response.json()).body.token
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null
  },
  extraReducers: {
    [signIn.fulfilled]: (state, {payload}) => {
      state.token = payload
    },
  }
})

// export const {setUser} = authSlice.actions
export default authSlice.reducer