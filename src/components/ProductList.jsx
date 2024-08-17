import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";

import axios from "axios";

function ProductList () {

    const [products, setProducts] = useState(null);
 
    const getAllProducts = () => {
        axios.get(`${API_URL}/products`)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
        };
 
    useEffect(() => {
        getAllProducts();
    }, [] );
 

    return (
        <div>
      
            {products && products.map((product) => {
                return (
                    <div key={product.id} >
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
