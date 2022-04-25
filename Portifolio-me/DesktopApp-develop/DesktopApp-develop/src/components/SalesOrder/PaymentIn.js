import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import PaymentInCreate from './PaymentInCreate';

export default function Order(props) {

  let history = useHistory()
  let { path } = useRouteMatch()

  const [payout, setPayout] = useState({
    id: 1,
    customerName: '',
    addBalance: '',
    paymentType: '',
    recieptNo: '',
    date: '',
    amountPaid: '',
    comment: ''
  })

  const tableModel = {
    th: [
        "RecieptNo",
        "CustomerName",
        "PaymentType",
        "ReceivedAmount",
        "Date",
        "Actions"
    ],
      indexes: [
      "receiptNo",
      "customerName",
      "paymentType",
      "receivedAmount",
      "date",
    ]
  }

  const headerModel = [
    {
      name: "add new",
      evt: () => addGroup()
    }
  ]

  const heading = "Payment In"

  const addGroup = () => {
    history.push(`${path}/create`)
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setPayout({
      ...payout,
      [name]: value
    });
  }

  return (
    <Wrapper
      path={"/PaymentIn"}
      model={payout}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={'purchase payout'}
      create={() => <PaymentInCreate details={payout} onChange={(e) => handleInputChange(e)}/>}
      history={history} />
  )
}