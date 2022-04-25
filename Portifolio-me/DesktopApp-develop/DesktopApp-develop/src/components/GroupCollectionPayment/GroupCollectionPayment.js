import React from "react";

// data
import { GROUP_COLLECTION_PAYMENT } from "./Data";
import NewPagination from "./NewPagination";

// components

class GroupCollectionPayment extends React.Component {
  constructor() {
    super();

    this.state = {
      GroupCollectionPayment: GROUP_COLLECTION_PAYMENT,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-between mt-5">
          <div className="d-flex">
            <h2>Group Collection Payment</h2>
            <button
              type="button"
              className="btn text-white ml-5"
              onClick={() => this.handleModalShowHide()}
            >
              Add New
            </button>
          </div>
          <button type="button" className="btn text-white">
            Next Page
          </button>
        </div>
        <div className="table-responsive mt-2 bg-white p-2">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Group Collection ID</th>
                <th>Account Title</th>
                <th>Account No</th>
                <th>Bank Name</th>
                <th>Amount Payable</th>
                <th>Statement No</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div className="py-3">{data.GroupName}</div>
                  ))}
                </td>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div className="py-3">{data.GroupCollectionId}</div>
                  ))}
                </td>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div className="py-3">{data.AccountTitle}</div>
                  ))}
                </td>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div className="py-3">{data.AccountNo}</div>
                  ))}
                </td>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div className="py-3">{data.BankName}</div>
                  ))}
                </td>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div className="py-3">{data.AmountPayable}</div>
                  ))}
                </td>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div className="py-3">{data.StatementNo}</div>
                  ))}
                </td>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div style={{ marginBottom: "20px", marginTop: "10px" }}>
                      {data.Status ? (
                        <button className="active-button">Active</button>
                      ) : (
                        <button className="inactive-button">Inactive</button>
                      )}
                    </div>
                  ))}
                </td>
                <td>
                  {this.state.GroupCollectionPayment.map((data) => (
                    <div
                      className="d-flex"
                      style={{ marginBottom: "22px", marginTop: "10px" }}
                    >
                      <button class="btn mr-2">
                        <img
                          width="8"
                          height="8"
                          src={data.EditImgSrc}
                          alt=""
                        />
                      </button>
                      <button class="btn">
                        <img
                          width="8"
                          height="8"
                          src={data.DeleteImgSrc}
                          alt=""
                        />
                      </button>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <NewPagination />
      </div>
    );
  }
}

export default GroupCollectionPayment;
