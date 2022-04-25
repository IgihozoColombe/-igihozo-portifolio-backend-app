import React, { useMemo } from "react";

// css
import "../assets/css/Table.css";

// icons
import binIcon from "../assets/img/icons/ri_delete-bin-2-fill.svg";
import editIcon from "../assets/img/icons/eva_edit-2-outline.svg";

let PAGESIZE = 13;

export default function Table(props) {
  const meoised = useMemo(() => {
    const firstPageIndex = (props.currentPage - 1) * PAGESIZE;
    const lastPageIndex = firstPageIndex + PAGESIZE;
    return [firstPageIndex, lastPageIndex];
  }, [props.currentPage]);

  return (
    <div className="table-wrapper table-responsive">
      <table className="table table-borderless text-capitalize m-0 table-sm">
        <thead>
          <tr>
            {props.tableHeaders.th.map((th, index) => (
              <th key={index.toString()} scope="col">
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.slice(meoised[0], meoised[1]).map((data, i) => (
            <tr key={i}>
              {props.tableHeaders.indexes.map((index, i) => (
                <td key={i.toString()}>{data[index]}</td>
              ))}
              <td>
                <button className="btn mr-2">
                  <img
                    width="8"
                    height="8"
                    src={editIcon}
                    alt=""
                    onClick={() => {
                      props.edit(data);
                    }}
                  />
                </button>
                <button className="btn">
                  <img
                    width="8"
                    height="8"
                    src={binIcon}
                    onClick={() => {
                      props.delete(data);
                    }}
                    alt=""
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
