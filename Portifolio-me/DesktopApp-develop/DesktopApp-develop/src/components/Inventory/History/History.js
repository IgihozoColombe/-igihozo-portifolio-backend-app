import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
// import VendorCreate from "./VendorCreate";

export default function Order(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [his, setHis] = useState({
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
    ],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "History";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setHis({
      ...his,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-order"}
      model={his}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"history"}
      create={() => (
        <HistoryCreate details={his} onChange={(e) => handleInputChange(e)} />
      )}
      history={history}
    />
  );
}
