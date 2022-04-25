import React from "react";
import { ExpenseService } from "../../services/ExpenseService";

// css
import "../../assets/css/GroupProfilingDetails.css";

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";

// imgs
import avatar from "../../assets/img/Rectangle 32.png";

class ExpenseDetails extends React.Component {
  selectIconStyles = {
    background: `#fff url(${selectDropIcon}) no-repeat right .75rem center`,
  };

  // For Drop down purposes
  category = ["Farmer", "Harvester", "irrigator", "crop picker", "seed sower"];

  payment_type = [
    "George Lindrof",
    "Micheal Campbell",
    "Nick Manis",
    "Taron Mansoori",
  ];
  constructor(props) {
    super(props);
    this.state = props.details;
    this.expenseService = new ExpenseService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
  }

  componentDidMount() {
    $("#expenseDetails").modal("show");
    $("#expenseDetails").on("hide.bs.modal", (e) => {
      this.props.goBack();
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  updateExpense(event) {
    event.preventDefault();

    this.expenseService.update(this.state).then((res) => this.props.re());

    $("#expenseDetails").modal("hide");
  }

  render() {
    return (
      <div
        className={`modal fade group-details`}
        tabIndex="-1"
        id="expenseDetails"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content create-group">
            <div className="modal-header">
              <h5 className="modal-title">Expenses</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.updateExpense}>
              <div className="form-row">
                <div className="col">
                  <select
                    id="inputState"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleInputChange}
                    style={this.selectIconStyles}
                    className="custom-select form-control-sm form-control"
                  >
                    <option value="category">category</option>
                    {this.category.map((type, i) => (
                      <option key={i.toString()} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="expense_number"
                    value={this.state.expense_number}
                    onChange={this.handleInputChange}
                    placeholder="Expense Number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    placeholder="Date"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleInputChange}
                    placeholder="Item"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="unit_price"
                    value={this.state.unit_price}
                    onChange={this.handleInputChange}
                    placeholder="Unit Price"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="unit"
                    value={this.state.unit}
                    onChange={this.handleInputChange}
                    placeholder="Unit"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleInputChange}
                    placeholder="Amount"
                  />
                </div>
                <div className="col"></div>
              </div>
              <div className="form-row">
                <textarea
                  placeholder="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>

              <div className="form-row">
                <div className="col">
                  <select
                    id="inputState"
                    name="payment_type"
                    value={this.state.payment_type}
                    onChange={this.handleInputChange}
                    style={this.selectIconStyles}
                    className="custom-select form-control-sm form-control"
                  >
                    <option value="Payment Type">Payment Type</option>
                    {this.payment_type.map((type, i) => (
                      <option key={i.toString()} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="total_amount"
                    value={this.state.total_amount}
                    onChange={this.handleInputChange}
                    placeholder="Total Amount"
                  />
                </div>
              </div>

              <div className="form-row justify-content-end m-0">
                <input type="submit" className="btn" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseDetails;
