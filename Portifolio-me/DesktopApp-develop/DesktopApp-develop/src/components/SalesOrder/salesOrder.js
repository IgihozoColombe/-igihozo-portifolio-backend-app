import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import "../../assets/css/_example/salesorder.css";
import Wrapper from './Wrapper';
import SalesOrderCreate from './SalesOrderCreate';

export default function SalesOrder(props) {

  let history = useHistory()
  let { path } = useRouteMatch()

  const [lgShow, setLgShow] = useState(false);
  // const [llShow, setLlShow] = useState(false);
  const [sales, setSales] = useState({
    customerName: "",
  
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

  const heading = "sales order"

  const addGroup = () => {
    history.push(`${path}/create`)
    setLgShow(true)
  }

  function handleInputChange (event) {
    // const target = event.target;
    // const value = event.target.value;
    // const name = target.name;

    // setSales({
    //   ...sales,
    //   [name]: value
    // });
  }

  return (

    <Wrapper
      path={"/salesOrder"}
      model={sales}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      lgShow={lgShow}
      smsBtn={false}
      formTitle={'purchase bill'}
      create={() => <SalesOrderCreate details={sales} onChange={setSales} />}
      history={history} />
          
   
  )
}

