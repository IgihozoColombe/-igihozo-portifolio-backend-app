import React from 'react'
import {Form} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function NewCollection() {
  const handleClose = () => setShow(false);
  return (
    <div>
        <Modal >
          <Modal.Header closeButton>
            <Modal.Title>Add Harvest Collection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
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
    </div>
  )
}

export default NewCollection