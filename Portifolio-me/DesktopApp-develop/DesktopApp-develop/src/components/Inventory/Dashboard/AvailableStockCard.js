import React from "react";
import IdealStockBottom from "./IdealStockCardBottom";
import IdealStockCenter from "./IdealStockCardCenter";
import IdealStockTop from "./IdealStockCardTop";

export default function AvailableStockCard(){
    return(
        <div className="card available-stock-card d-flex justify-content-between flex-column">
            <IdealStockTop/>
            <IdealStockCenter/>
            <IdealStockBottom/>
        </div>
    )
}