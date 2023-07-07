import MainLayout from "../layouts/MainLayout.jsx"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loadProfile, updateProfile } from "../stores/auth.ts"
import Button from "../components/Button.jsx"
import Input from "../components/Input.jsx"
import AccountItem from "../components/AccountItem.jsx"

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.auth.profile)
  const [editing, setEditing] = useState(false)
  const [editedFirstName, setEditedFirstName] = useState("")
  const [editedLastName, setEditedLastName] = useState("")

  const token = useSelector((state) => state.auth.token)
  useEffect(() => {
    if (token && !profile) {
      dispatch(loadProfile())
      navigate("/Profile")
    } else if (!profile) {
      navigate("/sign-in")
    }
  }, [token, dispatch, navigate, profile])

  async function handleSaveClick() {
    await dispatch(
      updateProfile({
        firstName: editedFirstName,
        lastName: editedLastName,
      })
    )
    setEditing(false)
  }

  function handleCancelClick() {
    setEditing(false)
    setEditedFirstName(profile.firstName)
    setEditedLastName(profile.lastName)
  }

  function handleEditNameClick() {
    setEditing(true)
    setEditedFirstName(profile.firstName)
    setEditedLastName(profile.lastName)
  }

  return (
    <MainLayout>
      <div className="flex justify-center content-center items-center flex-col w-full bg-dark height-85 ">
        <h2 className="text-3xl text-white font-bold pt-5">Welcome back</h2>
        {editing ? (
          <div className="flex flex-wrap">
            <div className="flex flex-row w-full justify-center gap-1 pb-5">
              <div className="flex pt-0.5">
                <label>
                  <Input
                    type="text"
                    value={editedFirstName}
                    onChange={(e) => setEditedFirstName(e.target.value)}
                    placeholder="Firstname"
                  />
                </label>
              </div>
              <div className="flex pt-0.5">
                <label>
                  <Input
                    type="text"
                    value={editedLastName}
                    onChange={(e) => setEditedLastName(e.target.value)}
                    placeholder="Lastname"
                  />
                </label>
              </div>
              <br />
            </div>
            <div className="flex flex-row w-full justify-center gap-1 pb-5">
              <Button className="edit-button mr-5 mb-5" onClick={handleSaveClick}>
                Save
              </Button>
              <Button className="edit-button mb-5" onClick={handleCancelClick}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center flex-wrap content-center
            items-center w-full m-auto gap-2 pb-5 ">
              <h2 className="text-3xl text-white font-bold pt-0.5">
                {profile?.firstName}
              </h2>
              <h2 className="text-3xl text-white font-bold pt-0.5">
                {profile?.lastName}!
              </h2>
            </div>
            {!editing && (
              <div className="flex w-full justify-center content-center mb-8">
                <Button onClick={handleEditNameClick}>
                  Edit Name
                </Button>
              </div>
            )}
          </div>
        )}
        <section className="w-5/6 flex flex-col m-auto pb-24" aria-description="Account">
          <AccountItem
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
          />
          <AccountItem
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"/>
          <AccountItem
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"/>
        </section>
      </div>
    </MainLayout>
  )
}

export default Profile
