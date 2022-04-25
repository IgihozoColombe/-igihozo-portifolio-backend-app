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
import "../../assets/css/CollectionPayment.css";
import Nav from "../Nav";

// Components
import Header from "../Header";
import Outbound from "./Outbound";

const links = [
  {
    path: "/home",
    name: "Outbound Mail Server",
    main: () => <Outbound />,
  },
  {
    path: "/",
    name: 'Outgoing SMS',
    main: () => <Outbound/>,
  },
  {
    path: "/.",
    name: 'Outbound Calls',
    main: () => <Outbound />,
  },
];

export default function OutboundWrapper(props) {
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

            <Redirect from="/outbound" to="/outbound/home" />
          </Switch>
        </main>
      </div>
    </div>
  );
}
