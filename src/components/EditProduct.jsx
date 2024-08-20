import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from '../config/api'
import axios from "axios";

function EditProduct () {
    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`${API_URL}/products/${productId}`)
            .then((response) => {
                const singleProduct = response.data;
                setName(singleProduct.name);
                setImage(singleProduct.image);
                setDescription(singleProduct.description);
                setQuantity(singleProduct.quantity);
                setPrice(singleProduct.price);
                setCategory(singleProduct.category);
            })
            .catch((error) => console.log(error));
    }, [productId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProduct = { name, image, description, quantity, price, category };

        axios.put(`${API_URL}/products/${productId}`, updatedProduct)
            .then((response) => {
                navigate(`/products/${productId}`);
            })
            .catch((error) => console.log(error));
    };

    return (
      <div className="create-product-container">
        <div className="form-container">
          <h3>Edit Product</h3>

          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label>
              Image URL:
              <input
                type="url"
                name="image"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                required
              />
            </label>

            <label>
              Description:
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>

            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </label>

            <label>
              Price:
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min={0.01}
                step="0.01"
                required
              />
            </label>

            <label>
              Category:
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="hot drinks">Hot Drinks</option>
                <option value="cold drinks">Cold Drinks</option>
                <option value="pastries">Pastries</option>
                <option value="sandwiches">Sandwiches</option>
              </select>
            </label>

            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    );
}

export default EditProduct;