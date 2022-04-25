import React, { useState} from 'react'
import "../../assets/css/_example/Reporting.css";
import ReportingDetails from './ReportingDetails';
import Nav from "../Nav"


const links = [

  {
    path: "/",
    name: 'Last Month',
    main: () => <LastMonth />,

  },
  {
    path: "/",
    name: '3 Months',
    main: () => <ThreeMonths />,
  },
  
  {
    path: "/",
    name: '6 Months',
    main: () => <SixMonths />,
  },

  {
    path: "/",
    name: 'Year',
    main: () => <Year />,
  },
  
]


function Reporting() {

  return (
    <div className ="container-fluid p-0">
      <h3 className="choose-text pr-3">Choose  date Range</h3>
      <div classname="top-btn">
     <button className="date-btn">Start Date</button>
     <button className="date-btn">End Date</button>
     <button className="search-btn">Search</button>
     </div>
     <Nav routes={links} />
     
      <div className="d-flex justify-content-between align-items-center ">
         
        <span className="d-flex">

            
          <span className="p-text pr-3">Reporting</span>
         
        </span>
      </div>




      <ReportingDetails/>
 
    </div>
  )
}

export default Reporting