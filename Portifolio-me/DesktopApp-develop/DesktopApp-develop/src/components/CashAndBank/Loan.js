import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import LoanCreate from "./LoanCreate";

const Loan = () => {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [loan, setLoan] = useState({
    lenderName: "",
    accountNo: "",
    currentBalance: "",
    loanDate: "",
    tenor: "",
    interestRate: "",
    processingFee: "",
  });

  const tableModel = {
    th: [
      "Lender Name",
      "Account No",
      "Current Balance",
      "Loan Date",
      "Tenor",
      "Interest Rate",
      "Processing Fee",
      "Actions",
    ],
    indexes: [
      "lenderName",
      "accountNo",
      "currentBalance",
      "loanDate",
      "tenor",
      "interestRate",
      "processingFee",
    ],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "Loan Accounts";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setLoan({
      ...loan,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-order"}
      model={loan}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"Loan Accounts"}
      create={() => (
        <LoanCreate details={loan} onChange={(e) => handleInputChange(e)} />
      )}
      history={history}
    />
  );
};

export default Loan;
