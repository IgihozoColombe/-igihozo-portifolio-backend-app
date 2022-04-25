import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import VendorCreate from "./VendorCreate";

export default function Order(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [vendor, setVendor] = useState({
    no: "",
    date: "",
    companyName: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    productName: "",
    SKUID: "",
    price: "",
    qty: "",
    total: "",
    term: "",
    status: "",
  });

  const tableModel = {
    th: [
      "No",
      "Date",
      "Company Name",
      "Contact Name",
      "Phone Number",
      "Email",
      "Product Name",
      "SKU ID",
      "Price",
      "Qty",
      "Total",
      "Term",
      "Status",
      "Actions",
    ],
    indexes: [
      "no",
      "date",
      "companyName",
      "contactName",
      "phoneNumber",
      "email",
      "productName",
      "SKUID",
      "price",
      "qty",
      "total",
      "term",
      "status",
    ],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "Vendor";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setVendor({
      ...vendor,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-order"}
      model={vendor}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"vendor"}
      create={() => (
        <VendorCreate details={vendor} onChange={(e) => handleInputChange(e)} />
      )}
      history={history}
    />
  );
}
