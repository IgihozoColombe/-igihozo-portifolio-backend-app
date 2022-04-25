// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------



import React from 'react'
import { GroupProfilingService } from '../services/GroupProfilingService';

// css
import "../assets/css/GroupProfilingCreate.css";

// icons
import selectDropIcon from "../assets/img/icons/bx_bxs-down-arrow.svg";


class GroupProfilingCreate extends React.Component {

  selectIconStyles = {
    background: `#fff url(${selectDropIcon}) no-repeat right .75rem center`
  }

  groupTypes = ['Farmer', 'Harvester', 'irrigator', 'crop picker', 'seed sower',]

  extensionAgents = ['George Lindrof', 'Micheal Campbell', 'Nick Manis', 'Taron Mansoori']

  constructor(props) {
    super(props);

    this.groupService = new GroupProfilingService()

    this.state = {
      name: '',
      code: '',
      type: 'group type',
      regNo: '',
      address: '',
      localGovt: '',
      constituent: '',
      collectionRoute: '',
      gpsCo: '',
      account: {
        title: '',
        no: ''
      },
      bankName: '',
      extensionAgent: 'extension agent',
      fullName: '',
      phoneNo: '',
      email: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.createGroup = this.createGroup.bind(this);
  }

  componentDidMount(props) {
    $('#createGroup').modal('show')
    $('#createGroup').on('hide.bs.modal', (e) => {
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

  createGroup(event) {
    event.preventDefault();

    // -----------------------to dos---------------------------------
    // only re-render if successfull : display error
    // clear form after create

    this.groupService.add(this.state).then(res => this.props.re())

    $('#createGroup').modal('hide')
  }

  render() {
    return (
      <div className="modal fade group-profiling-create" tabIndex="-1" id="createGroup" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content create-group">
            <div className="modal-header">
              <h5 className="modal-title">Create Group</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.createGroup}>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="group name" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="code" value={this.state.code} onChange={this.handleInputChange} placeholder="group code" />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <select id="inputState" name="type" value={this.state.type} onChange={this.handleInputChange} style={this.selectIconStyles} className="custom-select form-control-sm form-control">
                    <option value='Group Type'>Group Type</option>
                    {
                      this.groupTypes.map((type, i) => <option key={i.toString()} value={type}>{type}</option>)
                    }
                  </select>
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="regNo" value={this.state.regNo} onChange={this.handleInputChange} placeholder="Registration Number" />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleInputChange} placeholder="address" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="localGovt" value={this.state.localGovt} onChange={this.handleInputChange} placeholder="local govt" />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" name="constituent" value={this.state.constituent} onChange={this.handleInputChange} placeholder="Constituent" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="collectionRoute" value={this.state.collectionRoute} onChange={this.handleInputChange} placeholder="Collection Route" />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" name="gpsCo" value={this.state.gpsCo} onChange={this.handleInputChange} placeholder="GPS CO." />
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="title" value={this.state.account.title} onChange={(e) => this.setState((state, props) => ({
                    account: {...state.account,
                      title: e.target.value
                    }
                  }))} placeholder="Account Title" />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" name="no" value={this.state.account.no} onChange={(e) => this.setState((state, props) => ({
                    account: {
                      ...state.account,
                      no: e.target.value
                    }
                  }))} placeholder="Account Number" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="bankName" value={this.state.bankName} onChange={this.handleInputChange} placeholder="Bank Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <select style={this.selectIconStyles} name="extensionAgent" value={this.state.extensionAgent} onChange={this.handleInputChange} className="custom-select form-control-sm form-control">
                    <option value="Extension Agent">Extension Agent</option>
                    {
                      this.extensionAgents.map((agent, i) => <option key={i.toString()} value={agent}>{agent}</option>)
                    }
                  </select>
                </div>
                <div className="col">
                  <input type="text" className="form-control" name="fullName" value={this.state.fullName} onChange={this.handleInputChange} placeholder="Full Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" name="phoneNo" value={this.state.phoneNo} onChange={this.handleInputChange} placeholder="Phone Number" />
                </div>
                <div className="col">
                  <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="email" />
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

export default GroupProfilingCreate