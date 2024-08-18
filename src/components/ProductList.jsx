import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";
import axios from "axios";

function ProductList() {

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
        <div>
            {products && products.map((product) => {
                return (
                    <div key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <h3>{product.name}</h3>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductList;