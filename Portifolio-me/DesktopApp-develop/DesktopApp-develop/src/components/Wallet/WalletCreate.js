// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------

import React from "react";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class WalletCreate extends React.Component {
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
              placeholder="Date *"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billNo"
              value={this.props.details.billNo}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Time"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billDate"
              value={this.props.details.billDate}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Farmer UIN *"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="date"
              value={this.props.details.date}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Amount"
            />
          </div>
        </div>
      </>
    );
  }
}

export default WalletCreate;
