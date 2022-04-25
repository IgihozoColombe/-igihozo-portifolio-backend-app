import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// import Sidebar from './Sidebar'
// import SalesOrder from './SalesOrder/SalesOrderPageWrapper'
// import SalesInvoice from './SalesOrder/SalesRoute'
// import Sidebar from './Sidebar'
// COMPONENTS
import Layout from "./Layout";
import GroupProfiling from "./GroupProfiling";
import Dashboard from "./Dashboard/Dashboard";
// import GroupProfilingCreate from './GroupProfilingCreate';
// import GroupProfilingDetails from './GroupProfilingDetails';

import Expense from "./Expense/Expense";
import SalesOrder from "./SalesOrder/SalesOrderPageWrapper";
import PurchaseBillWrapper from "./PurchaseBill/PurchaseBillWrapper";
import InventoryWrapper from "./Inventory/InventoryWrapper";
import CollectionPayment from "./CollectionPayment/collectionPayment";
import PondRegistration from "./Pond List/PondRegistration";
import GroupWrapper from "./ExtensionOfficer/GroupWrapper";
import CashAndBankWrapper from "./CashAndBank/CashAndBankWrapper";
import Training from "./Training/Training";
import Wallet from "./Wallet/Wallet";
import SettingsWrapper from "./Settings/SettingsWrapper";
import HarvestCollectionWrapper from "./HarvestCollectionRecording/HarvestCollectionWrapper";
import RecordFeeding from "./RecordFeeding/RecordFeeding";
import Transfer from "./Transfer/Transfer";
import RegularFeedWrapper from "./Feed/RegularFeedWrapper";
import FishHatcheryWrapper from "./ProductionFishHatchery/FishHatcheryWrapper";
import Products from "./Products/Products";
import Booking from "./Booking/Booking";
import GroupCollectionPayment from "./GroupCollectionPayment/GroupCollectionPayment";
import OutboundWrapper from "./Outbound/OutboundWrapper";

import CRMDashboard from "./CRMDashboard/CRMDashboard"
import FinanceDashboard from "./FinanceDashboard/FinanceDashboard"
import SalesDashboard from "./SalesDashboard/SalesDashboard"
import Login from "./Login/Login"
import ProductionDash from "./ProductionDashboard/ProductionDash";
import CommunicationWrapper from "./Communication/CommunicationWrapper"




// ICONS
import homeIcon from "../assets/img/icons/Vectorhome.svg";
import contactIcon from "../assets/img/icons/internet 1-contact.svg";
import salesIcon from "../assets/img/icons/sales 1.svg";
import produceIcon from "../assets/img/icons/Vector-produce.svg";
import inventoryIcon from "../assets/img/icons/inventory 1.svg";
import financeIcon from "../assets/img/icons/accounting 1.svg";
import truckIcon from "../assets/img/icons/truck 1.svg";
import reportsIcon from "../assets/img/icons/report 1.svg";
import productionIcon from "../assets/img/icons/manufacture 2.svg";
import supportIcon from "../assets/img/icons/Vector-support.svg";
import storeIcon from "../assets/img/icons/clarity_store-solid.svg";

// CSS
import "../assets/css/App.css";
import Contract from "./Contract/Contract";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
    icon: homeIcon,
  },
  {
    path: "/login",
    main: () => <Login/>,
    icon: contactIcon,
  },
  {
    path: "/contact",
    main: () => <Contract />,
    icon: contactIcon,
  },
  {
    path: "/sales",
    main: () => <SalesOrder />,
    icon: salesIcon,
  },
  {
    path: "/ponds",
    main: () => <PondRegistration />,
    icon: salesIcon,
  },
  {
    path: "/crm-dashboard",
    main: () => <CRMDashboard />,
    icon: salesIcon,
  },
  {
    path: "/Finance",
    main: () => <FinanceDashboard />,
    icon: salesIcon,
  },
  {
    path: "/sales-dashboard",
    main: () => <SalesDashboard /> ,
    icon: salesIcon,
  },
  {
    path: "/hatchery",
    main: () => <FishHatcheryWrapper />,
    icon: salesIcon,
  },
  {
    path: "/feeds",
    main: () => <RegularFeedWrapper />,
    icon: salesIcon,
  },
  {
    path: "/produce",
    exact: true,
    main: () => <p>produce works</p>,
    icon: produceIcon,
  },
  {
    path: "/communication",
    exact: true,
    main: () =><  CommunicationWrapper/>,
    icon: produceIcon,
  },


  {
    path: "/inventory",
    main: () => <InventoryWrapper />,
    icon: inventoryIcon,
  },

  {
    path: "/wallet",
    main: () => <Wallet />,
    icon: financeIcon,
  },
  {
    path: "/transfer",
    main: () => <Transfer />,
    icon: reportsIcon,
  },
  {
    path: "/expenses",
    main: () => <Expense />,
    icon: financeIcon,
  },
  {
    path: "/cashandbank",
    main: () => <CashAndBankWrapper />,
    icon: inventoryIcon,
  },
  {
    path: "/harvest",
    main: () => <HarvestCollectionWrapper />,
    icon: inventoryIcon,
  },
  {
    path: "/reports",
    main: () => <Contract />,
    icon: reportsIcon,
  },
  {
    path: "/training",
    main: () => <Training />,
    icon: truckIcon,
  },
  {
    path: "/logistics",
    main: () => <p>works</p>,
    icon: truckIcon,
  },
  {
    path: "/productions",
    main: () => <CollectionPayment />,
    icon: produceIcon,
  },

  {
    path: "/extension-officer",
    main: () => <GroupWrapper />,
    icon: productionIcon,
  },

  {
    path: "/products",
    main: () => <Products />,
    icon: produceIcon,
  },

  {
    path: "/Production-Dashboard",
    main: () => <ProductionDash />,
    icon: produceIcon,
  },

  {
    path: "/record",
    main: () => <RecordFeeding />,
    icon: productionIcon,
  },

  {
    path: "/groups",
    main: () => <GroupProfiling />,
    icon: productionIcon,
  },
  {
    path: "/purchase-bill",
    main: () => <PurchaseBillWrapper />,
    icon: supportIcon,
  },

  {
    path: "/outbound",
    main: () => <OutboundWrapper />,
    icon: supportIcon,
  },

  {
    path: "/store",
    main: () => <p>store works</p>,
    icon: storeIcon,
  },
  {
    path: "/settings",
    main: () => <SettingsWrapper />,

    path: "/booking",
    main: () => <Booking />,
    icon: storeIcon,
  },
  {
    path: "/groupcollectionpayment",
    main: () => <GroupCollectionPayment />,
  },
];

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
