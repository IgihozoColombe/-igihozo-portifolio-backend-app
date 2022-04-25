import React from "react";
import fd from "../../Images/Group.png";
import sales from "../../Images/sales.png";
import produce from "../../Images/Produce.png";
import production from "../../Images/production.png";
import inventory from "../../Images/inventory.png";
import expense from "../../Images/expense.png";
import report from "../../Images/report.png";
import truck from "../../Images/truck.png";
import support from "../../Images/support.png";
import finance from "../../Images/finance.png";
import "../../assets/css/_example/dashboad.css";
import "../../assets/css/Sidebar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container my-5 px-2 dashboard">
      <div className="my-5 mx-3">
        <div className="row">
          <Link
            to="/contact"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={fd} alt={fd} />
            <p className="font-weight-bold dashboardlist">CRM</p>
          </Link>

          <Link
            to="/sales"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={sales} alt={sales} />
            <p className="font-weight-bold dashboardlist">Sales</p>
          </Link>

          <Link
            to="/produce"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 offset-md-1 mb-5 rounded"
          >
            <img src={produce} alt={produce} />
            <p className="font-weight-bold dashboardlist">Produce</p>
          </Link>

          <Link
            to="/inventory"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={inventory} alt={inventory} />
            <p className="font-weight-bold dashboardlist"> Inventory</p>
          </Link>

          <Link
            to="/finance"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={finance} alt={finance} />
            <p className="font-weight-bold dashboardlist">Finance</p>
          </Link>

          <Link
            to="/expenses"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={expense} alt={expense} />
            <p className="font-weight-bold dashboardlist">Expense</p>
          </Link>

          <Link
            to="/harvest"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={inventory} alt="harvest" />
            <p className="font-weight-bold dashboardlist">Harvest</p>
          </Link>

          <Link
            to="/reports"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 offset-md-1 mb-5 mb-5 rounded"
          >
            <img src={report} alt={report} />
            <p className="font-weight-bold dashboardlist">Reports</p>
          </Link>

          <Link
            to="/logistics"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={truck} alt={truck} />
            <p className="font-weight-bold dashboardlist">Logistics</p>
          </Link>

          <Link
            to="/groups"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={production} alt={production} />
            <p className="font-weight-bold dashboardlist">Production</p>
          </Link>

          <Link
            to="/purchase-bill"
            className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded"
          >
            <img src={support} alt={support} />
            <p className="font-weight-bold dashboardlist">Support</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
