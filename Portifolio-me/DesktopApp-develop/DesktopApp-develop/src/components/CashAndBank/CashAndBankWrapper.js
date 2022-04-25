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
import Header from "../Header";
import Cash from "./Cash";
import Loan from "./Loan";
import Bank from "./Bank";

const links = [
  {
    path: "/home",
    name: "Bank Accounts",
    main: () => <Bank />,
  },
  
  {
    path: "/cash",
    name: "Cash In Hand",
    main: () => <Cash />,
  },
  {
    path: "/loan",
    name: "Loan Accounts",
    main: () => <Loan />,
  },
];

export default function CashAndBankWrapper(props) {
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

            <Redirect from="/harvest" to="/harvest/home" />
          </Switch>
        </main>
      </div>
    </div>
  );
}
