import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

// css
import "../assets/css/Layout.css";

// // ICONS
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

// components

import FishHatcheryWrapper from "./ProductionFishHatchery/FishHatcheryWrapper";

import Sidebar from "./Sidebar";
import Search from "./Search";
import HarvestCollectionWrapper from "./HarvestCollectionRecording/HarvestCollectionWrapper";
import RecordFeeding from "./RecordFeeding/RecordFeeding";
import RegularFeedWrapper from "./Feed/RegularFeedWrapper";
import Booking from "./Booking/Booking";
import OutboundWrapper from "./Outbound/OutboundWrapper";

import Transfer from "./Transfer/Transfer";

import Products from "./Products/Products";

import CRMDashboard from "./CRMDashboard/CRMDashboard"
import FinanceDashboard from "./FinanceDashboard/FinanceDashboard"
import SalesDashboard from "./SalesDashboard/SalesDashboard"
import Login from "./Login/Login"
import ProductionDash from "./ProductionDashboard/ProductionDash";
import CommunicationWrapper from "./Communication/CommunicationWrapper"





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
    main: () => <p>contact works</p>,
    icon: contactIcon,
  },
  {
    path: "/sales",
    main: () => <SalesOrder />,
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
    main: () => <p>inventory works</p>,
    icon: inventoryIcon,
  },

  {
    path: "/transfer",
    main: () => <Transfer />,
    icon: reportsIcon,
  },
  {
    path: "/expenses",
    main: () => <Expenses />,
    icon: financeIcon,
  },

  {
    path: "/harvest",
    main: () => <HarvestCollectionWrapper />,
    icon: inventoryIcon,
  },
  {
    path: "/reports",
    main: () => <p>Reports works</p>,
    icon: reportsIcon,
  },
  {
    path: "/logistics",
    main: () => <p>works</p>,
    icon: truckIcon,
  },
  {
    path: "/productions",
    main: () => <p>Productions</p>,
    icon: produceIcon,
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
];

const Layout = ({ children }) => {
  const main = useRef(null);

  let location = useLocation();

  const [sideOpen, setSideOpen] = useState(true);

  useEffect(() => {
    sideOpen
      ? (main.current.style.marginLeft = "254px")
      : (main.current.style.marginLeft = "17px");
  }, [sideOpen]);

  return (
    <React.Fragment>
      <div className="container-fluid p-0">
        <Sidebar
          isOpen={sideOpen}
          side={(bool) => setSideOpen(bool)}
          links={routes}
        />

        <main style={{ transition: "0.5s" }} ref={main} className="px-4">
          {location.pathname !== "/" && <Search />}
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};
export default Layout;
