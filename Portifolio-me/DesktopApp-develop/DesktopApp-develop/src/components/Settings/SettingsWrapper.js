import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    Redirect
} from 'react-router-dom/cjs/react-router-dom.min';

// css 
import '../../assets/css/PurchaseBill.css'
import Nav from '../Nav';

// Components
// import Header from "../Header";
// import Issue from './Issue';
// import Remark from './Remark';
// import Assign from './Assign';
import Settings from './Settings';


const links = [
    {
        path: "/home",
        name: 'Company Details',
        main: () => <Settings />,

    },
    {
        path: "/productionCollection",
        name: 'Production Collection',
        main: () => <p>------------</p>,

    },
    {
        path: "/communication",
        name: 'Communication',
        main: () => <p>------------</p>,

    },
    {
        path: "/appAccess",
        name: 'App Access',
        main: () => <p>------------</p>,

    },

]

export default function SettingsWrapper(props) {

    let { path } = useRouteMatch()

    const addGroup = () => {
        $('#createGroup').modal('show')
    }

    const editGroup = (group) => {
        setSelected(group)

        $("#profileDetails").modal('show')
    }

    const delGroup = (group) => {
        groupService.delete(group).then(res => changed ? setChanged(false) : setChanged(true))
    }


    return (
        <div className="container-fluid p-0">
            <div>
                <main role="main">

                    <Nav routes={links} />

                    <Switch>
                        {links.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index.toString()}
                                path={`${path}${route.path}`}
                                children={<route.main />}
                            />
                        ))}

                        <Redirect from="/settings" to="/settings/home" />
                    </Switch>

                </main>
            </div>
        </div>
    );

}
