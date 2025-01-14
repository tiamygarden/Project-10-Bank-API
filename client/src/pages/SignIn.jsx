import MainLayout from "../layouts/MainLayout.jsx"
import { useDispatch, useSelector } from "react-redux"
import {signIn, loadProfile} from "../features/auth.ts"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input.jsx'

const SignIn = () => {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector(state => state.auth.token)
  const profile = useSelector(state => state.auth.profile)
  const isProfileLoading = useSelector(state => state.auth.isLoadingProfile)

  useEffect(() => {
    if(token) {
      if (!isProfileLoading) {
        navigate('/Profile')
      }

    }
  }, [token, navigate])

  async function signInAction() {
    if (isLoading) { return }
    setIsLoading(true)
    setError(null)

    try {
      const result = await dispatch(signIn({ email, password }))
      if(result.error) {
        setError('Invalid email or password.')
      } else if(token) {
        await dispatch(loadProfile())
      }else if(profile) {
        navigate('/Profile')
      }

    } catch (error) {
      setError( 'An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
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
                  onChange={(e) => setEmail(e.target.value)}/>
              </label>
            </div>
            <div className="flex flex-col text-left mb-1">
              <label className="font-bold">
              Password
                <Input type="password" value={password} autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>
            <div className="flex p-1">
              <label className="ml-0.5">
                <input type="checkbox" className="mr-1 "/>
              Remember me
              </label>
            </div>
            <div className="flex justify-center flex-wrap">
              <button
                type="button"
                onClick={signInAction}
                disabled={isLoading}
                className="w-full bg-abgreen hover:border-abgreen border-transparent border hover:border-current hover:bg-white text-white hover:text-abgreen underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                { isLoading ? 'Loading...': 'Sign In' }
              </button>
              { error && (
                <div className="text-red-500 text-center mt-2">
                  {error}
                </div>
              )}
            </div>
          </form>
        </section>
      </div>
    </MainLayout>
  )
}

export default SignIn