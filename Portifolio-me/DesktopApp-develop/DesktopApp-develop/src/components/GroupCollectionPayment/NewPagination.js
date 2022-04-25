import React, { useState } from "react";

import { GROUP_COLLECTION_PAYMENT } from "./Data";

import Pagination from "../Pager";

function NewPagination(params) {
  const [currentPage, setCurrentPage] = useState(1);

  const data = GROUP_COLLECTION_PAYMENT;

  return (
    <div className="container">
      <Pagination
        currentPage={currentPage}
        onChange={(num) => setCurrentPage(num)}
        totalCount={data.length}
      />
    </div>
  );
}

export default NewPagination;
