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
import Nursery from "./Nursery";
import FishHatchery from "./FishHatchery";

const links = [
  {
    path: "/home",
    name: "Hatchery",
    main: () => <FishHatchery />,
  },
  {
    path: "/nursery",
    name: "Nursery",
    main: () => <Nursery />,
  },
];

export default function FishHatcheryWrapper(props) {
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

            <Redirect from="/purchase-bill" to="/purchase-bill/home" />
          </Switch>
        </main>
      </div>
    </div>
  );
}
