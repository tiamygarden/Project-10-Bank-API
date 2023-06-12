import React from "react"
import { NavLink } from "react-router-dom"
import Home from "../pages/Home"
import Counter from "../components/Counter.jsx"
import Error404 from "../pages/Error404"

const NavBar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <ul>
          <NavLink to="/" element={<Home />}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/counter" element={<Counter />}>
            <li>Counter</li>
          </NavLink>
          <NavLink to="*" element={<Error404 />}></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default NavBar