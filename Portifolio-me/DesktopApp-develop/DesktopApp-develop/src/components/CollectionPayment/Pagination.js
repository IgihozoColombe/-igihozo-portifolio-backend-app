import React from "react";

function Pagination({ postsPerPage, totalsPosts, paginate }) {
  const orderNumber = [];

  for (let i = 1; i <= Math.ceil(totalsPosts / postsPerPage); i++) {
    orderNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {orderNumber.map((number) => (
          <li key={number} className="page-item">
            <p onClick={() => paginate(number)} className="page-link">
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;
