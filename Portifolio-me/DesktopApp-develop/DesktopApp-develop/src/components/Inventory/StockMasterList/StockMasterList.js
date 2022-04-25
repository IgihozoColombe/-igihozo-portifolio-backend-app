import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import MasterStockCreate from "./MasterStockCreate";

export default function MasterStock(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [stock, setStock] = useState({
    no: "",
    SKUID: "",
    productName: "",
    productCategory: "",
    unitPrice: "",
    idealStockVolume: "",
    recorderLevel: "",
    availableStock: "",
    availableStockValue: "",
    totalValue:"",
  });

  const tableModel = {
    th: [
      "No",
      "SKUID",
      "Product Name",
      "Product Category",
      "Unit Price",
      "Ideal Stock Volume",
      "RecorderL evel",
      "Available Stock",
      "Available Stock Value",
        "Total Value",
      "Actions",
    ],
    indexes: [
      "no",
      "SKUID",
      "productName",
      "productCategory",
      "unitPrice",
      "idealStockVolume",
      "recorderLevel",
      "availableStock",
      "availableStockValue",
        "totalValue",
    ],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "Master Stock List";

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
      formTitle={"master stock"}
      create={() => (
        <MasterStockCreate
          details={stock}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
