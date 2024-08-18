import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/api";
import axios from "axios";


function ProductDetailsPage (props) {

    const [product, setProduct] = useState(null);

    const { productId } = useParams();

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


    return (
      <div className="ProjectDetailsPage">
        {product && (
          <>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </>
        )}

        <Link to={`/products/edit/${productId}`}>
          <button>Edit Product</button>
        </Link>

      </div>
    );
}

export default ProductDetailsPage;

