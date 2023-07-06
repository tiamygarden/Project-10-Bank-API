const Button = ({type, onClick, disabled, children}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center w-fit bg-abgreen rounded text-white font-bold p-2.5"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
