import React from 'react';

import {  HashRouter as Router,
  Switch,
  Route, 
  useRouteMatch, 
  Redirect
} from 'react-router-dom/cjs/react-router-dom.min';

// css 
import '../../assets/css/PurchaseBill.css'
import Nav from '../Nav';

// Components
import Header from "../Header";
import Issue from './Issue';
import Remark from './Remark';
import Assign from './Assign';
import HarvestCollection from './HarvestCollection';


const links = [
  {
    path: "/home",
    name: 'Harvest Collection Recording',
    main: () => <HarvestCollection />,

  },
  {
    path: "/issue",
    name: 'Harvest Collection Issues',
    main: () => <Issue />,
  },
  {
    path: "/remark",
    name: 'Remark',
    main: () => <Remark />,
  },
  {
    path: "/assign",
    name: 'Assign',
    main: () => <Assign />,
  }
]

export default function HarvestCollectionWrapper(props) {

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
            
            <Redirect from="/harvest" to="/harvest/home" />
          </Switch>

        </main>
      </div>
    </div>
  );

}
