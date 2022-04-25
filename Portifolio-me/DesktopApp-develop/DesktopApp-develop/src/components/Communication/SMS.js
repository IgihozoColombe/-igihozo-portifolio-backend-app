import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import SMSCreate from "./SMSCreate";

export default function OutboundSMS(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [outboundsms, setOutboundSms] = useState({
    smsProvider: "",
    user: "",
    password: "",
    apiKey: "",
    testSMS: "",
  });
    
  const tableModel = {
    th: [
      "SMS Provider",
      "User",
      "Password",
      "API Key",
      "Test SMS",
      "Actions"
    ],
    indexes: [
      "smsProvider",
      "user",
      "password",
      "apiKey",
      "testSms",
      "actions"
    ],
  };

  const headerModel = [
    {
      name: "Add New",
      evt: () => addGroup(),
    },
  ];  
    
  const heading = "Outbound SMS";
  
  const addGroup = () => {
    history.push(`${path}/create`)
  };
  
  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;
  
    setOutboundSms({
      ...outboundsms,
      [name]: value,
    });
  };
  
  return (
    <Wrapper 
      path={'/communication'}
      model={outboundsms}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={'outbound sms'}
      create={() => <SMSCreate details={outboundsms} onChange={(e) => handleInputChange(e)}/>}
      history={history}
    />
  );
}  

