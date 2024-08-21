import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../config/api";

import defaultImageHotDrinks from "../../images/default-image-hot-drinks.webp";
import defaulImageColdDrinks from "../../images/default-image-cold-drinks.webp";
import defaultImagePastries from "../../images/default-image-pastries.jpeg";
import defaulImageSandwiches from "../../images/default-image-sandwiches.jpeg";

import NotFoundPage from "../pages/NotFoundPage";
import axios from "axios";


function ProductCategoryList () {

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

    const handleImageError = (e) => {

        switch (category) {
            case "hot drinks":
                e.target.src = defaultImageHotDrinks;
                break;
            case "cold drinks":
                e.target.src = defaulImageColdDrinks;
                break;
            case "pastries":
                e.target.src = defaultImagePastries;
                break;
            case "sandwiches":
                e.target.src = defaulImageSandwiches;
                break;
            default:
                e.target.src = defaultImageHotDrinks; 
        }
    };

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (category !== "hot drinks" && category !== "cold drinks" && category !== "pastries" && category !== "sandwiches") {
        return <NotFoundPage />;
    }

    return (
        <div className="product-category-container">
            <h2>{category.toUpperCase()}</h2>
            {filteredProducts.length > 0 
            ? (
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <Link to={`/products/${product.id}`}>
                                <h3>{product.name}</h3>
                                <img src={product.image} alt="product image" onError={handleImageError} />
                                <p className="price">{product.price} &nbsp;&nbsp;€</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ) 
            : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
}

export default ProductCategoryList;