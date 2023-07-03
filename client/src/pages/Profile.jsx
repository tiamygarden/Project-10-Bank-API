import MainLayout from "../layouts/MainLayout.jsx"
import { useEffect, useState } from "react"
import {useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loadProfile, updateProfile } from "../stores/auth.js"

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const profile = useSelector(state => state.auth.profile)
  const [editing, setEditing] = useState(false)
  const [editedFirstName, setEditedFirstName] = useState('')
  const [editedLastName, setEditedLastName] = useState('')

  const token = useSelector(state => state.auth.token)
  useEffect(() => {
    if(token) {
      dispatch(loadProfile())
      navigate('/Profile')
    }
  }, [token, dispatch, navigate, profile])

  async function handleSaveClick () {
    await dispatch(updateProfile({
      firstName: editedFirstName,
      lastName: editedLastName,
    }))
    setEditing(false)
  }

  function handleCancelClick() {
    setEditing(false)
    setEditedFirstName(profile.firstName)
    setEditedLastName(profile.lastName)
  }

  function handleEditNameClick () {
    setEditing(true)
    setEditedFirstName(profile.firstName)
    setEditedLastName(profile.lastName)
  }

  return (
    <MainLayout>
      <div className="bg-dark height-85">
        <h2 className="white pt-5">Welcome back</h2>
        {editing ? (
          <div className="inline">
            <div className="input-wrapper">
              <label>
                <input
                  type="text"
                  value={editedFirstName}
                  onChange={(e) => setEditedFirstName(e.target.value)}
                  placeholder="Firstname"
                />
              </label>
            </div>
            <div className="input-wrapper">
              <label>
                <input
                  type="text"
                  value={editedLastName}
                  onChange={(e) => setEditedLastName(e.target.value)}
                  placeholder="Lastname"
                />
              </label>
            </div>
            <br />
            <div className="inline">
              <button className="edit-button mr-5 mb-5" onClick={handleSaveClick}>
                Save
              </button>
              <button className="edit-button mb-5" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline">
              <h2 className="white pt-5 pb-5">
                {profile?.firstName}
              </h2>
              <h2 className="white pt-5 pb-5">
                {profile?.lastName}!
              </h2>
            </div>
            {!editing && (
              <button className="edit-button mb-5" onClick={handleEditNameClick}>
        Edit Name
              </button>
            )}
          </div>
        )}

        <h2 className="sr-only">Account</h2>
        <div className="account-content-wrapper">
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button" onClick={() => navigate("./account/${account_ID}")}>View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button" onClick={() => navigate("./account/${account_ID}")}>View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button" onClick={() => navigate("./account/${account_ID}")}>View transactions</button>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}

export default Profile
