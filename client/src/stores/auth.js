import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../composable/useApi.jsx"
import { store } from "../App.jsx"
import { useNavigate } from "react-router-dom"

const initialState = {
  profile: null,
  firstName: "",
  lastName: "",
  token: localStorage.getItem("token") || ""
}

export const signIn = createAsyncThunk("auth/signIn", async payload => {
  const response = await api("user/login", { body: JSON.stringify(payload) })

  return (await response.json()).body.token
})

export const loadProfile = createAsyncThunk("auth/loadProfile", async () => {
  const response = await api("user/profile")

  return (await response.json()).body
})

export const updateProfile = createAsyncThunk("auth/updateProfile", async (payload) => {
  const response = await api("user/profile", { method: "PUT", body: JSON.stringify(payload) })
  return (await response.json()).body
})

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutAction())
  }
}

const logoutAction = createAction("auth/logout")


const authSlice = createSlice({
  name: "auth",
  initialState: {...initialState},
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.token = action.payload
      localStorage.setItem("token", action.payload) // Stocke le token dans le local storage
    })

    builder.addCase(signIn.rejected, () => {
      console.log("REJECTED")
    })

    builder.addCase(loadProfile.fulfilled, (state, action) => {
      state.profile = action.payload
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    })

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    })

    builder.addCase(logoutAction, (state) => {
      localStorage.removeItem("token") // Supprime le token du local storage lors de la déconnexion
      state = {...initialState}

    })
  }
})

export default authSlice.reducer
