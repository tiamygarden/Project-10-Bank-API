const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center px-4 my-8">
      <div className="h-36 w-36 border-abgreen border-8 rounded-full">
        <img src={icon} alt="Chat Icon" className="feature-icon" />
      </div>
      <h3 className="font-semibold my-4">{title}</h3>
      <p className="text-sm">
        {description}
      </p>
    </div>
  )
}

export default FeatureItem
