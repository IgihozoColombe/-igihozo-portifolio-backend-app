import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import CashCreate from "./CashCreate";

const Cash = () => {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [cash, setCash] = useState({
    addCash: "",
    reduceCash: "",
    amount: "",
    date: "",
  });

  const tableModel = {
    th: ["Add Cash", "Reduce Cash", "Amount", "Date", "Actions"],
    indexes: ["addCash", "reduceCash", "amount", "date"],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "Cash In Hand";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setCash({
      ...cash,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-order"}
      model={cash}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"Cash in hand"}
      create={() => (
        <CashCreate details={cash} onChange={(e) => handleInputChange(e)} />
      )}
      history={history}
    />
  );
};

export default Cash;
