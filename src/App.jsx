import { NavLink, Route, Routes } from "react-router-dom"
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {

  return (
    <>       
      <h1>Brews & Bites</h1>

      <NavLink>

      </NavLink>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/productDetails" element={<ProductDetailsPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
