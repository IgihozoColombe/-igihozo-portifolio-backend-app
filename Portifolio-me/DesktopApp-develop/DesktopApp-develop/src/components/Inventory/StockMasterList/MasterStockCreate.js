// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------

import React from "react";

// icons
import selectDropIcon from "../../../assets/img/icons/bx_bxs-down-arrow.svg";

class MasterStockCreate extends React.Component {
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
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billNo"
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
              name="customerName"
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billNo"
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
              name="customerName"
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billNo"
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
              name="customerName"
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billNo"
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
              name="customerName"
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="billNo"
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
        </div>
        
      </>
    );
  }
}

export default MasterStockCreate;
