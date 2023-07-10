const AccountItem = ({ title, amount, description, children}) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between
      items-center border bg-white my-0 m-auto p-6 text-left mb-8">
      <div className="flex w-full flex-col">
        <h3 className="p-0 m-0 text-base font-normal">{title}</h3>
        <p className="m-0 text-4xl font-bold">{amount}</p>
        <p className="m-0 pb-2">{description}</p>
      </div>
      {children}
    </div>
  )
}

export default AccountItem
