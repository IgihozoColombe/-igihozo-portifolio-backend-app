// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------

import React from "react";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class OutboundDetails extends React.Component {
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
              name="hostName"
              value={this.props.details.hostName}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Host name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="port"
              value={this.props.details.port}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Port"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="user"
              value={this.props.details.user}
              onChange={(e) => this.props.onChange(e)}
              placeholder="user *"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="password"
              value={this.props.details.password}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="gender"
              value={this.props.details.gender}
              onChange={(e) => this.props.onChange(e)}
              placeholder="gender "
            />
          </div>
          {/* <div className="col">
            <input
              type="button"
              className="form-control"
              name="testEmail"
              value={this.props.details.testEmail}
              onChange={(e) => this.props.onChange(e)}
              placeholder="test Email"
            />
          </div> */}
        </div>
       
      </>
    );
  }
}

export default OutboundDetails;
