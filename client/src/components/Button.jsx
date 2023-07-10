const Button = ({type, onClick, disabled, children}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center w-fit text-white border border-abgreen rounded bg-abgreen font-bold py-2 px-4 hover:bg-white hover:text-abgreen focus:outline-none focus:shadow-outline"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
