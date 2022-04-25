
// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------

import React from "react";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class ProductsDetails extends React.Component {
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
              value={this.props.details.productName}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Product Name *"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="productCode"
              value={this.props.details.productCode}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Product Code"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="qty"
              value={this.props.details.qty}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Qty *"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="price"
              value={this.props.details.price}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Price"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="unit"
              value={this.props.details.unit}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Unit"
            />
          </div>
          <div className="col">
            <img
              type="text"
              className="form-control"
              name="image"
              src={this.props.details.image}
              onChange={(e) => this.props.onChange(e)}
              placeholder="Image"
            />
          </div>
        </div>
      </>
    );
  }
}

export default ProductsDetails;
