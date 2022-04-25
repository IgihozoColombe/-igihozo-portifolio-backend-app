import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../../assets/css/PondRegistration.css";
import PondList from "./PondList";
import data from "./data";
import Pagination from "./Pager";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

// Import Bootstrap Utils
import { Modal, Form } from "react-bootstrap";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWNjY2ZjNjZkMGU1N2QzZTBjNjBhYTIiLCJpYXQiOjE2NDEzNzE2MjEuNzYxLCJleHAiOjE2NDE0NTgwMjEuNzYxLCJ0eXBlIjoicmVmcmVzaCJ9.B6JgfIfVxkOORNQRBCvBC5kfgRv1ndk_OrTUGwr0gxQ";

const authAxios = axios.create({
  baseURL: "https://18.170.1.153:3001/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const PondRegistration = () => {
  let history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);
  const [lists, setLists] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const result = await authAxios.get("/ponds");
      console.log(result);
      console.log(result.data);
      setLists(result.data);
    } catch (error) {
      console.log(error.message);
    }
  });

  useEffect(() => {
    fetchData();
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleActive = (id) => {
    const newList = [...lists];
    newList.map((list) => {
      if (list.farmerID === id) {
        list.active = !list.active;
      }
    });

    setLists(newList);
  };

  const handleEdit = (id) => {
    console.log("Edit" + id);
  };

  const handleDelete = (id) => {
    const newList = lists.filter((list) => list.farmerID !== id);
    setLists(newList);
    console.log(id);
  };

  return (
    <div className="container">
      {/* ====== HEADER ======= */}
      <button className="farmer-btn">Farmers</button>
      <div className="d-flex justify-content-between align-items-center ">
        <span className="d-flex">
          <span className="p-text pr-3">Pond List</span>
          <button className="btn btn-success p-btn" onClick={handleShow}>
            Add New
          </button>
        </span>
        <button className="btn btn-success p-btn flex-end">Next Page</button>
      </div>

      {/* ======POND LIST======== */}
      <div style={{ backgroundColor: "white" }} className="p-2 mt-4 mb-3">
        <PondList
          handleActive={handleActive}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          lists={lists}
        />
      </div>

      {/* ======== PAGINATION ======== */}
      <Pagination
        currentPage={currentPage}
        onChange={(num) => setCurrentPage(num)}
        totalCount={data.length}
      />
      {/* ================= Pagination =================== */}

      {/* ======ADD NEW MODAL======== */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Pond</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
              <Form.Control className="mr-4" type="email" placeholder="" />
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
              <Form.Control className="mr-4" type="email" placeholder="" />
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
              <Form.Control className="mr-4" type="email" placeholder="" />
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
              <Form.Control className="mr-4" type="email" placeholder="" />
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
              <Form.Control className="mr-4" type="email" placeholder="" />
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
              <Form.Control className="mr-4" type="email" placeholder="" />
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <textarea placeholder=""></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-success p-btn"
            variant="success"
            onClick={handleClose}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PondRegistration;
