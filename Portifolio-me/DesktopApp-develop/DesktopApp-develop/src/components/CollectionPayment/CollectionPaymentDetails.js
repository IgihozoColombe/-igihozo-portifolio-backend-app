import React, { useState } from "react";
import Edit from "../../Images/edit.png";
import Delete from "../../Images/delete.png";
import Rectangle from "../../Images/Rectangle.png";

export default function CollectionPaymentDetails({ collectionPaymentDetails }) {
  const [status, setStatus] = useState(false);

  const handleDelete = (index) => {
    const newCollectionPaymentDetails = [...collectionPaymentDetails];
    newCollectionPaymentDetails.filter = (i) =>
      newCollectionPaymentDetails.index != i.index;
    setCollectionPaymentDetails(newCollectionPaymentDetails);
  };

  return (
    <div>
      <div className="PaymentWrapper px-4 ">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Collection ID</th>
                <th>Farmers ID</th>
                <th>Ref.No</th>
                <th>Account No</th>
                <th>Account Title</th>
                <th>AMT Paid</th>
                <th>Balance</th>
                <th>Start Date</th>
                <th>Status</th>
                <th>Remarks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {collectionPaymentDetails.map(
                (collectionPaymentDetail, index) => {
                  return (
                    <tr key={collectionPaymentDetail.collectionId}>
                      <td>{collectionPaymentDetail.collectionId}</td>
                      <td>{collectionPaymentDetail.farmersId} </td>
                      <td>{collectionPaymentDetail.refNumber}</td>
                      <td>{collectionPaymentDetail.accountNumber}</td>
                      <td>{collectionPaymentDetail.accountTitle}</td>
                      <td>{collectionPaymentDetail.amtPaid}</td>
                      <td>{collectionPaymentDetail.balance}</td>
                      <td>{collectionPaymentDetail.startDate}</td>
                      <td>
                        {collectionPaymentDetail.status ? (
                          <button className="active-button">Active</button>
                        ) : (
                          <button className="inactive-button">Inactive</button>
                        )}
                      </td>

                      <td>
                        {collectionPaymentDetail.status ? (
                          <button className="inactive-remark-btn">....</button>
                        ) : (
                          <button className="active-remark-btn">....</button>
                        )}
                      </td>

                      <td>
                        <div className="d-flex">
                          <div className="cursor-pointer d-flex align-items-center justify-content-center mr-3">
                            <img src={Rectangle} alt={Rectangle} />
                            <img
                              className="tableActions"
                              src={Edit}
                              alt={Edit}
                            />
                          </div>
                          <div className="cursor-pointer d-flex align-items-center justify-content-center">
                            <img src={Rectangle} alt={Rectangle} />
                            <img
                              className="tableActions"
                              onClick={() => handleDelete(index)}
                              src={Delete}
                              alt={Delete}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

<div className="d-flex">
                    <div className="cursor-pointer d-flex align-items-center justify-content-center mr-3">
                        <img src={ Rectangle} alt={Rectangle} />
                        <img className="tableActions" src={Edit} alt={Edit} />
                    </div>
                    <div className="cursor-pointer d-flex align-items-center justify-content-center">
                        <img src={ Rectangle} alt={Rectangle} />
                        <img className="tableActions" src={Delete} alt={Delete} />
                    </div>
                </div>