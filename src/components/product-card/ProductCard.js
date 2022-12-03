import { Link } from "react-router-dom";

import "./ProductCard.css";

import { formatToRupiah } from "../../utils/currency";

const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="ProductCard">
      <Link to={`/${product.id}`}>
        <img className="Product-image" src={product.image} alt={product.name} />

        <h2 className="Product-title">{product?.name}</h2>
        <h4 className="Product-category">{product?.categoryName}</h4>

        <h1 className="Product-price">
          {"Rp. " + formatToRupiah(product?.price)}
        </h1>
      </Link>
    </div>
  );
};

export default ProductCard;
