import AppRouter from "./router/AppRouter"

import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import counter from "./stores/counter.js"
import auth from "./stores/auth.js"

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
