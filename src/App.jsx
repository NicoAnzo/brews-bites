import { NavLink, Route, Routes } from "react-router-dom"

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductList from './components/ProductList'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'
import ProductCategory from './components/ProductCategory'
import ProductDetailsPage from './pages/ProductDetailsPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {

  return (
    <>       
      <h1>Brews & Bites</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/products/create">Add Product</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/products/create" element={<CreateProduct />}/>
        <Route path="/products/edit/:productId" element={<EditProduct />}/>
        <Route path="/categories" element={<ProductCategory />}/>
        <Route path="/products/:productId" element={<ProductDetailsPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
