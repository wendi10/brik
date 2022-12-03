import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";
import Button from "../../components/button/Button";

import productService from "../../services/ProductService";

import { formatToRupiah } from "../../utils/currency";

import "./ProductDetail.css";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productByCategory, setProductByCategory] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    productService.getById(productId).then((resp) => {
      setProductDetail(resp.data);
    });
  }, [productId]);

  useEffect(() => {
    getProductByCategory({ categoryName: productDetail.categoryName });
  }, [productDetail]);

  const getProductByCategory = async (filter) => {
    await productService.getAll(filter).then((resp) => {
      const productByCategory = resp?.data?.data?.filter(
        (data) => data.id !== productDetail.id
      );

      setProductByCategory(productByCategory);
    });
  };

  const onClickButtonBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="d-flex my-3">
        <Button
          onClick={onClickButtonBack}
          text="Back"
          customStyle="btn-light"
        />
      </div>
      <div className="ProductDetail">
        <img
          className="ProductDetail-image"
          src={productDetail.image}
          alt={productDetail.name}
        />

        <h2 className="ProductDetail-name">
          {productDetail?.name} - {productDetail?.categoryName}
        </h2>

        <h1 className="ProductDetail-price">
          {"Rp. " + formatToRupiah(productDetail?.price)}
        </h1>

        <h3 className="ProductDetail-subtitle">Description</h3>
        <p className="ProductDetail-description mb-3">
          {productDetail?.description}
        </p>

        <h3 className="ProductDetail-subtitle">Specifications</h3>
        <div className="d-flex mb-3">
          <div style={{ width: "100px" }}>
            <h3 className="ProductDetail-specification">Height</h3>
            <h3 className="ProductDetail-specification">Width</h3>
            <h3 className="ProductDetail-specification">Length</h3>
            <h3 className="ProductDetail-specification">Weight</h3>
          </div>
          <div style={{ width: "70%" }}>
            <h3 className="ProductDetail-description">
              : {productDetail?.height} Cm
            </h3>
            <h3 className="ProductDetail-description">
              : {productDetail?.width} Cm
            </h3>
            <h3 className="ProductDetail-description">
              : {productDetail?.length} Cm
            </h3>
            <h3 className="ProductDetail-description">
              : {productDetail?.weight} Gram
            </h3>
          </div>
        </div>

        <h3 className="ProductDetail-subtitle">Product with same category</h3>
        <div className="d-flex flex-nowrap" style={{ overflowX: "auto" }}>
          {productByCategory?.length > 0 &&
            productByCategory?.map((data) => {
              return (
                <div key={data.id}>
                  <ProductCard product={data} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
