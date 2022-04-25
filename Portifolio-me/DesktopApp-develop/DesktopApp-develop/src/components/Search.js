import React from "react";
import "../assets/css/Search.css";
import { useState } from "react";
// icons
import searchIcon from "../assets/img/icons/Group-6.svg";
import SearchResult from "./SearchResults";

export default function () {
  const APIData = [
    {
      id: 1,
      path: "/",
      name: "Dashboard",
    },
    {
      id: 2,
      path: "/contact",
      name: "Contact",
    },
    {
      id: 3,
      path: "/sales",
      name: "Sales order",
    },
    {
      id: 4,
      path: "/ponds",
      name: "Ponds",
    },
    {
      id: 5,
      path: "/produce",
      name: "Produce works",
    },
    {
      id: 6,
      path: "/invetory",
      name: "Invetory",
    },
    {
      id: 7,
      path: "/finance",
      name: "Finance Works",
    },
    {
      id: 8,
      path: "/expenses",
      name: "Expense",
    },
    {
      id: 9,
      path: "/reports",
      name: "Reports",
    },
    {
      id: 10,
      path: "/logistics",
      name: "Logistics",
    },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  // a function
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    const filteredData = APIData.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
    consolKe.log(filteredData)
  };

  // A function
  const filteredData = APIData.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  return (
    <nav className={`navbar flex-nowrap p-0 top-menu ml-3`} style={{width:''}}>
      <a className="" href="#">
        <img src={searchIcon} alt="" />
      </a>
      <div>
        <input
          className="form-control w-100 search-bar"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => searchItems(e.target.value)}
        />
        <div>{filteredResults?.map((e) => {
          return(
            <SearchResult key={e.id} name = {e.name} linkPath={e.path}/>
          )
        })}</div>
      </div>
    </nav>
  );
}
