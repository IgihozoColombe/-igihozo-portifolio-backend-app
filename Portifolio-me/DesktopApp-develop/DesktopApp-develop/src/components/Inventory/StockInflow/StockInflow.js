import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import StockInflowCreate from "./StockInflowCreate";

export default function StockInflow(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [stock, setStock] = useState({
    no: "",
    date: "",
    SKUID: "",
    productName: "",
    productCategory: "",
    unitPrice: "",
    unitReceived: "",
    totalValue:"",
  });

  const tableModel = {
    th: [
        "No",
        "Date",
        "SKUID",
        "Product Name",
        "Product Category",
        "Unit Price",
        "Unit Received",
        "Total Value",
      "Actions",
    ],
    indexes: [
        "no",
        "date",
        "SKUID",
        "productName",
        "productCategory",
        "unitPrice",
        "unitReceived",
        "totalValue",
    ],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "Stock inflow";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setStock({
      ...stock,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-order"}
      model={stock}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"stock outflow"}
      create={() => (
        <StockInflowCreate
          details={stock}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
