// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------


import React from 'react'


// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";


class SalesInvoiceCreate extends React.Component {

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
            <input type="text" className="form-control" name="customerName" value={this.props.details.customerName} onChange={(e) => this.props.onChange(e)} placeholder="customer name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="billNo" value={this.props.details.billNo} onChange={(e) => this.props.onChange(e)} placeholder="Bill Number" />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" name="billDate" value={this.props.details.billDate} onChange={(e) => this.props.onChange(e)} placeholder="bill date *" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="date" value={this.props.details.date} onChange={(e) => this.props.onChange(e)} placeholder="date" />
          </div>
        </div>
        <div className="form-row">
        <div className="col">
            <input type="text" className="form-control" name="no" value={this.props.details.no} onChange={(e) => this.props.onChange(e)} placeholder="number *" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="item" value={this.props.details.item} onChange={(e) => this.props.onChange(e)} placeholder="item *" />
          </div>

        </div>
        <div className="form-row">
        <div className="col">
            <input type="text" className="form-control" name="qty" value={this.props.details.qty} onChange={(e) => this.props.onChange(e)} placeholder="quantity *" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="units" value={this.props.details.units} onChange={(e) => this.props.onChange(e)} placeholder="units *" />
          </div>
        </div>

        <div className="form-row">
        <div className="col">
            <input type="text" className="form-control" name="price" value={this.props.details.price} onChange={(e) => this.props.onChange(e)} placeholder="price" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="amount" value={this.props.details.amount} onChange={(e) => this.props.onChange(e)} placeholder="amount" />
          </div>
        </div>
        <div className="form-row">
          <div className="col-12">
            <textarea style={{ height: "74px", resize: "none" }} className="form-control" value={this.props.details.description} name="description" onChange={(e) => this.props.onChange(e)} id="" placeholder="description" ></textarea>
          </div>
        </div>
        <div className="form-row">

          <div className="col">
            <input type="text" className="form-control" name="discount" value={this.props.details.discount} onChange={(e) => this.props.onChange(e)} placeholder="Discount" />
          </div>
          <div className="col">
            <select style={this.selectIconStyles} name="paymentType" value={this.props.details.paymentType} onChange={(e) => this.props.onChange(e)} className="custom-select form-control-sm form-control">
              <option value="tax">tax</option>
              {
                this.paymentTypes.map((agent, i) => <option key={i.toString()} value={agent}>{agent}</option>)
              }
            </select>
          </div>
        </div>


      </>
    );
  }
}

export default SalesInvoiceCreate