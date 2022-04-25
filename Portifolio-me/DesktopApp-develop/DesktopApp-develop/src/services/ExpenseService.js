export class ExpenseService {
  #uri = "http://localhost:5500/expenses";

  constructor() {}

  //GET REQUEST
  getExpenses() {
    return fetch(this.#uri)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error(res.status);
      })
      .then((res) => res.json())
      .catch((err) => err.message);
  }

  add(expense) {
    return fetch(this.#uri, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(expense), // body data type must match "Content-Type" header
    })
      .then((response) => response.json()) // parses response to JSON
      .catch((err) => err);
  }

  update(expense) {
    return fetch(`${this.#uri}/${expense.id}`, {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(expense), // body data type must match "Content-Type" header
    })
      .then((response) => response.json()) // parses response to JSON
      .catch((err) => err);
  }

  delete(expense) {
    return fetch(`${this.#uri}/${expense.id}`, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(expense), // body data type must match "Content-Type" header
    })
      .then((response) => response.json()) // parses response to JSON
      .catch((err) => err);
  }
}
