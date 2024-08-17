import { NavLink, Route, Routes } from "react-router-dom"

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductList from './components/ProductList'
import ProductForm from "./components/ProductForm"
import ProductCategory from './components/ProductCategory'
import ProductDetailsPage from './pages/ProductDetailsPage'
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
        <NavLink to="/products/create">Add Product</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/products/create" element={<ProductForm />}/>
        <Route path="/categories" element={<ProductCategory />}/>
        <Route path="/productDetails" element={<ProductDetailsPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
