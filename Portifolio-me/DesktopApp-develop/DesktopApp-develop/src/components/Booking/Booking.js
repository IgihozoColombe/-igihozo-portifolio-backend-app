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

// components
import Feed from "./Feed";
import Fish from "./Fish";
import History from "./History";

const links = [
  {
    path: "/feed",
    name: "Feed",
    main: () => <Feed />,
  },
  {
    path: "/fish",
    name: "Fish",
    main: () => <Fish />,
  },
];

const rightLinks = [
  {
    path: "/fish/feed",
    name: "Feed",
    main: () => <Feed />,
  },
  {
    path: "/fish/fish",
    name: "Fish",
    main: () => <Fish />,
  },
  {
    path: "/fish/history",
    name: "History",
    main: () => <History />,
  },
];

export default function Booking(params) {
  let { path } = useRouteMatch();

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
