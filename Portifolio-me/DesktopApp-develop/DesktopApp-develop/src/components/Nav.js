import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';


// css 
import '../assets/css/Nav.css'

// ------------------------------model for routes prop ---------------------------
// Routes: Array<Route>

// Route: {
//   path: String => "/purchase-bill" ,
//   name: String => 'Purchase bill',
//   main: function => () => <p>contact works</p>
// }


export default function Nav(props) {

  let { url } = useRouteMatch();

  return (
    <nav className="nav nav-pills flex-column flex-sm-row d-inline-flex">
      {
        props.routes.map((link, index) =>

          <NavLink
            key={index}
            exact={true}
            activeClassName="live"
            className={`nav-link text-sm-center`}
            to={`${url}${link.path}`}>
            {link.name}
          </NavLink>

        )
      }
    </nav>
  );
}
