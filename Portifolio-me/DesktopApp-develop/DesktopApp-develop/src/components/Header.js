import React from 'react';

// css 
import '../assets/css/Header.css'

// icons
import smsIcon from "../assets/img/icons/sms1.svg";


export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="d-flex align-items-center top-btn-group">
          <h1 className="h2 mb-0 flex-shrink-0">{this.props.heading}</h1>
          <div className="btn-toolbar justify-content-between w-100">
            <div className="btn-group">
              <button className={`btn text-white bg-transparent p-0 border-0 ${this.props.sms ? '' : 'd-none'}`}><img width="40" height="43" src={smsIcon} alt="" /></button>

              {
                this.props.btns.map((btn, index) =>
                  btn.name === 'next page'
                    ? null
                    : <button key={index} className="btn text-white" onClick={btn.evt} data-toggle="modal">{btn.name}</button>
                )}

            </div>
            <button className="btn text-white" onClick={()=> this.props.onNext()}>
              <span data-feather="calendar"></span>
              Next page
            </button>
          </div>
        </div>
      </header>
    );
  }
}
