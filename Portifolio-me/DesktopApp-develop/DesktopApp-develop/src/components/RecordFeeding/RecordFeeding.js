
import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import RecordWrapper from './RecordWrapper';
import RecordDetails from './RecordDetails';

export default function RecordFeeding(props) {

  let history = useHistory()
  let { path } = useRouteMatch()

  const [order, setOrder] = useState({
    id:  1,
    date: "",
    time:"",
   pondID: "",
    typeOfFeed: "",
   sizeOfFeed: "",
   kgOfFeed: "",
  })

  const tableModel = {
    th: [
      "Date",
     " Time",
      "Pond ID",
      "Type of Feed",
      "Size of Feed",
      "Kg of Feed",
      'Actions',
    ],
    indexes: [
      'date',
      'time',
      'pondID',
      'typeOfFeed',
      'sizeOfFeed',
      'kgOfFeed',
    ]
  }

  const headerModel = [
    {
      name: "add new",
      evt: () => addGroup()
    }
  ]

  const heading = "Record Feeding"

  const addGroup = () => {
    history.push(`${path}/create`)
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    // setOrder({
    //   ...order,
    //   [name]: value
    // });
  }

  return (
    <RecordWrapper
      path={"/purchase-order"}
      // model={order}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={'record feeding'}
      create={() => <RecordDetails details={order} onChange={(e) => handleInputChange(e)}/>}
      history={history} />
  )
}

