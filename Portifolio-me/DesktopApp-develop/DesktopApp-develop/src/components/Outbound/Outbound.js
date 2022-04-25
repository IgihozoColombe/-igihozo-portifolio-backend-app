import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import OutboundDetails from "./OutboundDetails";

export default function Outbound(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [outbound, setOutbound] = useState({
    hostName: "",
    port: "",
    user: "",
    password: "",
    gender: "",
    testEmail: "",
  });

  const tableModel = {
    th: [
    "Host Name",
     "Port",
     "User",
     "Password", 
     "gender",
     "test Email",
      "actions"
    ],
    indexes:
    [
      "hostName",
      "port",
      "user",
      "password", 
      "gender",
      "testEmail",
      ],
  };

  const headerModel = [
    {
      name: "Add New",
      evt: () => addGroup(),
    },
  ];

  const heading = "Outbound Mail Server";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setOutbound({
      ...outbound,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-return"}
      model={outbound}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"outbound mail"}
      create={() => (
        <OutboundDetails details={outbound} onChange={(e) => handleInputChange(e)} />
      )}
      history={history}
    />
  );
}
