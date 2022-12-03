import Pagination from "rc-pagination";

import "./Pagination.css";

const CustomPagination = (props) => {
  const { activePage, limit, totalData, handlePageChange } = props;

  return (
    <Pagination
      current={activePage}
      total={totalData}
      defaultPageSize={limit}
      onChange={handlePageChange}
    ></Pagination>
  );
};

export default CustomPagination;
