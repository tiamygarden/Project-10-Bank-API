import { Provider } from "react-redux"
import AppRouter from "./router/AppRouter"
import { store } from "./stores/store.js"

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default App
