import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";
import axios from "axios";

function ProductDetailsPage () {
  
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    const navigate = useNavigate();

    const getProduct = () => {
        axios
            .get(`${API_URL}/products/${productId}`)
            .then((response) => {
                const singleProduct = response.data;
                setProduct(singleProduct);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getProduct();
    }, []);

    const deleteProduct = () => {
        axios.delete(`${API_URL}/products/${productId}`)
            .then(() => {
                navigate("/products");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="product-details-container">
            <div className="details-card-container">
            {product && (
                <>
                    <h1>{product.name}</h1>
                    <img src={product.image} alt="product image" />
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Stock:</strong> {product.quantity} servings</p>
                    <p><strong>Price:</strong> {product.price} €</p>
                    <p><strong>Category:</strong> {product.category}</p>
                </>
                )}

                <div className="button-group">
                    <Link to={`/products/edit/${productId}`}>
                    <button className="btn-edit">Edit Product</button>
                    </Link>
                    <button className="btn-delete" onClick={deleteProduct}>Delete Product</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;