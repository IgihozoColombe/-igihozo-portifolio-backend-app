import React, { useState } from "react";

import { FISH_DATA } from "./FishData";

import Pagination from "../Pager";

function NewPagination(params) {
  const [currentPage, setCurrentPage] = useState(1);

  const data = FISH_DATA;

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
