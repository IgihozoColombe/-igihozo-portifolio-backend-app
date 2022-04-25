import React from "react";
import AvailableStockCard from "./AvailableStockCard";
import SalesCard from "./SalesCard";
import StockCard from "./StockCard";

export default function DashboardContainer() {
  return (
    <div className="table-wrapper table-responsive">
      <div className="table table-borderless text-capitalize m-0 table-sm ">
        <div className="d-flex justify-content-between flex-column">
          <div className="d-flex justify-content-between">
            <StockCard />
            <StockCard />
            <StockCard />
            <StockCard />
          </div>
          <div className="d-flex justify-content-between flex-row">
            <SalesCard />
            <AvailableStockCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
