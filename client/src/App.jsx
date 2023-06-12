import AppRouter from "./router/AppRouter"
import './App.css'

import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import counter from "./stores/counter.js"

export const store = configureStore({
  reducer: {
    counter: counter,
    // currentUser: currentUserReducer
  }
})

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
