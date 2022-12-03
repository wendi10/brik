import http from "./HttpCommon";

const getAll = (filter) => {
  return http.get("/products", { params: filter });
};

const getById = (id) => {
  return http.get("/products/detail", { params: { id } });
};

const create = (data) => {
  return http.post("products", data);
};

const productService = {
  getAll,
  getById,
  create,
};

export default productService;
