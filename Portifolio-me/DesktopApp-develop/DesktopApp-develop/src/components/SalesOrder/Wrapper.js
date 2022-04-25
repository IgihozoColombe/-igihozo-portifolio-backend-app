import React, { useEffect, useState } from 'react';
import { Switch, useRouteMatch, Route } from "react-router-dom";
// import axios from 'axios';
// Services
import { Request } from '../../services/Requests';

// components
import Pagination from '../Pager';
import Loader from '../loader';
import Header from "../Header";
import SalesOrderDetails from './SalesOrderDetails';
import CreateSalesForm from './CreateSalesForm';


export default function Wrapper(props) {

  const request = new Request(props.path)

  let { path } = useRouteMatch()

  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [changed, setChanged] = useState(false)

  const [model, setModel] = useState(props.model)

  useEffect(() => {

    request.get().then(res => {
        if (typeof res === 'string') {
          setError(res)
        } else {
          setIsLoaded(true)
          setData(res)
        }
      })
  
    }, [changed])




  return (
    <div className="container-fluid p-0">
      <div>

        <Header
          heading={props.heading}
          smsBtn={props.smsBtn}
          btns={props.headerModel}
          onNext={() => setCurrentPage(currentPage + 1 )}/>

        <main role="main" >
          {
            error
              ? <div>error: {error}</div>
              : !isLoaded
                ? <Loader />
                : <SalesOrderDetails
                  tableHeaders={props.tableModel}
                  data={data}
                  currentPage={currentPage}
                   />
          }
          {
            isLoaded &&
            <Pagination
              currentPage={currentPage}
              onChange={(num) => setCurrentPage(num)}
              totalCount={data.length}
            />
          }

          <Switch>
            {/* <Route
              path="/groups/details/:id"
              children={
                <GroupProfilingDetails
                  details={order}
                  goBack={() => history.goBack()}
                  re={
                    () => !changed
                      ? setChanged(true)
                      : setChanged(false)
                  } />
              }
            /> */}
            <Route
              path={`${path}/create`}
              children={
                <CreateSalesForm
                //   submit={(e) => create(e)}
                      title={props.formTitle}
                      show={props.lgShow}
                      // show1={props.llShow}
                  goBack={() => props.history.goBack()}
                  re={() => !changed ? setChanged(true) : setChanged(false)} >
                  <props.create/>
                </CreateSalesForm>
              }
            />
          </Switch>

        </main>
      </div>
    </div>
  )
}
// export default Wrapper;