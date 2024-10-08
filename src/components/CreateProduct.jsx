import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";
import axios from "axios";

function CreateProduct () {
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { name, image, description, quantity, price, category };
    axios
      .post(`${API_URL}/products`, newProduct)
      .then((response) => {
        navigate("/products");
      })
      .catch((error) => console.log(error));
  };

  return (

    <div className="create-product-container">
      <div className="form-container">
        <h3>ADD PRODUCT</h3>

        <form onSubmit={handleSubmit}>
          <label>Name
            <input
              type="text"
              name="name"
              placeholder="Espresso"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>Image URL
            <input
              type="url"
              name="image"
              placeholder="https://example.com/path/to/placeholder-image.jpg"
              value={image}
              onChange={(e) => { setImage(e.target.value) }}
              required
            />
          </label>

          <label>Description
            <textarea
              name="description"
              placeholder="Espresso is a shot of concentrated coffee made..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label>Quantity
            <input
              type="number"
              name="quantity"
              placeholder="120"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>

          <label>Price
            <input
              type="number"
              name="price"
              placeholder="2.3"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min={0.01}  
              step="0.01"  
              required
            />
          </label>

          <label>Category
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

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;