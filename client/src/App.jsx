import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import counter from "./stores/counter.js"
import auth from "./stores/auth.ts"
import "./styles/App.css"

import AppRouter from "./router/AppRouter"
export const store = configureStore({
  reducer: {
    counter,
    auth,
  }
})

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default App
