import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import SalesInvoiceCreate from './SalesInvoiceCreate';

export default function Return(props) {

  let history = useHistory()
  let { path } = useRouteMatch()

  const model = {
    customerName: "",
    billNo: "",
    billDate: "",
    no: '',
    item: "",
    qty: '',
    price: "",
    units: '',
    amount: '',
    date: "",
    description: "",
    discount: '',
    tax: ""
  }

  const tableModel = {
    th: [
      "no",
      "item",
      "qty",
      "price",
      "units",
      "amount",
      "date"
    ],
    indexes: [
      "no",
      "item",
      "qty",
      "price",
      "units",
      "amount",
      "date"
    ]
  }

  const headerModel = [
    {
      name: "add new",
      evt: () => addGroup()
    }
  ]

  const heading = "Invoice"

  const addGroup = () => {
    history.push(`${path}/create`)
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setModel({
      ...model,
      [name]: value
    });
  }

  return (
    <Wrapper
      path={"/salesOrder"}
      model={model}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={'purchase return'}
      create={() => <SalesInvoiceCreate details={model} onChange={(e) => handleInputChange(e)}/>}
      history={history} />
  )
}