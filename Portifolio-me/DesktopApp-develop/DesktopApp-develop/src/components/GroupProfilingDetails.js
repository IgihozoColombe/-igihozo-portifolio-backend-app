import React from 'react'
import { GroupProfilingService } from '../services/GroupProfilingService';

// css
import "../assets/css/GroupProfilingDetails.css";

// icons
import selectDropIcon from "../assets/img/icons/bx_bxs-down-arrow.svg";

// imgs
import avatar from "../assets/img/Rectangle 32.png";

class GroupProfilingDetails extends React.Component {

  selectIconStyles = {
    background: `#fff url(${selectDropIcon}) no-repeat right .75rem center`
  }

  tableHeaders = [
    "farmers id",
    'full name'
  ]

  farmers = [
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },
    {
      id: 12234,
      name: 'Goerge Lindrof',
      img: avatar
    },

  ]

  groupTypes = ['Farmer', 'Harvester', 'irrigator', 'crop picker', 'seed sower',]

  extensionOfficers = ['George Lindrof', 'Micheal Campbell', 'Nick Manis', 'Taron Mansoori']

  constructor(props) {
    super(props);
    this.state = props.details;
    this.groupService = new GroupProfilingService()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.updateGroup = this.updateGroup.bind(this)


  }

  componentDidMount(){
    $("#profileDetails").modal('show')
    $('#profileDetails').on('hide.bs.modal', (e) => {
      this.props.goBack()
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  updateGroup(event) {
    event.preventDefault();

    this.groupService.update(this.state).then(res => this.props.re())

    $("#profileDetails").modal('hide')
  }

  render() {
    return (
      <div className={`modal fade group-details`} tabIndex="-1" id="profileDetails" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content profile-details p-0">
            <div className="container-fluid">
              <div className="row">

                {/* side 1 wuith form */}
                <div className="col-lg-8">
                  <div className="modal-header">
                    <h5 className="modal-title">Group details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>


                  {/* form */}
                  <form onSubmit={this.updateGroup}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="groupCode">Group Code</label>
                        <input type="text" name="code" value={this.state.code} onChange={this.handleInputChange} className="form-control" id="groupCode" placeholder="GRPC0020" />
                      </div>
                      <div className="form-group col">
                        <label htmlFor="groupType">Group Type</label>

                        <select id="inputState" name="type" value={this.state.type} onChange={this.handleInputChange} style={this.selectIconStyles} className="custom-select form-control-sm form-control">
                          <option value='Group Type'>Group Type</option>
                          {
                            this.groupTypes.map((type, i) => <option key={i.toString()} value={type}>{type}</option>)
                          }
                        </select>

                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="groupName">Group name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} className="form-control" id="groupName" placeholder="Email" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="regNo">Registration Number</label>
                        <input type="text" name="regNo" value={this.state.regNo} onChange={this.handleInputChange} className="form-control" id="regNo" placeholder="233" />
                      </div>
                      <div className="form-group col">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" value={this.state.address} onChange={this.handleInputChange} className="form-control" id="address" placeholder="" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="localGovt">Local Govt.</label>
                        <input type="text" name="localGovt" value={this.state.localGovt} onChange={this.handleInputChange} className="form-control" id="localGovt" placeholder="233" />
                      </div>
                      <div className="form-group col">
                        <label htmlFor="constituent">Constituent</label>
                        <input type="text" name="constituent" value={this.state.constituent} onChange={this.handleInputChange} className="form-control" id="constituent" placeholder="" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="collectionRoute">Collection Route</label>
                        <input type="text" name="collectionRoute" value={this.state.collectionRoute} onChange={this.handleInputChange} className="form-control" id="collectionRoute" placeholder="233" />
                      </div>
                      <div className="form-group col">
                        <label htmlFor="gpsCo">GPS Co.</label>
                        <input type="text" name="gpsCo" value={this.state.gpsCo} onChange={this.handleInputChange} className="form-control" id="gpsCo" placeholder="" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="accTitle">Account Title</label>
                        <input type="text" name="title" value={this.state.account.title} onChange={(e) => this.setState((state, props) => ({
                          account: {
                            ...state.account,
                            title: e.target.value
                          }
                        }))} className="form-control" id="accTitle" placeholder="233" />
                        
                      </div>
                      <div className="form-group col">
                        <label htmlFor="accNo">Account No</label>
                        <input type="text" name="no" value={this.state.account.no} onChange={(e) => this.setState((state, props) => ({
                          account: {
                            ...state.account,
                            no: e.target.value
                          }
                        }))} className="form-control" id="accNo" placeholder="" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="bankName">Bank Name</label>
                        <input type="text" name="bankName" value={this.state.bankName} onChange={this.handleInputChange} className="form-control" id="bankName" placeholder="233" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="regNo">Extesion Officer</label>
                        <select style={this.selectIconStyles} name="extensionOfficer" value={this.state.extensionOfficer} onChange={this.handleInputChange} className="custom-select form-control-sm form-control">
                          <option value="Extension Officer">Extension Officcer</option>
                          {
                            this.extensionOfficers.map((officer, i) => <option key={i.toString()} value={officer}>{officer}</option>)
                          }
                        </select>
                      </div>
                      <div className="form-group col">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleInputChange} className="form-control" id="fullName" placeholder="" />
                      </div>
                    </div>


                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange} className="form-control" id="phone" placeholder="233" />
                      </div>
                      <div className="form-group col">
                        <label htmlFor="address">Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" id="address" placeholder="" />
                      </div>
                    </div>

                    <div className="form-row justify-content-end">
                      <button type="submit" className="btn">save</button>
                    </div>
                  </form>

                  {/* form */}
                </div>

                {/* side 2 with list */}
                <div className="col-lg-4 border-left">
                  <div className="modal-header">
                    <h5 className="modal-title">Membership</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times; </span>
                    </button>
                  </div>
                  <p className="text-capitalize d-flex justify-content-between align-items-baseline p-0">Number Of Farmers: 20 <span>
                    <button className="btn">Add Farmer</button></span></p>

                  <div className="table-responsive">
                    <table className="table text-capitalize m-0 table-sm table-borderless">
                      <thead>
                        <tr>
                          {
                            this.tableHeaders.map((th, index) =>
                              // unique key for every child in list
                              <th key={index.toString()} scope="col">{th}</th>
                            )
                          }
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.farmers.map((farmer, index) =>
                            // unique key for every child in list
                            <tr key={index.toString()}>
                              <td>
                                <img className="mr-3 avatar" width="36" height="36" src={farmer.img} alt="avatar image" />
                                {farmer.id}
                              </td>
                              <td>{farmer.name}</td>
                              <td className="text-right">
                                <button className="btn">Remove</button>
                              </td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupProfilingDetails