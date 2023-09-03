import {configureStore} from "@reduxjs/toolkit"
import counter from "../features/counter.js"
import auth from "../features/auth.ts"

export const store = configureStore({
  reducer: {
    counter,
    auth,
  }
})