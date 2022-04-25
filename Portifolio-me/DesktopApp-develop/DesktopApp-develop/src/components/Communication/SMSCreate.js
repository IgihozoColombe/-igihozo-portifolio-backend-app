import React from 'react';

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class OutboundSMSCreate extends React.Component {
  selectIconSyles = {
    background: `#fff url(${selectDropIcon}) no-repeat right .75rem center`,
  };

  // paymentTypes = ["cash", "cheque", "debit", "credit"];

  constructor(props){
    super(props);
  };

  componentDidMount(props){
    
    $("#createGroup").modal("show");
    $("$createGroup").on("hide.bs.modal", (e) => {
      this.props.goBack();
    });
  };

  render() {
    return (
      <>
        <div className="form-row">
          <div className="col">
            <input 
              type="text"
              className="form-control"
              name="smsProvider"
              value={this.props.details.smsProvider}
              onChange={(e) => this.props.onChange(e)}
              placeholder="SMS Provider"
            />
          </div>
          <div className="col">
            <input 
              type="text"
              className="form-control"
              name="user"
              value={this.props.details.user}
              onChange={(e) => this.props.onChange(e)}
              placeholder="User"
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
          <div className="col">
            <input 
              type="text"
              className="form-control"
              name="apiKey"
              value={this.props.details.apiKey}
              onChange={(e) => this.props.onChange(e)}
              placeholder="API Key"
            />
          </div>
        </div>
      </>
    );
  }
}
export default OutboundSMSCreate;