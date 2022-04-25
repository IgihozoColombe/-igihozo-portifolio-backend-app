import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Services
import { GroupProfilingService } from '../services/GroupProfilingService';

// components
import Pagination from './Pager';
import GroupProfilingCreate from "./GroupProfilingCreate";
import Loader from './loader';
import GroupProfilingDetails from "./GroupProfilingDetails";
import Header from "./Header";
import Table from './Table';


// css
import '../assets/css/GroupProfiling.css'


function GroupProfiling() {

  let history = useHistory()

  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [changed, setChanged] = useState(false)
  const [selected, setSelected] = useState({
    account: {
      title: "",
      no: ""
    },
    address: "",
    bankName: "",
    code: "",
    collectionRoute: "",
    constituent: "",
    email: "",
    extensionOfficer: "",
    fullName: "",
    gpsCo: "",
    id: "",
    localGovt: "",
    name: "",
    phoneNumber: "",
    regNo: "",
    type: ""
  })
  const tableHeaders = {
    th: [
      'group name',
      'group code',
      'group type',
      'registration no',
      'collection route',
      'GPS CO..',
      'account title',
      'account no',
      'Bank name',
      'Actions',
    ],
    indexes: [
      'name',
      'code',
      'type',
      'regNo',
      'collectionRoute',
      'gpsCo',
      "account['title']",
      "account['no']",
      'bankName',
    ]
  }
  const buttons = [
    {
      name: "add new",
      evt: () => addGroup()
    },
    {
      name: "add farmer",
      evt: () => console.log('adding farmer ')
    },
    {
      name: "next page",
      evt: () => setCurrentPage(currentPage + 1)
    }
  ]
  const groupService = new GroupProfilingService()

  useEffect((props) => {

    groupService.getGroups().then(res => {
      if (typeof res === 'string') {
        setError(res)
      } else {
        setIsLoaded(true)
        setData(res)
      }
    })

  }, [changed])

  const addGroup = () => {
    history.push('/groups/create')
  }

  const editGroup = (group) => {
    setSelected(group)
    history.push(`/groups/details/:${group.id}`)
  }

  const delGroup = (group) => {
    groupService.delete(group).then(res => changed ? setChanged(false) : setChanged(true))
  }

  return (
    <div className="container-fluid p-0">
      <div>

        <main role="main">

          <Header heading="Groups" btns={buttons} />

          {/* ================= Table =================== */}
          {
            error
              ? <div>error: {error}</div>
              : !isLoaded
                ? <Loader />
                : <Table
                  tableHeaders={tableHeaders}
                  edit={(group) => editGroup(group)}
                  delete={(group) => delGroup(group)}
                  data={data}
                  currentPage={currentPage}
                />
          }
          {/* ================= Table =================== */}


          {/* ================= Pagination =================== */}
          {
            isLoaded &&
            <Pagination
              currentPage={currentPage}
              onChange={(num) => setCurrentPage(num)}
              totalCount={data.length}
            />
          }
          {/* ================= Pagination =================== */}


          <Switch>
            <Route
              path="/groups/details/:id"
              children={
                <GroupProfilingDetails
                  details={selected}
                  goBack={() => history.goBack()}
                  re={
                    () => !changed
                      ? setChanged(true)
                      : setChanged(false)
                  } />
              }
            />
            <Route
              path="/groups/create"
              children={<GroupProfilingCreate goBack={() => history.goBack()} re={() => !changed ? setChanged(true) : setChanged(false)} />}
            />
          </Switch>

        </main>
      </div>

    </div>
  );
}

export default GroupProfiling