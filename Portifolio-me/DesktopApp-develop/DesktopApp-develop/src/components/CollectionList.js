import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { Trash } from 'react-bootstrap-icons';
import { Pencil } from 'react-bootstrap-icons';
import {Form} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './CollectionList.css';
import { useState, useEffect } from 'react';
import sms from '../assets/images/sms.png'
import 'regenerator-runtime/runtime';

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


function CollectionList() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [collectionList, setCollectionList] = useState([]);
  
  useEffect(() => {
    requestCollections();
  }, [setCollectionList])

  async function requestCollections(){
    const res = await fetch(`http://localhost:3000/collection`);
    const json = await res.json();
    setCollectionList(json)
  }

  
  return (
<div className="container-1">
  <div className="container-top">
    <div className="search-bar">
        <div className="input-group-prepend" >
            <span className="input-group-text" className="search-icon">
              <Search/>
            </span>
        </div>
        <form className="form-inline">          
          <div className="input-group-prepend">
            <input type="text" className="form-control" className="search-input" placeholder="Search"  aria-label="Search" />
          </div>
        </form>

    </div>
    <div className="farmer-tab ">
    <button>Farmer</button>
    </div>
    <div className="button-tab">
      <div className="button-tab-left">
        <h3>Harvest Collection List</h3>
        <img src={sms} alt="sms"/>
        {/* <span className='icon-sms'>Phone</span> */}
        
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
          <Modal.Title>Add Harvest Collection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={e =>{
          e.preventDefault();
        }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Collection ID 243212" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Farmer UIN *" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Produce * " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Amount * " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Truck Plate No *" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Departure Time *" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Date *" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Pond ID *  243212" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Group *" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Driver Name *" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Arrival Time *" />
          </Form.Group>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
    </Modal>
  <div className="container-centre">
  <Table bordered hover responsive="sm" className="the-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Collect ID</th>
              <th>Farmer UIN</th>
              <th>Pond ID</th>
              <th>Procedure</th>
              <th>Group</th>
              <th>Amount</th>
              <th>Driver Name</th>
              <th>Truck Plate No</th>
              <th>Dep Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {collectionList.map(c => (
              <tr key={c.id}>
                <td>{c.date}</td>
                <td>{c.collect_id}</td>
                <td>{c.farmer_uin}</td>
                <td>
                  <Pencil/>
                  {c.pond_id}</td>
                <td>{c.procedure}</td>
                <td>{c.group}</td>
                <td>{c.amount}</td>
                <td>{c.driver_name}</td>
                <td>{c.truck_plate_no}</td>
                <td>{c.dep_time}</td>
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

export default CollectionList