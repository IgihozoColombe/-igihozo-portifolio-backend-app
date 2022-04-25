import React from 'react';
import Collection from "../../assets/Img/icons folder/Collection logo.svg"
import farmers from "../../assets/Img/icons folder/noto-v1_man-farmer-medium-skin-tone.svg"
import groups from "../../assets/Img/icons folder/el_group.svg"
import inspection from "../../assets/Img/icons folder/icon-park-outline_inspection.svg"
import items from "../../assets/img/icons folder/Group.svg"
import loan from "../../assets/Img/icons folder/Loan logo $.svg"
import production from "../../assets/Img/icons folder/manufacture 2.svg"
import training from "../../assets/Img/icons folder/healthicons_i-training-class.svg"
import '../../assets/css/_example/Reporting.css';
// import '../../assets/css/Sidebar.css'
import { BrowserRouter as Router, Link  } from "react-router-dom";



function ReportingDetails() {
  return (
    <div className="container my-5 px-2 dashboard">
      <div className="my-5 mx-3">
        <div className="row">
        <Link to ="/collection" className=" col-sm-12  col-md-3 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded">
          <img src={Collection} alt={Collection} />
          <p className="font-weight-bold dashboardlist">Collection</p>
       </Link>
        
        <Link to ="/farmers" className="  col-sm-12 col-md-3 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded">
          <img src={farmers} alt={ farmers} />
          <p className="font-weight-bold dashboardlist">Farmers</p>
       </Link>
        
        <Link to ="/groups" className="  col-sm-12 col-md-3 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 offset-md-1 mb-5 rounded">
          <img src={groups} alt={groups} />
          <p className="font-weight-bold dashboardlist">Groups</p>
       </Link>
        
        <Link to ="/inspection" className= "  col-sm-12 col-md-3 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded">
          <img src={inspection} alt={inspection} />
          <p className="font-weight-bold dashboardlist">Inspection</p>
       </Link>
        
        <Link to ="/items" className="  col-sm-12 col-md-3 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded">
          <img src={items} alt={items} />
          <p className="font-weight-bold dashboardlist">Items</p>
       </Link>
        
        <Link to ="/loan" className="  col-sm-12 col-md-3 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded">
          <img src={loan} alt={loan} />
          <p className="font-weight-bold dashboardlist">Loan</p>
       </Link>

       <Link to ="/production" className="  col-sm-12 col-md-3 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 mr-0 offset-md-1 mb-5 rounded">
          <img src={production} alt="production" />
          <p className="font-weight-bold dashboardlist">Production</p>
       </Link>
        
        <Link to ="/training" className="  col-sm-12 col-md-3 col-xl-3 d-flex justify-content-center align-items-center bg-white p-4 offset-md-1 mb-5 mb-5 rounded">
          <img src={training} alt={training} />
          <p className="font-weight-bold dashboardlist">Training</p>
       </Link>
        
        </div>
      </div>
      </div>
  )
}

export default ReportingDetails