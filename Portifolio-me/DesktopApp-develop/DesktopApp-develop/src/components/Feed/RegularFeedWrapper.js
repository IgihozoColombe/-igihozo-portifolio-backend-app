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
import Custom from "./Custom";
import RegularFeed from "./RegularFeed";

const links = [
  {
    path: "/home",
    name: "Regular",
    main: () => <RegularFeed />,
  },
  {
    path: "/custom",
    name: "custom",
    main: () => <Custom />,
  },
];
const rightLinks = [
  {
    path: "/home/feed",
    name: "Feed",
    main: () => "<Feed />",
  },
  {
    path: "/home/fish",
    name: "Fish",
    main: () => "<Fish />",
  },
];

export default function RegularFeedWrapper(props) {
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
          <span style={{ marginLeft: "30px" }}></span>
          <Nav routes={rightLinks} />

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

            <Redirect from="/regular-feed" to="/regular-feed/home" />
          </Switch>
        </main>
      </div>
    </div>
  );
}
