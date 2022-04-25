import React from "react";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class FarmerDetails extends React.Component {
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
              name="ExtensionOfficer"
              value={this.props.details.ExtensionOfficer}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Extension Officer"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="farmerUid"
              value={this.props.details.farmerUid}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Farmer UID"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="farmerFullname"
              value={this.props.details.farmerFullname}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Farmer FullName"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name=" localGovt"
              value={this.props.details.localGovt}
              onChange={(e) => this.props.onChange(e)}
              placeholder="  Local Govt"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name=" constituent"
              value={this.props.details.constituent}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Constituent"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="collectionRoute"
              value={this.props.details.collectionRoute}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Collection Route"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="farmersGpsCo"
              value={this.props.details.farmersGpsCo}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Farmers GPS Co"
            />
          </div>
        </div>
      </>
    );
  }
}

export default FarmerDetails;
