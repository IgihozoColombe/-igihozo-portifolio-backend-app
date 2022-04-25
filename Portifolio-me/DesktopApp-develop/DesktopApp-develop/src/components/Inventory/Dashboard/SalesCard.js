import React from "react";
import '../../../assets/css/_inventory/Dashboard.css'
import SalesChart from "./SalesChart";

export default function SalesCard() {
  return (
    <div>
      <div className="card sales-card" >
        <SalesChart/>
      </div>
    </div>
  );
}
