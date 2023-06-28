import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"

const MainLayout = ({children}) => {
  return (
    <>
      <Navigation/>
      <div>{children}</div>
      <Footer/>
    </>
  )
}

export default MainLayout