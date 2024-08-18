import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";
import axios from "axios";

function ProductList () {
    
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);  

    const getAllProducts = () => {
        axios.get(`${API_URL}/products`)
            .then((response) => {
                setProducts(response.data);
                setLoading(false); 
            })
            .catch((error) => {
                setError("Error fetching products. Please try again later.");
                setLoading(false); 
            });
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;  
    }

    if (error) {
        return <p>{error}</p>;  
    }

    return (
        <div className="product-list-container">
            {products && products.length > 0 
            ? (
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <Link to={`/products/${product.id}`}>
                                <h3>{product.name}</h3>
                                <p>{product.price} €</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ) 
            : (
                <p>No products available.</p>
            )}
        </div>
    );
}

export default ProductList;