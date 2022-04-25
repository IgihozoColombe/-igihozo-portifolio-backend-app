import React from "react";
import "../../../assets/css/_inventory/Dashboard.css";

export default function IdealStockTop() {
  return (
    <div className="card ideal-top-card d-flex justify-content-around flex-row">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Product i
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
      <div className="card d-flex align-items-center border-0">
        <h6 className="card-title font-weight-bold">Ideal Stock</h6>
        <hr />
        <h3>252</h3>
      </div>
      <div className="card d-flex align-items-center border-0 ">
        <h6 className="card-title font-weight-bold">Available Stock</h6>
        <hr className="" />
        <h3>252</h3>
      </div>
    </div>
  );
}
