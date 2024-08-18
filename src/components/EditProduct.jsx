// src/pages/EditProjectPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from '../config/api'
import axios from "axios";


function EditProduct() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const { productId } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {           
        axios.get(`${API_URL}/products/${productId}`)
            .then((response) => {
                const singleProduct = response.data;
                setName(singleProduct.name);
                setDescription(singleProduct.description);
                setPrice(singleProduct.price);
                setCategory(singleProduct.category)
            })
            .catch((error) => console.log(error));
        
    }, [productId]);

    const handleSubmit = (e) => {                        
        e.preventDefault();
        
        const newProduct = { name, description, price, category };

        axios.put(`${API_URL}/products`, newProduct)
            .then((response) => {
                navigate(`/projects/${productId}`);
            })
            .catch((error) => console.log(error));
    };

    const deleteProduct = () => {                    

        axios.delete(`${API_URL}/products/${productId}`)
            .then(() => {
                navigate("/products");
            })
            .catch((err) => console.log(err));
    };  

    return (
        <div>
            <h3>Add Product</h3>
        
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label>Description:
                    <textarea
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label>Price:
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>

                <label>Category:
                    <select
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="hot drinks">Hot Drinks</option>
                        <option value="cold drinks">Cold Drinks</option>
                        <option value="pastries">Pastries</option>
                        <option value="sandwiches">Sandwiches</option>
                    </select>
                </label>

                <button type="submit">Update</button>

                <button onClick={deleteProduct}>Delete Product</button>

            </form>
        </div>
    );
}

    
export default EditProduct;
