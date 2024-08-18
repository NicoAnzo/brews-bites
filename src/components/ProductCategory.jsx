import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

function ProductCategory() {
    const { category } = useParams();
    const [products, setProducts] = useState([]); 
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`${API_URL}/products`)
            .then(response => {
                const allProducts = response.data;
                setProducts(allProducts);
                filterProducts(allProducts, category);
                setLoading(false);
            })
            .catch(error => {
                setError("Error fetching products. Please try again later.");
                setLoading(false);
            });
    }, [category]);

    const filterProducts = (allProducts, category) => {
        const filtered = allProducts.filter(product =>
            product.category === category
        );
        setFilteredProducts(filtered);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Category: {category}</h2>
            {filteredProducts.length > 0 ? (
                <div>
                    {filteredProducts.map(product => (
                        <div key={product.id} >
                            <Link to={`/products/${product.id}`}>
                                <h3>{product.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
}

export default ProductCategory;
