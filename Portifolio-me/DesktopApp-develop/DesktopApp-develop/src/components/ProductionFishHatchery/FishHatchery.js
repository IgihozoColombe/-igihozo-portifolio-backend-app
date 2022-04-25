import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import FishHatcheryCreate from "./FishHatcheryCreate";

export default function FishHatchery(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [hatchery, setHatchery] = useState({
    date: "",
    time: "",
    batchCode: "",
    noOfFemale: "",
    noOfMale: "",
    timeOfInjection: "",
    timeOfSpawning: "",
    hatchingRate: "",
    remarkEgg: "",
    remark: "",
  });

  const tableModel = {
    th: [
      "Date",
      "Time",
      "Batch Code",
      "No of Female",
      "No of Male",
      "Time of Injection",
      "Time of Spawning",
      "Hatching Rate",
      "Remark Egg",
      "Remarks",
      "Actions",
    ],
    indexes: [
      "date",
      "time",
      "batchCode",
      "noOfFemale",
      "noOfMale",
      "timeOfInjection",
      "timeOfSpawning",
      "hatchingRate",
      "remarkEgg",
      "remarks",
    ],
  };

  const headerModel = [
    {
      name: "Add New",
      evt: () => addGroup(),
    },
  ];

  const heading = "Hatchery";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setHatchery({
      ...hatchery,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-return"}
      model={hatchery}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"fish hatchery"}
      create={() => (
        <FishHatcheryCreate
          details={hatchery}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
