// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------

import React from "react";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

class SettingsCreate extends React.Component {
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
                            placeholder="Company Name"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            name="billNo"
                            onChange={(e) => this.props.onChange(e)}
                            placeholder="Short Name"
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
                            placeholder="Company ID"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            name="no"
                            onChange={(e) => this.props.onChange(e)}
                            placeholder="Company Code"
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
                            placeholder="Address"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            name="qty"
                            onChange={(e) => this.props.onChange(e)}
                            placeholder="City"
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
                            placeholder="State"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            name="price"
                            onChange={(e) => this.props.onChange(e)}
                            placeholder="Zip Code"
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
                            placeholder="Account Type"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            name="amount"
                            onChange={(e) => this.props.onChange(e)}
                            placeholder="Country Code"
                        />
                    </div>
                </div>
                <div className="form-row">
                    {/* <div className="col">
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
                    </div> */}
                </div>
            </>
        );
    }
}

export default SettingsCreate;
