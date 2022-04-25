// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------

import React from "react";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class FishHatcheryCreate extends React.Component {
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
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="units"
              value={this.props.details.units}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="price"
              value={this.props.details.price}
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
              name="units"
              value={this.props.details.units}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="price"
              value={this.props.details.price}
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
              name="amount"
              value={this.props.details.amount}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col"></div>
        </div>
      </>
    );
  }
}

export default FishHatcheryCreate;
