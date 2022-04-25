import React, { useState } from "react";
import DashboardChart from "./DashboardChart";
import DashboardPie from "./DashboardPie";
import {Link } from "react-router-dom"
import GroupProfiling from "../GroupProfiling";

const CRMDashboardContainer = () => {
  const [tabs] = useState([
    {
      path: "/farmers",
      title: "Farmers",
      value: 1252,
    },
    {
      path: "/Personnel",
      title: "Personnel",
      value: 70,
    },
    {
      path: "/groups",
      title: "Groups",
      value: 70,
    },
    {
      path: "/contact",
      title: "Contract",
      value: 335,
    },
  ]);

  const tabStyle = {
    border: "2px solid #5C8C24",
    borderRadius: "10px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#5c8c24",
    height: "132px",
    width: "250px",
    marginRight: "10px",
  };
  return (
    <div>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        {tabs.map((tab) => {
          return (
          <Link to={tab.path}>
            <div style={tabStyle}>
              <div style={{ padding: "20px 0 15px 0" }}>
                <p
                  style={{
                    padding: "15px 0",
                    color: "#4a4a4a",
                    fontSize: "16px",
                    borderBottom: "1px solid #5c8c24",
                  }}
                >
                  {tab.title}
                </p>
                <p style={{ fontSize: "36px" }}>{tab.value}</p>
              </div>
              <div>
                <svg
                  width="92"
                  height="65"
                  viewBox="0 0 92 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2038_47807)">
                    <path
                      d="M5.94922 48.4242C7.69001 42.7666 8.95706 37.3946 11.8208 32.1725C13.2645 29.5399 13.1971 26.651 14.7566 24.0991C16.0231 22.0266 16.7942 17.8019 18.5836 16.2878C22.4015 13.0573 24.648 28.3816 25.556 29.9707C27.8998 34.0723 30.5204 57.9039 38.2428 43.8632C40.6448 39.496 44.4289 34.8424 44.4289 29.8134C44.4289 26.1332 46.205 20.4788 50.0908 19.5906C54.1966 18.6521 61.4303 19.0702 63.0921 23.8894C64.6483 28.4025 63.3018 35.2304 63.3018 40.1411C63.3018 42.7032 62.0452 48.2909 65.2415 48.5814C70.6593 49.074 70.8509 39.0785 70.8509 35.2131C70.8509 30.5578 71.4178 21.5217 74.6255 17.913C77.1543 15.0681 80.096 8.51462 81.2834 4.75443C83.1655 -1.2054 84.0619 3.86872 84.0619 7.21839C84.0619 10.8007 84.0619 14.3831 84.0619 17.9654C84.0619 19.8125 85.9492 20.6205 85.9492 22.6837C85.9492 25.0428 85.9492 52.5031 85.9492 54.8622"
                      stroke="#FF0000"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2038_47807"
                      x="0.449219"
                      y="0.5"
                      width="91"
                      height="63.8623"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2038_47807"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2038_47807"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
               </Link> 
          );
         
        }
      
        )}
      </div>
      
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/training">
        <div
          style={{
            width: "320px",
            height: "287px",
            border: "2px solid #5C8C24",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        >
          <DashboardPie text="Training" big="Completed" small="Pending" />
        </div>
        </Link>
        <Link to="/reports">
        <div
          style={{
            width: "320px",
            height: "287px",
            border: "2px solid #5C8C24",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        >
          <DashboardPie text="Reporting" big="Solved" small="Pending" />
        </div>
        </Link>
        <Link to="/extension-officer">
        <div
          style={{
            width: "320px",
            height: "287px",
            border: "2px solid #5C8C24",
            borderRadius: "10px",
          }}
        >
          <DashboardPie text="Extension officers" big="Active" small="Inactive" />
        </div>
        </Link>
      </div>
      <Link to="/ponds">
      <div
        style={{
          marginTop: "30px",
          border: "2px solid #5C8C24",
          borderRadius: "10px",
        }}
      >
        <DashboardChart />
      </div>
      </Link>
    </div>
    
  );
};

export default CRMDashboardContainer;
