import React,{useState} from 'react'
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from './Wrapper';
import GroupDetails from './GroupDetails';

export default function AssignGroup(props) {
 
  let history = useHistory()
  let { path } = useRouteMatch()

  const [group, setGroup] = useState({
    extensionOfficer: "",
    groupName: "",
    groupCode: "",
    collectionRoute: "",
    farmersGpsCo: "",
  })

  const tableModel = {
    th: [
      'Extension Officer',
      'Group Name',
      'Group Code',
      'Collection Route',
      'Farmers Gps Co',
      'actions',
    ],
    indexes: [
        'extensionOfficer',
        ' groupName',
        'groupCode',
        ' collectionRoute',
        'farmersGpsCo',
      ]
    }

    const headerModel = [
        {
          name: "add new",
          evt: () => addGroup()
        }
      ]

      const heading = "assign group"

  const addGroup = () => {
    history.push(`${path}/create`)
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setGroup({
      ...group,
      [name]: value
    });
  }


    return (
        <Wrapper
      path={"/purchase-return"}
      model={group}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={'assign group'}
      create={() => <GroupDetails details={group} onChange={(e) => handleInputChange(e)}/>}
      history={history} />
  )
}
