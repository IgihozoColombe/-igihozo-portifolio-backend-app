import React from "react";
import '../../../assets/css/_inventory/Dashboard.css'

export default function StockCard() {
  return (
    <div>
      <div className="card stock-card" >
        <h5 className="card-title font-weight-bold">Available Stock Now</h5>
        <hr className="stock-card"/>
        <h1>252</h1>
      </div>
    </div>
  );
}
