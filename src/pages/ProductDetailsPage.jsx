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
      
      useEffect(()=> {          
        getProduct();
      }, [] );

    const deleteProduct = () => {                    

      axios.delete(`${API_URL}/products/${productId}`)
          .then(() => {
              navigate("/products");
          })
          .catch((err) => console.log(err));
    };  



    return (
      <div className="ProjectDetailsPage">
        {product && (
          <>
            <h1>{product.name}</h1>
            <p>Description: {product.description}</p>
            <p>Stock: {product.quantity} servings</p>
            <p>Price: {product.price} €</p>
            <p>Category: {product.category}</p>
          </>
        )}

        <Link to={`/products/edit/${productId}`}>
          <button>Edit Product</button>
        </Link>

        <button onClick={deleteProduct}>Delete Product</button>

      </div>
    );
}

export default ProductDetailsPage;

