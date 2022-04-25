import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

// Services
import { ExpenseService } from "../../services/ExpenseService";

// components
import Pagination from "../Pager";
import ExpenseCreate from "./ExpenseCreate";
import Loader from "../loader";
import ExpenseDetails from "./ExpenseDetails";
import Header from "../Header";
import Table from "../Table";

// css
import "../../assets/css/GroupProfiling.css";

function Expense() {
  let history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [changed, setChanged] = useState(false);
  const [selected, setSelected] = useState({
    item: "",
    unit_price: "",
    unit: "",
    amount: "",
    date: "",
  });
  const tableHeaders = {
    th: ["No", "Item", "Unit Price", "Unit", "Amount", "Date", "Actions"],
    indexes: ["id", "item", "unit_price", "unit", "amount", "date"],
  };
  const buttons = [
    {
      name: "Add New",
      evt: () => addExpense(),
    },
  ];
  const expenseService = new ExpenseService();

  useEffect(
    (props) => {
      expenseService.getExpenses().then((res) => {
        if (typeof res === "string") {
          setError(res);
        } else {
          setIsLoaded(true);
          setData(res);
        }
      });
    },
    [changed]
  );

  const addExpense = () => {
    history.push("/expenses/create");
  };

  const editExpense = (expense) => {
    setSelected(expense);
    history.push(`/expenses/details/:${expense.id}`);
  };

  const delExpense = (expense) => {
    expenseService
      .delete(expense)
      .then((res) => (changed ? setChanged(false) : setChanged(true)));
  };

  return (
    <div className="container-fluid p-0">
      <div>
        <main role="main">
          <Header heading="Expenses" btns={buttons} />

          {/* ================= Table =================== */}
          {error ? (
            <div>error: {error}</div>
          ) : !isLoaded ? (
            <Loader />
          ) : (
            <Table
              tableHeaders={tableHeaders}
              edit={(expense) => editExpense(expense)}
              delete={(expense) => delExpense(expense)}
              data={data}
              currentPage={currentPage}
            />
          )}
          {/* ================= Table =================== */}

          {/* ================= Pagination =================== */}
          {isLoaded && (
            <Pagination
              currentPage={currentPage}
              onChange={(num) => setCurrentPage(num)}
              totalCount={data.length}
            />
          )}
          {/* ================= Pagination =================== */}

          <Switch>
            <Route
              path="/expenses/details/:id"
              children={
                <ExpenseDetails
                  details={selected}
                  goBack={() => history.goBack()}
                  re={() => (!changed ? setChanged(true) : setChanged(false))}
                />
              }
            />
            <Route
              path="/expenses/create"
              children={
                <ExpenseCreate
                  goBack={() => history.goBack()}
                  re={() => (!changed ? setChanged(true) : setChanged(false))}
                />
              }
            />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default Expense;
