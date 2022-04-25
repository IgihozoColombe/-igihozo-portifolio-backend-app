import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import HarvestCollectionCreate from './HarvestCollectionCreate';

const HarvestCollection = (props) => {

    let history = useHistory()
    let { path } = useRouteMatch()

    // const [bill, setBill] = useState({
    //     customerName: "",
    //     billNo: "",
    //     date: "",
    //     no: "",
    //     item: "",
    //     qty: "",
    //     units: "",
    //     price: "",
    //     amount: "",
    //     description: "",
    //     paymentType: "",
    //     discount: "",
    //     tax: "",
    //     total: ""
    //   })
    
      const tableModel = {
        th: [
          'Collection ID',
          'Reference No',
          'Offtaker ID',
          'Group',
          'Farmer ID',
          'Pond ID',
          'Fish Species',
          'Traceability Code',
          'Kg Collected',
          'Price per Kg',
          'Total value',
          // 'Actions',
        ],
        indexes: [
          'collectionID',
          'referenceNo',
          'offtakerID',
          'group',
          'farmerID',
          'pondID',
          'fishSpecies',
          'traceabilityCode',
          'kgCollected',
          'pricePerKg',
          'totalValue',
          'actions',
        ]
      }
    
      const headerModel = [
        {
          name: "Add new",
          evt: () => addGroup()
        }
      ]
    
      const heading = "Harvest Collection Recording"
    
      const addGroup = () => {
        history.push(`${path}/create`)
      }
    
      const handleInputChange = (event) => {
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
    
        // setBill({
        //   ...bill,
        //   [name]: value
        // });
      }

    return (
        <div>
            <Wrapper
                path={"/purchase-return"}
                // model={bill}
                tableModel={tableModel}
                headerModel={headerModel}
                heading={heading}
                smsBtn={false}
                formTitle={'Harvest Collection'}
                create={() => <HarvestCollectionCreate onChange={(e) => handleInputChange(e)}/>}
                history={history} />
        </div>
    )
}

export default HarvestCollection
