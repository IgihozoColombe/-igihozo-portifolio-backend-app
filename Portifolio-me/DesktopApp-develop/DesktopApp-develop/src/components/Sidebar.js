import React, { useEffect, useRef } from 'react'
import '../assets/css/Sidebar.css'

import { BrowserRouter as Router, NavLink } from "react-router-dom";

//btn bg-image 
import btnFrame from '../assets/img/Framebtn.png'

// icons
import contactIcon from '../assets/img/icons/internet 1-contact.svg'
import helpIcon from '../assets/img/icons/information 1.svg'
import accountIcon from '../assets/img/icons/settings 1.svg'


function Sidebar(props) {
  const sidebar = useRef(null)

  const openNav = (target) =>{
    target.parentElement.style.left =  "250px"
      sidebar.current.style.width = "254px"
      target.parentElement.style.paddingLeft = "6px"

       props.side(true)

  }

  const closeNav = (target) => {
    target.parentElement.style.left = "0"
    target.parentElement.style.paddingLeft = "0"
    sidebar.current.style.width = "0px"

    props.side(false)


  }

  const toggleSide = (target) => {
    props.isOpen ? closeNav(target) : openNav(target)
  }

  return (
    <aside ref={sidebar} className="d-flex flex-column flex-shrink-0 text-white justify-content-between">
      <a href="/" className="text-white text-decoration-none">
        <span className="fs-4">Oluadepe Farms</span>
      </a>
      <a href="#" className="d-flex align-items-center text-white text-decoration-none" data-bs-toggle="dropdown" >

        <img src="https://github.com/mdo.png" alt="" width="34" height="34" className="rounded-circle me-2" />
        <div className="d-flex flex-column pl-2">
          <strong>Donat Twerski</strong>
          <small>ADMIN</small>
        </div>
      </a>

      {/* menu */}
      <ul className="nav nav-pills flex-column text-capitalize">
        <div className="container-fluid">
          <span className="navbar-text">
            menu
          </span>
        </div>
        {
          props.links.map((link, index) => {
            if (link.path === "/") {
              return (
                <li key={index} className="nav-item">
                  <NavLink activeClassName="active" exact={link.exact} className={"nav-link text-white"} to={link.path}>
                    <img src={link.icon} /> Home
                  </NavLink>

                </li>)
            }
            return (
              <li key={index} className="nav-item">
                <NavLink activeClassName="active" exact={link.exact} className={"nav-link text-white"} to={link.path}>
                  <img src={link.icon} /> {link.path.slice(1)}
                </NavLink>

              </li>)
          }
          )
        }
      </ul>
      {/* menu */}

      {/* Support */}
      <ul className="nav flex-column">
        <div className="container-fluid">
          <span className="navbar-text">
            support
          </span>
        </div>
        <li className="nav-item">
          <NavLink activeClassName="active" className={"nav-link text-white"} to='/help'>
            <img src={helpIcon} /> Need Help
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className={"nav-link text-white"} to="/contact">
            <img src={contactIcon} /> Contact US
          </NavLink>
        </li>
      </ul>
      {/* Support */}

      {/* Support2 */}
      <ul className="nav flex-column">
        <div className="container-fluid">
          <span className="navbar-text">
            support
          </span>
        </div>
        <li className="nav-item">
          <NavLink activeClassName="active" className={"nav-link text-white"} to="/account">
            <img src={accountIcon} /> account
          </NavLink>
        </li>
      </ul>
      {/* Support2 */}

      <button onClick={(e) => toggleSide(e.target)}>
        <img src={btnFrame} alt="" />
      </button>

    </aside>
  )
}

export default Sidebar