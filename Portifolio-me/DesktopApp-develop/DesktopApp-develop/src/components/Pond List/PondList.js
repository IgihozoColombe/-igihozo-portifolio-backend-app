import React from "react";

import Edit from "../../Images/edit.png";
import Delete from "../../Images/delete.png";
import Rectangle from "../../Images/Rectangle.png";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { list } from "postcss";

const PondList = ({ lists, handleDelete, handleEdit, handleActive }) => {
  return lists.length === 0 ? (
    <h3 className="text-center py-3">No Ponds Available</h3>
  ) : (
    <div className="OrderWrapper">
      <div className="table-responsive ">
        <table className="table pondList">
          <thead>
            <tr style={{ fontSize: "10px" }}>
              <th>Farmer ID</th>
              <th>Pond ID</th>
              <th>Prod Sel</th>
              <th>Fish Size</th>
              <th>Pond Size</th>
              <th>Fish Origin</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>GPS Cord</th>
              <th>Trace</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => {
              return (
                <tr style={{ fontSize: "8px" }} key={list.farmerID}>
                  <td>
                    <img
                      className="mr-2"
                      src={list.farmerImg}
                      alt={list.farmerID}
                    />
                    {list.farmerID}
                  </td>
                  <td>
                    <img
                      className="mr-2"
                      src={list.farmerImg}
                      alt={list.farmerID}
                    />
                    {list.pondID}
                  </td>
                  <td>{list.prodSel}</td>
                  <td>{list.fishSize}</td>
                  <td>{list.pondSize}</td>
                  <td>{list.fishOrigin}</td>
                  <td>{list.startDate}</td>
                  <td>{list.endDate}</td>
                  <td>{list.trace}</td>
                  <td>{list.GPS_Cord}</td>
                  <td
                    onClick={() => handleActive(list.farmerID)}
                    style={{ cursor: "pointer" }}
                    className={
                      list.active
                        ? "text-center ml-2 mt-3 badge p-1 badge-success"
                        : "text-center ml-2 mt-3 badge p-1 badge-secondary"
                    }
                  >
                    {list.active ? "Active" : "Inactive"}
                  </td>
                  <td>
                    {" "}
                    <span className="badge badge-default p-2 mb-1 w-100 text-center shadow">
                      {list.remarks}{" "}
                    </span>
                  </td>
                  {/* <td className="text-center">{list.status}</td> */}
                  <td>
                    <div className="d-flex">
                      <div
                        onClick={() => handleEdit(list.farmerID)}
                        className="action-btn d-flex align-items-center justify-content-center mr-3"
                      >
                        {/* <img src={ Rectangle} alt={Rectangle} />
                        <img className="tableActions" src={Edit} alt={Edit} /> */}
                        <PencilSquare />
                      </div>
                      <div
                        onClick={() => handleDelete(list.farmerID)}
                        className="action-btn d-flex align-items-center justify-content-center"
                      >
                        <Trash />
                        {/* <img src={ Rectangle} alt={Rectangle} />
                        <img className="tableActions" src={Delete} alt={Delete} /> */}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PondList;
