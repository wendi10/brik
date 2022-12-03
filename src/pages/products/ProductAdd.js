import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import TextField from "../../components/text-field/TextField";

import productService from "../../services/ProductService";

import "./ProductAdd.css";

const initialState = {
  categoryId: 0,
  categoryName: "",
  sku: "",
  name: "",
  description: "",
  weight: "",
  width: 0,
  length: 0,
  height: 0,
  image: "",
  price: 0,
};

const ProductAdd = () => {
  const [requestBody, setRequestBody] = useState(initialState);
  const [isSubmitted, setIsSubmited] = useState(false);

  const navigate = useNavigate();

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();

    setRequestBody({ ...requestBody, [name]: value });
  };

  const onClickAddProduct = () => {
    setIsSubmited(true);
    setRequestBody({
      ...requestBody,
      price: parseInt(requestBody.price),
      width: parseInt(requestBody.width),
      weight: parseInt(requestBody.weight),
      height: parseInt(requestBody.height),
      length: parseInt(requestBody.categoryId),
      categoryId: parseInt(requestBody.categoryId),
    });

    if (isAllDataFilled) {
      productService.create(requestBody).then(() => {
        setRequestBody(initialState);
        alert("Success Add Product!!");
        navigate("/");
      });
    }
  };

  const isError = (field) => {
    return !requestBody[field] && isSubmitted;
  };

  const isAllDataFilled = () => {
    for (let key in requestBody) {
      if (requestBody[key] !== 0 && requestBody[key] !== "") return false;
    }

    return true;
  };

  return (
    <div className="container ProductAdd">
      <div className="ProductAdd-title mb-3 mt-3">Add Product</div>
      <form>
        <div className="mb-3">
          <TextField
            type="text"
            placeholder="Insert Product Name"
            id="txtName"
            label="Name"
            name="name"
            onChange={onFieldChange}
          ></TextField>

          {isError("name") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="number"
            placeholder="Insert Category ID"
            id="txtCategoryId"
            label="Category ID"
            name="categoryId"
            onChange={onFieldChange}
          ></TextField>

          {isError("categoryId") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="text"
            placeholder="Insert Category Name"
            id="txtCategoryName"
            label="Category Name"
            name="categoryName"
            onChange={onFieldChange}
          ></TextField>

          {isError("categoryName") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="text"
            placeholder="Insert Description"
            id="txtDescription"
            label="Description"
            name="description"
            onChange={onFieldChange}
          ></TextField>

          {isError("description") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="number"
            placeholder="Insert Height"
            id="txtHeight"
            label="Height"
            name="height"
            onChange={onFieldChange}
          ></TextField>

          {isError("height") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="text"
            placeholder="Insert Image URL"
            id="txtImg"
            label="Image Url"
            name="image"
            onChange={onFieldChange}
          ></TextField>

          {isError("image") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="number"
            placeholder="Insert Length"
            id="txtLength"
            label="Length"
            name="length"
            onChange={onFieldChange}
          ></TextField>

          {isError("length") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="number"
            placeholder="Insert Price"
            id="txtPrice"
            label="Price"
            name="price"
            onChange={onFieldChange}
          ></TextField>

          {isError("price") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="text"
            placeholder="Insert SKU"
            id="txtSku"
            label="SKU"
            name="sku"
            onChange={onFieldChange}
          ></TextField>

          {isError("sku") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="number"
            placeholder="Insert Weight"
            id="txtWeight"
            label="Weight"
            name="weight"
            onChange={onFieldChange}
          ></TextField>

          {isError("weight") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>

        <div className="mb-3">
          <TextField
            type="number"
            placeholder="Insert Width"
            id="txtWidth"
            label="Width"
            name="width"
            onChange={onFieldChange}
          ></TextField>

          {isError("width") && (
            <span className="ProductAdd-error">Must be Filled!</span>
          )}
        </div>
      </form>

      <div className="d-grid gap-2 my-2">
        <Button
          text="Add Product"
          customStyle="btn-primary"
          onClick={onClickAddProduct}
        />
      </div>
    </div>
  );
};

export default ProductAdd;
