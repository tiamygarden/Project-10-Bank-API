import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout