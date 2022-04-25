import React from "react";
import DashboardChart from "./DashboardChart";
import DashboardPie from "./DashboardPie";
import wavy from "../../assets/img/icons/wavy.svg";
import {Link } from 'react-router-dom'

const FinanceDashboardContainer = () => {
  const lastTabStyle = {
    borderRadius: "10px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#5c8c24",
    height: "132px",
    width: "100%",
    margin: "20px auto",
    border: " 2px solid #5C8C24",
  };
  const tabStyle = {
    borderRadius: "10px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#5c8c24",
    height: "132px",
    width: "250px",
    margin: "20px auto",
  };
  return (
    <div>
      <div
        style={{ marginBottom: "30px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Link to="/wallet">
        <div
          style={{
            marginBottom: "30px",
            marginRight: "30px",
            border: "2px solid #5C8C24",
            borderRadius: "10px",
            height: "336px",
            padding: "30px",
            width: "442px",
          }}
        >
          <div>
            <h4 style={{ textAlign: "center", fontWeight: "700" }}>Wallet</h4>
            <hr />
            <p style={{ fontWeight: "700", color: "#4a4a4a" }}>
              Total Amount Available
            </p>
            <p
              style={{
                fontSize: "24px",
                color: "#5C8C24",
                marginTop: "-10px",
                marginBottom: "-35px",
              }}
            >
              12,520,000
            </p>
          </div>
          <DashboardChart />
        </div>
          </Link>
          <Link to="/cashandbank/loan">  
         <div
          style={{
            width: "320px",
            height: "336px",
            width: "442px",
            padding: "30px",
            border: "2px solid #5C8C24",
            borderRadius: "10px",
            marginRight: "20px",
            marginTop: "-20px",
          }}
        >
          <div>
            <h4 style={{ textAlign: "center", fontWeight: '700' }}>Loan</h4>
            <hr />
          </div>
          <div
            style={{ marginTop: "-50px" }}
            className="d-flex justify-content-space-between align-items-center"
          >
            <div style={{ marginRight: "20px" }}>
              <p style={{ fontWeight: "700", fontSize: "13px", color: "#4a4a4a" }}>
                Amount Received
              </p>
              <p style={{ fontSize: "24px", color: "#5C8C24", marginTop: '-15px' }}>12,520,000</p>
              <p style={{ fontWeight: "700", fontSize: "13px", color: "#4a4a4a" }}>
                Amount Pending
              </p>
              <p style={{ fontSize: "24px", color: "#5C8C24", marginTop: '-15px' }}>10,520,000</p>
            </div>
            <DashboardPie text="" big="Completed" small="Pending" />
          </div>
        </div>
        </Link>   
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <Link to="/cashandbank/home">  
        <div
          style={{
            width: "320px",
            height: "441px",
            border: "2px solid #5C8C24",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        >
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
                Cash Accounts
              </p>
              <p style={{ fontSize: "36px" }}>1252</p>
            </div>
            <div>
              <img src={wavy} alt={wavy} />
            </div>
          </div>
          <DashboardPie text="" big="Completed" small="Pending" />
        </div>
        </Link>
        <Link to="/cashandbank/bank"> 
        <div
          style={{
            width: "320px",
            height: "441px",
            border: "2px solid #5C8C24",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        >
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
                Bank Accounts
              </p>
              <p style={{ fontSize: "36px" }}>1252</p>
            </div>
            <div>
              <img src={wavy} alt={wavy} />
            </div>
          </div>
          <DashboardPie text="" big="Completed" small="Pending" />
        </div>
        </Link>
        <div
          style={{ height: "441px", marginTop: "-40px" }}
          className="d-flex align-items-center justify-content-space-between flex-column"
        >
          <div style={lastTabStyle}>
            <div style={{ padding: "10px 0 15px 0" }}>
              <p
                style={{
                  padding: "15px 0",
                  color: "#4a4a4a",
                  fontSize: "16px",
                  borderBottom: "1px solid #5c8c24",
                }}
              >
                Collection Payment
              </p>
              <p style={{ fontSize: "36px" }}>335</p>
            </div>
            <div>
              <img src={wavy} alt={wavy} />
            </div>
          </div>
          <Link to="groupcollectionpayment">
          <div
            style={{
              width: "320px",
              height: "287px",
              border: "2px solid #5C8C24",
              borderRadius: "10px",
            }}
          >
            <DashboardPie
              text="Group Collection Payment"
              big="Paid"
              small="Payable"
            />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboardContainer;
