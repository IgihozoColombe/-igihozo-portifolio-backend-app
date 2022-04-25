
// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------


import React from 'react'

// icons
import selectDropIcon from "../../assets/img/icons/bx_bxs-down-arrow.svg";





class RecordDetails extends React.Component {
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
            <input type="text" className="form-control" name="date" value={this.props.details.date} onChange={(e) => this.props.onChange(e)} placeholder="date" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="time" value={this.props.details.time} onChange={(e) => this.props.onChange(e)} placeholder="time" />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" name="pondId" value={this.props.details.pondId} onChange={(e) => this.props.onChange(e)} placeholder="pond ID" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="typeOfFeed" value={this.props.details.typeOfFeed} onChange={(e) => this.props.onChange(e)} placeholder="type of feed" />
          </div>
        </div>
      
        <div className="form-row">

          <div className="col">
            <input type="text" className="form-control" name="sizeOfFeed" value={this.props.details.sizeOfFeed} onChange={(e) => this.props.onChange(e)} placeholder="Size of feed" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="kgOfFeed" value={this.props.details.kgOfFeed} onChange={(e) => this.props.onChange(e)} placeholder="Kg of feed" />
          </div>
        </div>

      </>
    );
  }
}

export default RecordDetails