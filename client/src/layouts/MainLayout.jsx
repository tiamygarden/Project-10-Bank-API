import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"

const MainLayout = ({children}) => {
  return (
    <>
      <Navigation/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default MainLayout