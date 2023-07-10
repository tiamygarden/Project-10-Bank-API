import MainLayout from "../layouts/MainLayout.jsx"
import { useDispatch, useSelector } from "react-redux"
import {signIn, loadProfile} from "../stores/auth.ts"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input.jsx'
// import Button from '../components/Button.jsx'

const SignIn = () => {
  const [email, setEmail] = useState('tony@stark.com')
  const [password, setPassword] = useState('password123')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector(state => state.auth.token)
  const profile = useSelector(state => state.auth.profile)

  useEffect(() => {
    if(token) {
      dispatch(loadProfile())
      navigate('/Profile')
    }
  }, [token, dispatch, navigate])

  async function signInAction() {
    if(isLoading) { return }
    setIsLoading(true)
    await dispatch(signIn({email, password}))

    if(token) {
      await dispatch(loadProfile())

      if(profile) {
        navigate('/Profile')
      }
    }
    setIsLoading(false)
  }

  return (
    <MainLayout>
      <div className="bg-dark flex-grow flex-1 items-center content-start">
        <section className="box-border content-start max-w-xs bg-white mx-auto mt-8 p-6">
          <div className="flex justify-center text-xl">
            <i className="fa fa-user-circle"></i>
          </div>
          <h1 className="text-center text-2xl font-bold my-5">Sign In</h1>
          <form className="w-full">
            <div className="flex flex-col flex-wrap mb-1">
              <label className="font-bold w-full m-0">
              Email
                <Input type="email" value={email} autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} className="w-full p-1 text-sm mb-2"/>
              </label>
            </div>
            <div className="flex flex-col text-left mb-1">
              <label className="font-bold">
              Password

                <Input type="password" value={password} autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)} className="w-full p-1 text-sm mb-2"/>
              </label>
            </div>
            <div className="flex p-1">
              <label className="ml-0.5">
                <input type="checkbox" className="mr-1 "/>
              Remember me
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={signInAction}
                disabled={isLoading}
                className="w-full bg-abgreen hover:border-abgreen border-transparent border hover:border-current hover:bg-white text-white hover:text-abgreen underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                { isLoading ? 'Loading...': 'Sign In' }
              </button>
            </div>
          </form>
        </section>
      </div>
    </MainLayout>
  )
}

export default SignIn