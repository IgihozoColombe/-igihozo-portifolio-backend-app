import React, { useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

// components
import Wrapper from './Wrapper';
import CallsCreate from './CallsCreate';

export default function OutboundsCalls(props) {
    let history = useHistory();
    let { path } = useRouteMatch();

    const [outboundcalls, setOutboundCalls] = useState({
        provider: "",
        user: "",
        password: "",
        apiKey: "",
        testCall: ""
    });

    const tableModel = {
        th: [
            'Provider',
            'User',
            'Password',
            'API Key',
            'Test Call',
            'Actions'
        ],
        indexes: [
            'provider',
            'user',
            'password',
            'apiKey',
            'testCall',
            'actions'
        ],
    };

    const headerModel = [
        {
            name: 'Add New',
            evt: () => addGroup()
        }
    ];

    const heading = 'Outbound Calls';

    const addGroup = () => {
        history.push(`${path}/create`)
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = event.target.value;
        const name = target.name;

        setOutboundCalls({
            ...outboundcalls,
            [name]: value
        });
    };

    return (
        <Wrapper 
            path={'/communication'}
            model={outboundcalls}
            tableModel={tableModel}
            headerModel={headerModel}
            heading={heading}
            callBtn={false}
            formTitle={'outbound calls'}
            create={() => <CallsCreate details={order} onChange={(e) => handleInputChange(e)}/>}
            history={history}
        />
    );
}