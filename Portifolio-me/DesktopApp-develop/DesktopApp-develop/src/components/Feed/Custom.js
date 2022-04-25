import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Wrapper from "./Wrapper";
import CustomCreate from "./CustomCreate";

const Custom = () => {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [feed, setFeed] = useState({
    date: "",
    time: "",
    productionCode: "",
    preparedBy: "",
    batchCode: "",
    ingredientList: "",
    crushedKg: "",
    uncrushedKg: "",
    pelletedKg: "",
    totalKg: "",
    totalCost: "",
    approve: "",
  });

  const tableModel = {
    th: [
      "Date",
      "Time",
      "Production Code",
      "Prepared By",
      "Batch Code",
      "Ingredient List",
      "Crushed Kg",
      "Uncrushed Kg",
      "Pelleted Kg",
      "Total Kg",
      "Total Cost",
      "Approve",
      "actions",
    ],
    indexes: [
      "date",
      "time",
      "productionCode",
      "preparedBy",
      "batchCode",
      "ingredientList",
      "crushedKg",
      "uncrushedKg",
      "pelletedKg",
      "totalKg",
      "totalCost",
      "approve",
    ],
  };

  const headerModel = [
    {
      name: "Add new",
      evt: () => addGroup(),
    },
  ];

  const heading = "Custom";

  const addGroup = () => {
    history.push(`${path}/create`);
    setLgShow(true);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setFeed({
      ...feed,
      [name]: value,
    });
  };
  return (
    <div>
      <Wrapper
        path={"/purchase-return"}
        model={feed}
        tableModel={tableModel}
        headerModel={headerModel}
        heading={heading}
        smsBtn={false}
        formTitle={"Ingredient List"}
        create={() => (
          <CustomCreate details={feed} onChange={(e) => handleInputChange(e)} />
        )}
        history={history}
      />
    </div>
  );
};

export default Custom;
