import { Link } from "react-router-dom"

const AccountItem = ({ title, amount, description, account_ID }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between
      items-center border bg-white my-0 m-auto p-6 text-left mb-8">
      <div className="flex w-full flex-col">
        <h3 className="p-0 m-0 text-base font-normal">{title}</h3>
        <p className="m-0 text-4xl font-bold">{amount}</p>
        <p className="m-0">{description}</p>
      </div>
      <button
        type="button"
        className="w-full md:max-w-[288px] h-12 m-auto border bg-[indigo] rounded text-white"
      >
        <Link to={`/profile/account/${account_ID}`}>View Description</Link>
      </button>
    </div>
  )
}

export default AccountItem
