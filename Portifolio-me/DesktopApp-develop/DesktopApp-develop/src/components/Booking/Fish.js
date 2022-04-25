import React from "react";
import Pagination from "../Pager";

// data
import { FISH_DATA } from "./FishData";
import NewPagination from "./NewPagination";

// components

class Fish extends React.Component {
  constructor() {
    super();

    this.state = {
      FishDate: FISH_DATA,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-between py-2">
          <h2>Fish</h2>
          <button type="button" className="btn text-white">
            Next Page
          </button>
        </div>
        <div className="table-responsive mt-2 bg-white p-2">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.state.FishDate.map((data) => (
                    <div className="py-3">{data.Date}</div>
                  ))}
                </td>
                <td>
                  {this.state.FishDate.map((data) => (
                    <div className="py-3">{data.Reference_NO}</div>
                  ))}
                </td>
                <td>
                  {this.state.FishDate.map((data) => (
                    <div className="py-3">{data.Qty}</div>
                  ))}
                </td>
                <td>
                  {this.state.FishDate.map((data) => (
                    <div className="py-3">{data.Price}</div>
                  ))}
                </td>
                <td>
                  {this.state.FishDate.map((data) => (
                    <div className="py-3">{data.Total}</div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <NewPagination />
      </div>
    );
  }
}

export default Fish;
