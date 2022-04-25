import React, { useState } from "react";
import { contractData } from "./Data";

import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

// components
import Pagination from "../Pager";
import Header from "../Header";
import Table from "../Table";
import CreateForm from "../CreateForm";

function Contract() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);

  const data = contractData;

  const tableHeaders = {
    th: [
      "Farmer ID",
      "Contract ID",
      "Start Date",
      "End Date",
      "Product",
      "Price",
      "Units",
      "Amount",
      "Action",
    ],
    indexes: [
      "farmers_id",
      "contract_id",
      "start_date",
      "end_date",
      "product",
      "price",
      "units",
      "amount",
    ],
  };
  const buttons = [
    {
      name: "Add New",
      evt: () => addContract(),
    },
  ];

  const addContract = () => {
    setModal(true);
  };

  const editContract = () => {};

  const delContract = () => {};

  return (
    <div className="container-fluid p-0">
      <div>
        <main role="main">
          <Header heading="Contract" btns={buttons} />
          <Table
            tableHeaders={tableHeaders}
            edit={() => editContract()}
            delete={() => delContract()}
            data={data}
            currentPage={currentPage}
          />
          <Pagination
            currentPage={currentPage}
            onChange={(num) => setCurrentPage(num)}
            totalCount={data.length}
          />
          {modal && <CreateForm setModal={setModal} title="Contract" />}
        </main>
      </div>
    </div>
  );
}

export default Contract;
