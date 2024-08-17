import { NavLink, Route, Routes } from "react-router-dom"
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductCategory from './components/ProductCategory'
import ProductList from './components/ProductList'
import NotFoundPage from './pages/NotFoundPage'


function App() {

  return (
    <>       
      <h1>Brews & Bites</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/products">All Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/productDetails" element={<ProductDetailsPage />}/>
        <Route path="/categories" element={<ProductCategory />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
