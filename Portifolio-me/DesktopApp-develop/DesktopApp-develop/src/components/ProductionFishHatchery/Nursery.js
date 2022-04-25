import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import NurseryCreate from "./NurseryCreate";

export default function Nursery(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [nursery, setNursery] = useState({
    transferDate: "",
    transferFrom: "",
    time: "",
    survivalRate: "",
    noTransferred: "",
  });

  const tableModel = {
    th: [
      "Transfer Date",
      "Transfer From",
      "Time",
      "Survival Rate",
      "No Transferred,",
      "actions",
    ],
    indexes: [
      "transferDate",
      "transferFrom",
      "time",
      "survivalRate",
      "noTransferred",
    ],
  };

  const headerModel = [
    {
      name: "Add New",
      evt: () => addGroup(),
    },
  ];

  const heading = "Nursery";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setNursery({
      ...nursery,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-order"}
      model={nursery}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"nursery"}
      create={() => (
        <NurseryCreate
          details={nursery}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
