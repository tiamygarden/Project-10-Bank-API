import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import logo from "../assets/img/argentBankLogo.png"
import { loadProfile, logout } from "../features/auth.ts"
import { useEffect } from "react"

const Navigation = () => {
  const token = useSelector(state => state.auth.token)
  const profile = useSelector((state) => state.auth.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(token) {
      dispatch(loadProfile())
    }
  }, [token, dispatch, navigate])

  function handleLogout() {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className="px-5 py-1 flex items-center justify-between border">
      <div className="max-w-[200px]">
        <Link to="/">
          <img src={logo} alt="Argent Bank Logo" />
        </Link>
      </div>

      <div className="flex justify-between items-center gap-1">
        {profile ? (
          <>
            <i className="fa-solid fa-circle-user"></i>
            <Link to="/profile">
              <p className="pr-2">{profile.firstName}</p>
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
