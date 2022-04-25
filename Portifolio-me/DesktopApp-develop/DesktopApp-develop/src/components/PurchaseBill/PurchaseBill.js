import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import PurchaseBillCreate from './PurchaseBillCreate';

export default function Order(props) {

  let history = useHistory()
  let { path } = useRouteMatch()

  const [bill, setBill] = useState({
    customerName: "",
    billNo: "",
    date: "",
    no: "",
    item: "",
    qty: "",
    units: "",
    price: "",
    amount: "",
    description: "",
    paymentType: "",
    discount: "",
    tax: "",
    total: ""
  })

  const tableModel = {
    th: [
      'No',
      'Item',
      'Qty',
      'Price',
      'Units',
      'Amount',
      'date',
      'actions',
    ],
    indexes: [
      'no',
      'item',
      'qty',
      'price',
      'units',
      'amount',
      'date'
    ]
  }

  const headerModel = [
    {
      name: "add new",
      evt: () => addGroup()
    }
  ]

  const heading = "purchase bill"

  const addGroup = () => {
    history.push(`${path}/create`)
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setBill({
      ...bill,
      [name]: value
    });
  }

  return (
    <Wrapper
      path={"/purchase-return"}
      model={bill}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={'purchase bill'}
      create={() => <PurchaseBillCreate details={bill} onChange={(e) => handleInputChange(e)}/>}
      history={history} />
  )
}