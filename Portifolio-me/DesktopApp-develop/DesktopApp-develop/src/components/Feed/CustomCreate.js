// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------

import React from "react";
import { X } from "react-bootstrap-icons";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class CustomCreate extends React.Component {
  selectIconStyles = {
    background: `#fff url(${selectDropIcon}) no-repeat right .75rem center`,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    $("#createGroup").modal("show");
    $("#createGroup").on("hide.bs.modal", (e) => {
      this.props.goBack();
    });
  }

  render() {
    return (
      <>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="customerName"
              value={this.props.details.customerName}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billNo"
              value={this.props.details.billNo}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="date"
              value={this.props.details.date}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="no"
              value={this.props.details.no}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="item"
              value={this.props.details.item}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="qty"
              value={this.props.details.qty}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
        </div>
        <table className="w-100 my-5">
          <thead>
            <tr>
              <td>SI No</td>
              <td>Name</td>
              <td>Code</td>
              <td>Supplier Code</td>
              <td>Weight</td>
              <td>
                <X style={btnStyle} />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>1</strong>
              </td>
              <td>
                <strong>Ingred I</strong>
              </td>
              <td>
                <strong>123456</strong>
              </td>
              <td>
                <strong>SC3456</strong>
              </td>
              <td>
                <strong>100</strong>
              </td>
              <td>
                <strong>
                  <X style={btnStyle} />
                </strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>2</strong>
              </td>
              <td>
                <strong>Ingred II</strong>
              </td>
              <td>
                <strong>123467</strong>
              </td>
              <td>
                <strong>SC3467</strong>
              </td>
              <td>
                <strong>100</strong>
              </td>
              <td>
                <strong>
                  <X style={btnStyle} />
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

const btnStyle = {
  backgroundColor: "grey",
  color: "#fff",
  borderRadius: "50%",
  height: "20px",
  width: "20px",
  padding: "4px 3px 3px",
};

export default CustomCreate;
