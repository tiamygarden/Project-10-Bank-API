import MainLayout from "../layouts/MainLayout.jsx"
// import {useState} from "react"
import {useSelector} from "react-redux"

const Profile = () => {
  const profile = useSelector(state => state.auth.profile)
  // const [isEditing, setIsEditing] = useState(false)
  // const [firstName, setFirstName] = useState(user.firstName)
  // const [lastName, setLastName] = useState(user.lastName)

  return (
    <MainLayout>
      <div className="bg-dark height-85">
        <h2 className="white pt-5 pb-5">Welcome back
          <br/>{profile.firstName} {profile.lastName}!</h2>
        <button className="edit-button mb-5">Edit Name</button>
        <h2 className="sr-only">Account</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default Profile
