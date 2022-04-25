// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------


import React from 'react'


// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";


class PayoutCreate extends React.Component {

  selectIconStyles = {
    background: `#fff url(${selectDropIcon}) no-repeat right .75rem center`
  }

  paymentTypes = ['cash', 'cheque', 'debit', 'credit']

  constructor(props) {
    super(props);

  }

  componentDidMount(props) {
    $('#createGroup').modal('show')
    $('#createGroup').on('hide.bs.modal', (e) => {
      this.props.goBack()
    })
  }

  render() {
    return (

      <>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" name="customerName" value={this.props.details.customerName} onChange={(e) => this.props.onChange(e)} placeholder="Customer name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="addBalance" value={this.props.details.addBalance} onChange={(e) => this.props.onChange(e)} placeholder="add balance" />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
          <select style={this.selectIconStyles} name="paymentType" value={this.props.details.paymentType} onChange={(e) => this.props.onChange(e)} className="custom-select form-control-sm form-control">
              <option value="payment type">payment type</option>
              {
                this.paymentTypes.map((agent, i) => <option key={i.toString()} value={agent}>{agent}</option>)
              }
            </select>
          </div>
          <div className="col">
            <input type="text" className="form-control" name="recieptNo" value={this.props.details.recieptNo} onChange={(e) => this.props.onChange(e)} placeholder="reciept number" />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" name="date" value={this.props.details.date} onChange={(e) => this.props.onChange(e)} placeholder="date *" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="amountPaid" value={this.props.details.amountPaid} onChange={(e) => this.props.onChange(e)} placeholder="Amount Paid" />
          </div>
        </div>
        <div className="form-row">
          <div className="col-12">
            <textarea style={{ height: "74px", resize: "none" }} className="form-control" value={this.props.details.comment} name="comment" onChange={(e) => this.props.onChange(e)} id="" placeholder="description"></textarea>
          </div>
        </div>

      </>
    );
  }
}

export default PayoutCreate