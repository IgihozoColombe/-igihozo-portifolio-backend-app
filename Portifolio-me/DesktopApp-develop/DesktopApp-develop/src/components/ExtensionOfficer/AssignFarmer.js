import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import FarmerDetails from "./FarmerDetails";

export default function AssignFarmer(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [farmer, setFarmer] = useState({
    extensionOfficer: "",
    farmerUid: "",
    farmerFullname: "",
    localGovt: "",
    constituent: "",
    collectionRoute: "",
    farmersGpsCo: "",
  });

  const tableModel = {
    th: [
      "Extension Officer",
      "Farmer Uid",
      "Farmer Fullname",
     "LocalGovt",
     "Constituent",
      "Collection Route",
      "Farmers Gps Co",
      "actions",
    ],
    indexes: [
      " extensionOfficer",
      "farmerUid",
      "farmerFullname",
      "localGovt",
      "constituent",
      " collectionRoute",
      "farmersGpsCo",
    ],
  };

  const headerModel = [
    {
      name: "add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "assign farmer";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setFarmer({
      ...farmer,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-return"}
      model={farmer}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"assign farmer"}
      create={() => (
        <FarmerDetails
          details={farmer}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
