export class GroupProfilingService {

  #uri = "http://localhost:5500/groups";

  constructor() { }

  //GET REQUEST
  getGroups() {
    return fetch(this.#uri).then(res => {
      if (res.ok) {
        return res
      }
      throw new Error(res.status)
    })
      .then(res => res.json()).catch(err => err.message)
  }

  add(group) {
    return fetch(this.#uri, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(group), // body data type must match "Content-Type" header
    })
      .then(response => response.json()) // parses response to JSON
      .catch(err => err)
  }


  update(group) {
    return fetch(`${this.#uri}/${group.id}`, {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(group), // body data type must match "Content-Type" header
    })
      .then(response => response.json()) // parses response to JSON
      .catch(err => err)
  }
  
  delete(group){
    return fetch(`${this.#uri}/${group.id}`, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(group), // body data type must match "Content-Type" header
    })
      .then(response => response.json()) // parses response to JSON
      .catch(err => err)
  }
}
