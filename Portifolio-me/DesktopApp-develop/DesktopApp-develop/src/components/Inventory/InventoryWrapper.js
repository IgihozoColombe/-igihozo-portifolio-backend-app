import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";

// css
import "../../assets/css/PurchaseBill.css";
import Nav from "../Nav";

// Components
import Dashboard from "./Dashboard/Dashboard";
import Vendor from "./Vendor/Vendor";
import StockMasterList from "./StockMasterList/StockMasterList";
import StockInflow from "./StockInflow/StockInflow";
import StockOutflow from "./StockOutflow/StockOutflow";
import StockChangesApproval from "./StockChangesApproval/StockChangesApproval";
import History from "./History/History";

const links = [
  {
    path: "/home",
    name: "dashboard",
    main: () => <Dashboard />,
  },
  {
    path: "/vendor",
    name: "vendor",
    main: () => <Vendor />,
  },
  {
    path: "/master_list",
    name: "Stock Master List",
    main: () => <StockMasterList />,
  },
  {
    path: "/stock_inflow",
    name: "Stock Inflow",
    main: () => <StockInflow />,
  },
  {
    path: "/stock_outflow",
    name: "Stock Outflow",
    main: () => <StockOutflow />,
  },
  {
    path: "/stock_changes",
    name: "Stock Changes Approval",
    main: () => <StockChangesApproval />,
  },
  {
    path: "/history",
    name: "History",
    main: () => <History />,
  },
];

export default function InventoryWrapper(props) {
  let { path } = useRouteMatch();

  const addGroup = () => {
    $("#createGroup").modal("show");
  };

  const editGroup = (group) => {
    setSelected(group);

    $("#profileDetails").modal("show");
  };

  const delGroup = (group) => {
    groupService
      .delete(group)
      .then((res) => (changed ? setChanged(false) : setChanged(true)));
  };

  return (
    <div className="container-fluid p-0">
      <div>
        <main role="main">
          <Nav routes={links} />

          <Switch>
            {links.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index.toString()}
                path={`${path}${route.path}`}
                children={<route.main />}
              />
            ))}

            <Redirect from="/dashboard" to="/dashboard/home" />
          </Switch>
        </main>
      </div>
    </div>
  );
}
