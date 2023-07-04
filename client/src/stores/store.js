import {configureStore} from "@reduxjs/toolkit"
import counter from "./counter.js"
import auth from "./auth.ts"

export const store = configureStore({
  reducer: {
    counter,
    auth,
  }
})