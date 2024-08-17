import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


function ProductForm (props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {                        
        e.preventDefault();
     
        const requestBody = { name, description };
        axios.post(`${API_URL}/products`, requestBody)
            .then((response) => {
                navigate("/projects");
            })
            .catch((error) => console.log(error));
    };
    

    return (
        <div>
            <h3>Add Product</h3>
        
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
        
                <label>Description:</label>
                <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
        
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProductForm;

