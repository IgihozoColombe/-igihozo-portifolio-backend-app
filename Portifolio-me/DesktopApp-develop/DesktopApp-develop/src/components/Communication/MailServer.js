import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import MailServerDetails from "./MailServerDetails";

export default function MailServer(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [mailserver, setMailServer] = useState({
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
      "Gender",
      "Test Email",
      "Actions"
    ],
    indexes: [
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

    setMailServer({
      ...mailserver,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/communication"}
      model={mailserver}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"outbound mail"}
      create={() => (
        <MailServerDetails details={outbound} onChange={(e) => handleInputChange(e)} />
      )}
      history={history}
    />
  );
}
