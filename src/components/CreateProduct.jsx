import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";
import axios from "axios";

function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { name, description, price, category };
    axios
      .post(`${API_URL}/products`, newProduct)
      .then((response) => {
        navigate("/projects");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Add Product</h3>

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
          Description:
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
