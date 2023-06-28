import {Link, redirect} from "react-router-dom"
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
      <div className="w-60 ml-5">
        <Link to="/">
          <img src={logo} alt="Argent Bank Logo" />
        </Link>
      </div>

      <div className="flex items-center justify-around gap-2 mr-5">
        {profile ? (
          <>
            <i className="fa-solid fa-circle-user"></i>
            <p>{profile.firstName}</p>
            <i className="fa-solid fa-right-from-bracket"></i>
            <Link to="/sign-in">
              <p onClick={handleLogout}>Log Out</p>
            </Link>
          </>
        ) : (
          <>
            <i className="fa-solid fa-circle-user"></i>
            <Link className="flex items-center justify-around gap-2 mr-5" to="/sign-in">
              <p>Sign In</p>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navigation
