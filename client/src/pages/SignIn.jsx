import MainLayout from "../layouts/MainLayout.jsx"
import {useDispatch} from "react-redux"
import {signIn} from "../stores/auth.js"
import {useState} from "react"

const SignIn = () => {
  const [email, setEmail] = useState('tony@stark.com')
  const [password, setPassword] = useState('password123')
  const dispatch = useDispatch()

  return (
    <MainLayout>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label>
              Email
              <input type="email" value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
          </div>

          <div className="input-wrapper">
            <label>
              Password
              <input type="password" value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
          </div>

          <div className="input-remember">
            <label>
              <input type="checkbox"/>
              Remember me
            </label>
          </div>

          <button
            type="button"
            onClick={() => dispatch(signIn({email, password}))}
            className="sign-in-button"
          >
            Sign In
          </button>
        </form>
      </section>
    </MainLayout>
  )
}

export default SignIn