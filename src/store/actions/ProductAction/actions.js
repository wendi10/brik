import productTypes from "./type";

import productService from "../../../services/ProductService";

const getAll = (filter) => async (dispatch) => {
  try {
    const res = await productService.getAll(filter);

    dispatch({
      type: productTypes.GET_ALL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    Promise.reject(err);
  }
};

const productActions = {
  getAll,
};

export default productActions;
