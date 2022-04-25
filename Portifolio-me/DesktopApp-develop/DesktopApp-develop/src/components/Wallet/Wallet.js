import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import WalletCreate from "./WalletCreate";

export default function Order(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [wallet, setWallet] = useState({
    date: "",
    time: "",
    farmerUIN: "",
    amount: "",
  });

  const tableModel = {
    th: ["date", "time", "Farmer UIN", "Amount", "actions"],
    indexes: ["date", "time", "farmerUIN", "amount"],
  };

  const headerModel = [
    {
      name: "Add New",
      evt: () => addGroup(),
    },
  ];

  const heading = "Wallet";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setWallet({
      ...wallet,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-return"}
      model={wallet}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"Credit Account"}
      create={() => (
        <WalletCreate details={wallet} onChange={(e) => handleInputChange(e)} />
      )}
      history={history}
    />
  );
}
