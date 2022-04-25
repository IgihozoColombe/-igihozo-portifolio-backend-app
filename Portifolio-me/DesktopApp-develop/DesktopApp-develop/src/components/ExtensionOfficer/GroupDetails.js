import React from "react";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";


class GroupDetails  extends React.Component {
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
              name="groupName"
              value={this.props.details.groupName}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Group Name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="groupCode"
              value={this.props.details.groupCode}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Group Code"
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
              placeholder="farmers Gps Co"
            />
          </div>
          </div>

</>


        );
        }

}

export default GroupDetails;