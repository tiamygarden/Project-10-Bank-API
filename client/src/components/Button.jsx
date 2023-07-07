const Button = ({type, onClick, disabled, children}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center w-fit bg-white border-b-blue-600 rounded text-blue-600 font-bold p-2.5"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
