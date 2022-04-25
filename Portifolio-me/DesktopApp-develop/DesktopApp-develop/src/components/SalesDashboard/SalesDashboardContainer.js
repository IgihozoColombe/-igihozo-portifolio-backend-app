import React, { useState } from "react";
import DashboardChart from "./DashboardChart";
import badge from '../../assets/img/icons/badge.svg'

const SalesDashboardContainer = () => {
  const [data] = useState([
    {
      title: "Sales Order",
      color: "yellow",
    },
    {
      title: "Sales Invoice",
      color: "red",
    },
    {
      title: "Sales Return/ Credit Note",
      color: "#2D9CDB",
    },
    {
      title: "Purchase Bill",
      color: "#034115",
    },
  ]);
  const [data1] = useState([
    {
      title: "Purchase Order",
      color: "#00FFF0",
    },
    {
      title: "Payout",
      color: "#F708FC",
    },
    {
      title: "Purchase Return",
      color: "#B0A5A5",
    },
    {
      title: "Booking",
      color: "#FF9900",
    },
  ]);

  
  return (
    <div>
      <div>
        <div
          style={{
            marginBottom: "30px",
            marginRight: "30px",
            border: "2px solid #5C8C24",
            borderRadius: "10px",
            height: "336px",
            padding: "30px",
          }}
        >
          <div>
            <h6 style={{ marginLeft:"20px", textAlign: "left", fontWeight: "700" }}>Total Revenue</h6>
          </div>
          <DashboardChart />
        </div>
      </div>
      <div style={gridStyle}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center"
              style={boxStyle}
            >
              <p style={{paddingTop: '8px'}}>{item.title}</p>
              <div style={{position: "absolute", right: '-3'}}>
              <svg width="14" height="50" viewBox="0 0 14 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="33.8813" width="17.763" height="10.292" transform="rotate(-90 0 33.8813)" fill={item.color} />
                <path d="M0 16.119L10.3316 2.16011L10.3316 30.0779L0 16.119Z" fill={item.color} />
                <path d="M0 33.8822L10.3316 19.9233L10.3316 47.841L0 33.8822Z" fill={item.color} />
              </svg>
              </div>
            </div>
          );
        })}
      </div>
      <div style={gridStyle}>
        {data1.map((item, index) => {
          return (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center mt-5"
              style={boxStyle}
            >
              <p style={{paddingTop: '8px'}}>{item.title}</p>
              <div style={{position: "absolute", right: '-3'}}>
              <svg width="14" height="50" viewBox="0 0 14 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="33.8813" width="17.763" height="10.292" transform="rotate(-90 0 33.8813)" fill={item.color} />
                <path d="M0 16.119L10.3316 2.16011L10.3316 30.0779L0 16.119Z" fill={item.color} />
                <path d="M0 33.8822L10.3316 19.9233L10.3316 47.841L0 33.8822Z" fill={item.color} />
              </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const gridStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    textAlign: 'center',
  };
const boxStyle = {
    width: "250px",
    height: "100px",
    border: "2px solid #5C8C24",
    borderRadius: "10px",
    fontWeight: "700",
    position: "relative",
    color: "#5C8C24"
  }

export default SalesDashboardContainer;
