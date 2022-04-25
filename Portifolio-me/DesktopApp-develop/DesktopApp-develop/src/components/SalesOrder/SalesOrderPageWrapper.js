import React from 'react';
import '../../assets/css/App.css';
import {  HashRouter as Router,
  Switch,
  Route, 
  useRouteMatch, 
  Redirect
} from 'react-router-dom/cjs/react-router-dom.min';
import SalesOrder from './SalesOrder';
import SalesInvoice from "./SalesInvoice";
import PaymentIn from "./PaymentIn";
import DeliveryOrder from "./DeliveryOrder";
import SalesReturn from "./SalesReturn";
import Nav from '../Nav';

const links = [
  {
    path: "/home",
    name: 'Sales Order',
    main: () => <SalesOrder />,

  },
  {
    path: "/invoice",
    name: 'Sales Invoice',
    main: () => <SalesInvoice />,
  },
  {
    path: "/paymentIn",
    name: 'Payment In',
    main: () => <PaymentIn />,
  },
  {
    path: "/delivery",
    name: 'Delivery Order',
    main: () => <DeliveryOrder />,
  },
  {
    path: "/return",
    name: 'Sales Return',
    main: () => <SalesReturn />,
  }
]

export default function SalesOrderPageWrapper(props) {
  
  let { path } = useRouteMatch()

  return (
    <div className="container-fluid p-0">
     
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
          
          <Redirect from="/sales" to="/sales/home" />
        </Switch>

      </main>
      
    </div>
  );
}


