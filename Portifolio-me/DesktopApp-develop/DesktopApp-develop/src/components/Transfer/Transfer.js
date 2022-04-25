import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import TransferCreate from "./TransferCreate";

export default function Transfer(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [transfer, setTransfer] = useState({
    date: "",
    time: "",
    tankName: "",
    pieces: "",
    balance: "",
    emptyTank: "",
    tank_Name: "",
    pieces: "",
    balance: "",
  });

  const tableModel = {
    th: [
      "date",
      "time",
      "tank Name",
      "pieces",
      "balance",
      "empty Tank",
      "tank Name",
      "pieces",
      "balance",
      "actions",
    ],
    indexes: [
      "date",
      "time",
      "tankName",
      "pieces",
      "balance",
      "emptyTank",
      "tank_Name",
      "pieces",
      "balance",
    ],
  };

  const headerModel = [
    {
      name: "Add New",
      evt: () => addGroup(),
    },
  ];

  const heading = "Transfer";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setTransfer({
      ...transfer,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-return"}
      model={transfer}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"transfer details"}
      create={() => (
        <TransferCreate
          details={transfer}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
