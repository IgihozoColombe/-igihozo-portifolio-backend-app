// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------

import React from "react";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class HarvestCollectionCreate extends React.Component {
  selectIconStyles = {
    background: `#fff url(${selectDropIcon}) no-repeat right .75rem center`,
  };

  paymentTypes = ["cash", "cheque", "debit", "credit"];

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
      {/* ======❔❔ Input value is received from props, so its removed for now to avoid error===== */}
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="customerName"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Collection ID"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billNo"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Reference No"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="date"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Offtaker ID"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="no"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Group"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="item"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Farmer ID"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="qty"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Pond ID"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="units"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Fish species"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Traceability Code"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="amount"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Kg collected"
            />
          </div>
          <div className="col">
            <input
                type="text"
                className="form-control"
                name="amount"
                onChange={(e) => this.props.onChange(e)}
                placeholder="Price per Kg"
              />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="amount"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Total value"
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="form-row">
          <div className="col-12">
            <textarea
              style={{ height: "74px", resize: "none" }}
              className="form-control"
              name="description"
              onChange={(e) => this.props.onChange(e)}
              id=""
              placeholder="description"
            ></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select
              style={this.selectIconStyles}
              name="paymentType"
              onChange={(e) => this.props.onChange(e)}
              className="custom-select form-control-sm form-control"
            >
              <option value="payment type">payment type</option>
              {this.paymentTypes.map((agent, i) => (
                <option key={i.toString()} value={agent}>
                  {agent}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="discount"
              onChange={(e) => this.props.onChange(e)}
              placeholder="Discount"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select
              style={this.selectIconStyles}
              name="paymentType"
              onChange={(e) => this.props.onChange(e)}
              className="custom-select form-control-sm form-control"
            >
              <option value=""></option>
              {this.paymentTypes.map((agent, i) => (
                <option key={i.toString()} value={agent}>
                  {agent}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="total"
              onChange={(e) => this.props.onChange(e)}
              placeholder="total amount"
            />
          </div>
        </div>
      </>
    );
  }
}

export default HarvestCollectionCreate;
