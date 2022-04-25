import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { Trash } from 'react-bootstrap-icons';
import { Pencil } from 'react-bootstrap-icons';
import {Form} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Search  from './Search';
import './CollectionList.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import sms from '../assets/images/sms.png'


// Pagination 
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


function Expenses() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [expense, setExpense] = useState([]);
  const [addExpense, setAddedExpense] = useState({
    no: "",
    item: "",
    unit_price: "",
    unit: "",
    amount: "",
    date: ""
  });

  const {no, item, unit_price, unit, amount, date} = addExpense;
  const onInputChange = e => {
    setAddedExpense({...addExpense,[e.target.name]: e.target.value})
  }

  useEffect(() => {
    requestExpenses();
  }, [setExpense])
  
  async function requestExpenses(){
    const res = await axios.get(`http://localhost:5500/expenses`);
    setExpense(res.data)
  }

  async function requestExpense(){
    const res = await axios.get(`http://localhost:5500/expenses/${id}`);
    setAddedExpense(res.dara)
  
  }


 const onSubmit = async e =>{
   e.preventDefault();
   await axios.post("http://localhost:3000/expenses", addExpense)

 }
  
  return (
<div className="container-1">
  <div className="container-top">
    <Search/>
    {/* <div className="search-bar">
        <div className="input-group-prepend" >
            <span className="input-group-text" className="search-icon">
            </span>
        </div>
        <form className="form-inline">          
          <div className="input-group-prepend">
            <input type="text" className="form-control" className="search-input" placeholder="Search"  aria-label="Search" />
          </div>
        </form>

    </div> */}
    <div className="farmer-tab ">
    <div className="spacer"></div>
    </div>
    <div className="button-tab">
      <div className="button-tab-left">
        <h3>Expenses</h3>
        <button onClick={handleShow}>Add New</button>
      </div>
      <div className="spacer"></div>
      <div className="button-tab-right">
      <button>Next Page</button>
      </div>
    </div>
  </div>

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Expenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={e =>{
          onSubmit(e),
          handleClose()
        }}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="NO" name="no" value = {no}  onChange={e =>onInputChange(e)} /> 
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Date" name="date" value = {date} onChange={e =>onInputChange(e)} /> 
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Item" name="item" value={item}  onChange={e =>onInputChange(e)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Unit Price" name="unit_price" value={unit_price}  onChange={e =>onInputChange(e)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Unit" name="unit" value={unit}  onChange={e =>onInputChange(e)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Amount" name="amount" value={amount}  onChange={e =>onInputChange(e)}/>
          </Form.Group>
          <Button variant="primary"  type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
    </Modal>
  <div className="container-centre">
  <Table borderless hover responsive className="the-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Unit Price</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expense.map(c => (
              <tr key={c.id}>
                <td>{c.no}</td>
                <td>{c.item}</td>
                <td>{c.unit_price}</td>
                <td>{c.unit}</td>
                <td>{c.date}</td>
                <td>{c.amount}</td>
                <td className="table-button">
                  <Button 
                    // onClick={editContact.bind(this, c)}
                    size="sm"
                  >
                    <Pencil />

                  </Button>
                  <Button 
                    // onClick={deleteSelectedContact.bind(this, c.id)}
                    size="sm"
                  >
                    <Trash/>
                  </Button>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
        <div className="container-bottom">
          <Pagination size="sm">{items}</Pagination>
        </div>
  </div>

</div>

  )
}

export default Expenses