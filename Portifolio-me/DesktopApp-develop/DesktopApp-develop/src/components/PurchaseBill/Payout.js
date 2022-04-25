import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import PayoutCreate from './PayoutCreate';

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
      "customer name",
      "add balance",
      "payment type",
      "reciept no",
      "date",
      "amount paid",
      'actions',
    ],
    indexes: [
      "customerName",
      "addBalance",
      "paymentType",
      "recieptNo",
      "date",
      "amountPaid"
    ]
  }

  const headerModel = [
    {
      name: "add new",
      evt: () => addGroup()
    }
  ]

  const heading = "payout"

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
      path={"/purchase-payout"}
      model={payout}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={'purchase payout'}
      create={() => <PayoutCreate details={payout} onChange={(e) => handleInputChange(e)}/>}
      history={history} />
  )
}