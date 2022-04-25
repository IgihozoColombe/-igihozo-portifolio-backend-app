import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import ScheduleTrainingCreate from "./ScheduleTrainingCreate";

export default function Training(props) {
  let history = useHistory();
  let { path } = useRouteMatch();
  const [bill, setBill] = useState({
    trainingDate: "",
    time: "",
    totalAttendee: "",
    male: "",
    female: "",
    remark: "",
  });

  const tableModel = {
    th: [
      "Training Date",
      "Time",
      "Total Attendee",
      "Male",
      "Female",
      "Remark",
      "actions",
    ],
    indexes: [
      "trainingDate",
      "time",
      "totalAttendee",
      "male",
      "female",
      "remark",
    ],
  };

  const headerModel = [
    {
      name: "Schedule training",
      evt: () => addGroup(),
    },
  ];

  const heading = "Training";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setBill({
      ...bill,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-return"}
      model={bill}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"Schedule Training"}
      create={() => (
        <ScheduleTrainingCreate
          details={bill}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
