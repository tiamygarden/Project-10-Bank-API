import MainLayout from "../layouts/MainLayout.jsx"
import {useDispatch} from "react-redux"
import {signIn, loadProfile} from "../stores/auth.js"
import {useState} from "react"
import {store} from "../App.jsx"

const SignIn = () => {
  const [email, setEmail] = useState('tony@stark.com')
  const [password, setPassword] = useState('password123')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  async function signInAction() {
    if(isLoading) { return }
    setIsLoading(true)
    await dispatch(signIn({email, password}))
    if(store.getState().auth.token) {
      await dispatch(loadProfile())
      if(store.getState().auth.profile) {
        // todo rediriger vers la page profil
      }
    }
    setIsLoading(false)
  }

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
              <input type="password" value={password} autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}/>
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
            onClick={signInAction}
            className="sign-in-button"
            disabled={isLoading}
          >
            { isLoading ? 'Loading...': 'Sign In' }
          </button>
        </form>
      </section>
    </MainLayout>
  )
}

export default SignIn