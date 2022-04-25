import React from 'react';

import {  HashRouter as Router,
  Switch,
  Route, 
  useRouteMatch, 
  Redirect
} from 'react-router-dom/cjs/react-router-dom.min';

// css 
import "../../assets/css/CollectionPayment.css";
import Nav from '../Nav';

// Components
// import Header from "../Header";
import MailServer from './MailServer';
import Sms from './SMS';
import Calls from './Calls';

const links = [
  {
    path: "/home",
    name: 'Outgoing Mail Server',
    main: () => <MailServer />,
  },
  {
    path: "/sms",
    name: 'Outgoing SMS',
    main: () => <Sms />,
  },
  {
    path: "/calls",
    name: 'Outbound Calls',
    main: () => <Calls />,
  }
]

export default function CommunicationWrapper(props) {

  let { path } = useRouteMatch()

  const addGroup = () => {
    $('#createGroup').moda  ('show')
  }

  const editGroup = (group) => {
    setSelected(group)

    $("#profileDetails").modal('show')
  }

  const delGroup = (group) => {
    groupService.delete(group).then((res) => (changed ? setChanged(false) : setChanged(true)));
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
            
            <Redirect from="/communication" to="/communication/home" />
          </Switch>

        </main>
      </div>
    </div>
  );
}
