import { NavLink } from "react-router-dom"
import Home from "../pages/Home"
import logo from "../assets/img/argentBankLogo.png"

const Navigation = () => {
  return (
    <div className="header">
      <div className="main-nav">
        <NavLink to="/" element={<Home />}>
          <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
        </NavLink>
        <h1 className="sr-only">Argent Bank</h1>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/sign-in">
            <li>SignIn</li>
          </NavLink>
          <NavLink to="/counter">
            <li>Counter</li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navigation