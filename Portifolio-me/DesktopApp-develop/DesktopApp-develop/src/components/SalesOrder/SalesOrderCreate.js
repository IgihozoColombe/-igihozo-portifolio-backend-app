// // ---------------------- to dos --------------------
// // Add form validation
// // ----------------------------------------------------


import React from 'react'


// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";


class SalesOrderCreate extends React.Component {

  selectIconStyles = {
    background: `#fff url(${selectDropIcon}) no-repeat right .75rem center`
  }

  paymentTypes = ['cash', 'cheque', 'debit', 'credit']

  constructor(props) {
    super(props);
  }

  onChange = event => {
    this.props.onChange({customerName:event.target.value})
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
            <input type="text" autoFocus className="form-control" name="customerName" value={this.props.details.customerName} onChange={this.onChange} placeholder={this.props.details.customerName} />
          </div>
          
        </div>
        

      </>
    );
  }
}

export default SalesOrderCreate