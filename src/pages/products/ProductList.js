import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import CustomPagination from "../../components/pagination/Pagination";
import ProductCard from "../../components/product-card/ProductCard";
import TextField from "../../components/text-field/TextField";

import productActions from "../../store/actions/ProductAction/actions";

const initialPagination = {
  activePage: 1,
  limit: 10,
  totalData: 0,
};

const ProductList = () => {
  const [paginationData, setPaginationData] = useState(initialPagination);

  const productList = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productActions.getAll({ limit: 10, page: 1 }));
  }, [dispatch]);

  const onSearch = (e) => {
    e.preventDefault();
    setPaginationData({ ...paginationData, activePage: 1 });

    dispatch(
      productActions.getAll({ name: e.target.value, limit: 10, page: 1 })
    );
  };

  const handlePageChange = (value) => {
    setPaginationData({
      ...paginationData,
      activePage: value,
    });

    dispatch(productActions.getAll({ limit: 10, page: value }));
  };

  const onClickAddProduct = () => {
    navigate("/create");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between m-3 flex-wrap">
        <div>
          <form>
            <TextField
              type="text"
              placeholder="Insert product name"
              id="txtName"
              onChange={onSearch}
            ></TextField>
          </form>
        </div>

        <div>
          <Button
            onClick={onClickAddProduct}
            text="Add Product"
            customStyle="btn-primary"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap mb-5">
        {productList?.data?.map((data) => {
          return <ProductCard key={data.id} product={data}></ProductCard>;
        })}
      </div>

      {productList && (
        <div className="d-flex justify-content-center align-items-end">
          <CustomPagination
            activePage={paginationData.activePage}
            limit={paginationData.limit}
            totalData={productList?.pagination?.total_data || 0}
            handlePageChange={handlePageChange}
          ></CustomPagination>
        </div>
      )}
    </div>
  );
};

export default ProductList;
