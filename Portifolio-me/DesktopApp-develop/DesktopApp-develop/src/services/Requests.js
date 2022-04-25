export class Request {

  // #uri = "http://localhost:5500";

  constructor(path) { 
    this.path = path
  }

  //GET REQUEST
  get() {
    return fetch(`http://localhost:5500${this.path}`).then(res => {
      if (res.ok) {
        return res
      }
      throw new Error(res.status)
    })
      .then(res => res.json()).catch(err => err.message)
  }

  add(data) {
    return fetch(`http://localhost:5500${this.path}`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.json()) // parses response to JSON
      .catch(err => err)
  }


  update(data) {
    return fetch(`http://localhost:5500${this.path}/${data.id}`, {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.json()) // parses response to JSON
      .catch(err => err)
  }
  
  delete(data){
    return fetch(`http://localhost:5500${this.path}/${data.id}`, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.json()) // parses response to JSON
      .catch(err => err)
  }
}
