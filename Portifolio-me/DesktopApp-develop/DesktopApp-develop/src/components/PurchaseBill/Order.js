import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import OrderCreate from './OrderCreate';

export default function Order(props) {

  let history = useHistory()
  let { path } = useRouteMatch()

  const [order, setOrder] = useState({
    id:  1,
    customerName: "",
    orderNo: "",
    orderDate: "",
    dueDate: "",
    paymentType: "",
    totalAmount: '',
    comment: "",
    discount: "",
    tax: ""
  })

  const tableModel = {
    th: [
      "customer name",
      "order no",
      "order date",
      "due date",
      "payment type",
      "total amount",
      'actions',
    ],
    indexes: [
      'customerName',
      'orderNo',
      'orderDate',
      'dueDate',
      'paymentType',
      'totalAmount'
    ]
  }

  const headerModel = [
    {
      name: "add new",
      evt: () => addGroup()
    }
  ]

  const heading = "purchase order"

  const addGroup = () => {
    history.push(`${path}/create`)
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setOrder({
      ...order,
      [name]: value
    });
  }

  return (
    <Wrapper
      path={"/purchase-order"}
      model={order}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={'purchase order'}
      create={() => <OrderCreate details={order} onChange={(e) => handleInputChange(e)}/>}
      history={history} />
  )
}