import React from "react";
// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class RemarkCreate extends React.Component {
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
          <div className="col-12">
            <textarea
              style={{ height: "74px", resize: "none" }}
              className="form-control"
              value={this.props.details.comment}
              name="comment"
              onChange={(e) => this.props.onChange(e)}
              id=""
              placeholder=""
            ></textarea>
          </div>
        </div>
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
              name="orderNo"
              value={this.props.details.orderNo}
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
              name="orderDate"
              value={this.props.details.orderDate}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="dueDate"
              value={this.props.details.dueDate}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select
              style={this.selectIconStyles}
              name="paymentType"
              value={this.props.details.paymentType}
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
              name="totalAmount"
              value={this.props.details.totalAmount}
              onChange={(e) => this.props.onChange(e)}
              placeholder=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default RemarkCreate;
