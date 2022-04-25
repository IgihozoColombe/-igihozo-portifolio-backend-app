import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import BankCreate from "./BankCreate";

const Bank = (props) => {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [bank, setBank] = useState({
    bankName: "",
    accountTitle: "",
    openingBalance: "",
    date: "",
  });

  const tableModel = {
    th: ["Bank Name", "Account Title", "Opening Balance", "Date", "Actions"],
    indexes: ["bankName", "accountTitle", "openingBalance", "date"],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "Bank Accounts";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setBank({
      ...bank,
      [name]: value,
    });
  };

  return (
    <div>
      <Wrapper
        path={"/purchase-return"}
        model={bank}
        tableModel={tableModel}
        headerModel={headerModel}
        heading={heading}
        smsBtn={false}
        formTitle={"Bank Accounts"}
        create={() => <BankCreate onChange={(e) => handleInputChange(e)} />}
        history={history}
      />
    </div>
  );
};

export default Bank;
