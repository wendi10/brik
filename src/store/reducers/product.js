import productTypes from "../actions/ProductAction/type";

const initialState = [];

function productReducer(products = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case productTypes.GET_ALL:
      return payload;

    default:
      return products;
  }
}

export default productReducer;
