import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";

import axios from "axios";
import NotFoundPage from "./NotFoundPage";

function ProductDetailsPage () {
  
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);
    const { productId } = useParams();
    const navigate = useNavigate();

    const getProduct = () => {
        axios.get(`${API_URL}/products/${productId}`)
            .then((response) => {
                const singleProduct = response.data;
                if (singleProduct) {
                    setProduct(singleProduct);
                } else {
                    setError(true);
                }
            })
            .catch(() => setError(true));
    };       

    useEffect(() => {
        getProduct();
    }, [productId]);

    const deleteProduct = () => {
        axios.delete(`${API_URL}/products/${productId}`)
            .then(() => {
                navigate("/products");
            })
            .catch((err) => console.log(err));
    };

    if (error) {
        return <NotFoundPage />;
    }   

    return (
        <>
            {product && (
                
                <div className="product-details-container">
                    <div className="details-card-container">
                        <h1>{product.name}</h1>
                        <img src={product.image} alt="product image" />
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>Stock:</strong> {product.quantity} servings</p>
                        <p><strong>Price:</strong> {product.price} &nbsp;&nbsp;€</p>
                        <p><strong>Category:</strong> {product.category}</p>

                        <div className="button-group">
                            <Link to={`/products/edit/${productId}`}>
                            <button className="btn-edit">Edit Product</button>
                            </Link>
                            <button className="btn-delete" onClick={deleteProduct}>Delete Product</button>
                        </div>
                    </div>
                </div>
            )}
        </>  
    );
}

export default ProductDetailsPage;