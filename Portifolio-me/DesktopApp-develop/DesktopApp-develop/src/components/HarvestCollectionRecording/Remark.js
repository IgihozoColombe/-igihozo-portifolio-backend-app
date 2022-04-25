import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import RemarkCreate from './RemarkCreate';

const Remark = () => {
    
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
        'Reference No',
        'Extension Agent',
        'Group Name',
        'Farmer ID',
        'Pond ID',
        'Fish Species',
        'Nature of issue',
        'Remark',
        'Actions'
    ],
    indexes: [
        'referenceNo',
        'extensionAgent',
        'groupName',
        'farmerID',
        'pondID',
        'fishSpecies',
        'natureOfIssue',
        'remark',
        'actions'
    ]
  }

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup()
    }
  ]

  const heading = "Harvest Collection Remarks"

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
      formTitle={'harvest collection Remarks'}
      create={() => <RemarkCreate details={order} onChange={(e) => handleInputChange(e)}/>}
      history={history} />
    )
}

export default Remark
