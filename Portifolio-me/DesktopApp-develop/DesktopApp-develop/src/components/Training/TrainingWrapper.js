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
import Training from "./Training";

const links = [
  {
    path: "/home",
    name: "Purchase bill",
    main: () => <PurchaseBill />,
  },
  {
    path: "/payout",
    name: "payout",
    main: () => <Payout />,
  },
  {
    path: "/order",
    name: "Purchase order",
    main: () => <Order />,
  },
  {
    path: "/return",
    name: "Purchase return",
    main: () => <Return />,
  },
];

export default function TrainingWrapper(props) {
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
          {/* <Nav routes={links} /> */}

          {/* <Switch>
            {links.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index.toString()}
                path={`${path}${route.path}`}
                children={<route.main />}
              />
            ))}

            <Redirect from="/purchase-bill" to="/purchase-bill/home" />
          </Switch> */}
        </main>
      </div>
    </div>
  );
}
