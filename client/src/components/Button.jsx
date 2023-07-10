const Button = ({type, onClick, disabled, children}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center w-fit bg-white sign-in-button border border-blue-600 rounded text-blue-600 font-bold py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:shadow-outline"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
