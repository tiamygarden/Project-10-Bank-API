import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import Counter from "../components/Counter.jsx"
import SignIn from "../pages/SignIn.jsx"
import Profile from "../pages/Profile.jsx"
import TransactionsPages from "../pages/TransactionsPages.jsx"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/account/:account_ID" element={<TransactionsPages/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
 