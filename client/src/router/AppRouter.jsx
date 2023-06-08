import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Profil from "../pages/Profil"
import Reglage from "../pages/Reglage"
import Communaute from "../pages/Communaute"
import Error404 from "../pages/Error404"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/user/:userId" element={<Profil />} />
        <Route path="/reglage" element={<Reglage />} />
        <Route path="/communaute" element={<Communaute />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
 