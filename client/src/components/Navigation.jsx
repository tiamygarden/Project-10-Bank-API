import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import logo from "../assets/img/argentBankLogo.png"
import {logout} from "../stores/auth.js"

const Navigation = () => {
  const profile = useSelector((state) => state.auth.profile)
  const dispatch = useDispatch()

  function  handleLogout() {
    dispatch(logout())
  }

  return (
    <div className="header flex items-center justify-between border">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Argent Bank Logo" />
        </Link>
      </div>

      <div className="header-navlinks">
        {profile ? (
          <>
            <i className="fa-solid fa-circle-user"></i>
            <Link to="/profile">
              <p>{profile.firstName}</p>
            </Link>
            <i className="fa-solid fa-right-from-bracket"></i>
            <Link to="/">
              <p onClick={handleLogout}>Sign Out</p>
            </Link>
          </>
        ) : (
          <>
            <i className="fa-solid fa-circle-user"></i>
            <Link to="/sign-in">
              <p>Sign In</p>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navigation
