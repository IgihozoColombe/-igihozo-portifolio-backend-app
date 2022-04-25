import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import StockChangesApprovalCreate from "./StockChangesApprovalCreate";

export default function StockChangesApproval(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [stock, setStock] = useState({
    no: "",
    date: "",
    SKUID: "",
    productName: "",
    productCategory: "",
    changeRequired: "",
    reasonForChange: "",
  });

  const tableModel = {
    th: [
      "No",
      "Date",
      "SKUID",
      "Product Name",
      "Product Category",
      "Change Required",
      "Reason For Change",
      "Actions",
    ],
    indexes: [
      "no",
      "date",
      "SKUID",
      "productName",
      "productCategory",
      "changeRequired",
      "reasonForChange",
    ],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "Stock changes approval";

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
      formTitle={"stock changes approval"}
      create={() => (
        <StockChangesApprovalCreate
          details={stock}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
