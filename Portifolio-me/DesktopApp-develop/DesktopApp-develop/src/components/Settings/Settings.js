import React, { useState } from 'react';
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import SettingsCreate from "./SettingsCreate";

const Settings = (props) => {

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
            'Company Name',
            'Short Name',
            'Company ID',
            'Company Code',
            'Address',
            'City',
            'State',
            'Zip Code',
            'Account Type',
            'Country Code',
            'Check for License',
            'Actions',
        ],
        indexes: [
            'companyName',
            'ShortName',
            'companyID',
            'companyCode',
            'address',
            'city',
            'state',
            'zipCode',
            'accountType',
            'countryCode',
            'checkForLicense',
            //  'actions',
        ]
    }

    const headerModel = [
        {
            name: "Add new",
            evt: () => addGroup()
        }
    ]

    const heading = "Company Details"

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
                create={() => <SettingsCreate onChange={(e) => handleInputChange(e)} />}
                history={history} />
        </div>
    )
}

export default Settings;
