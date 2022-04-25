import React, { useState } from "react";
import "../../assets/css/CollectionPayment.css";
import CollectionPaymentDetails from "./CollectionPaymentDetails";
import Pagination from "./Pagination";
import { data } from "./data";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

export default function CollectionPayment() {
  const [collectionPaymentDetails, setCollectionPaymentDetails] =
    useState(data);
  const [paymentDetails, setPaymentDetails] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [lgShow, setLgShow] = useState(false);

  const indexOfLastPaymentDetails = currentPage * postPerPage;
  const indexOfFirstPaymentDetails = indexOfLastPaymentDetails - postPerPage;
  const currentPaymentDetails = collectionPaymentDetails.slice(
    indexOfFirstPaymentDetails,
    indexOfLastPaymentDetails
  );

  const paginate = (orderNumber) => setCurrentPage(orderNumber);

  return (
    <div className="container px-5">
      <div className="tab">
        <button className="tablinks">Farmers</button>
        <button className="tablinks"> Staff</button>
      </div>

      <div className="collection-header-wrapper my-4">
        <p className="collection-header">Collection Payment</p>
        <div
          className="collection-header-div ml-4"
          onClick={() => setLgShow(true)}
        >
          <p className="px-4">Add New</p>
        </div>
        <div
          className="collection-header-div ml-4"
          onClick={() => setLgShow(true)}
        >
          <p className="px-4">Finance Loan</p>
        </div>

        <div className="collection-header-div ml-auto">
          <p className="px-4">Next Page</p>
        </div>
      </div>

      <div className="mt-4">
        <CollectionPaymentDetails
          collectionPaymentDetails={currentPaymentDetails}
        />
      </div>
      <Pagination
        postsPerPage={postPerPage}
        totalsPosts={collectionPaymentDetails.length}
        paginate={paginate}
      />

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby=""
      >
        <ModalHeader closeButton>
          <ModalTitle id="">Add Collection Payment</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="px-3">
            <div className="modalInput">
              <input
                type="text"
                placeholder="Collection ID"
                name="collectionId"
              />
              <input
                className="ml-input"
                type="text"
                placeholder="Farmers ID"
                name="farmersId"
              />
            </div>
            <div className="modalInput">
              <input
                type="text"
                placeholder="Reference Number"
                name="refNumber"
              />
              <input
                className="ml-input"
                type="text"
                placeholder="Account Number"
                name="accountNumber"
              />
            </div>
            <div className="modalInput">
              <input type="text" placeholder="Account Title" />
              <input
                className="ml-input"
                type="text"
                placeholder="Amount Paid"
              />
            </div>
            <div className="modalInput">
              <input type="text" placeholder="Balance" />
              <input
                className="ml-input"
                type="text"
                placeholder="Start Date"
              />
            </div>
            <textarea placeholder="Status" className=""></textarea>

            <div className="modalInput">
              <input type="text" placeholder="Remarks" />
            </div>

            <div className="d-flex justify-content-end mt-5 mb-2">
              <div className="collection-header-div ml-4">
                <button type="submit" className="px-4 py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
