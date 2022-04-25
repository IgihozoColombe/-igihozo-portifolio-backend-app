import React, { useMemo } from 'react';
import Edit from '../../Images/edit.png';
import Delete from '../../Images/delete.png';
import Rectangle from '../../Images/Rectangle.png'


let PAGESIZE = 13;

export default function SalesOrderDetails(props) {
    const meoised = useMemo(() => {
        const firstPageIndex = (props.currentPage - 1) * PAGESIZE;
        const lastPageIndex = firstPageIndex + PAGESIZE;
        return [firstPageIndex, lastPageIndex]
    }, [props.currentPage])
    return (
        <div>
                   <div className="OrderWrapper px-4">
                <div className="table-responsive ">
                   <table className="table">
                        <thead>
                            <tr>
                            {
                                props.tableHeaders.th.map((th, index) =>
                                    <th key={index.toString()} scope="col">{th}</th>
                                )
                            }
                            </tr>          
                        </thead>
                        <tbody>
              {props.data.slice(meoised[0], meoised[1]).map((data, i) => {
        return (
            <tr key={i}>
                {
                  props.tableHeaders.indexes.map((index, i) => <td key={i.toString()}>{data[index]}</td>)
                }
            <td>
                <div className="d-flex">
                    <div className="cursor-pointer d-flex align-items-center justify-content-center mr-3">
                        <img src={ Rectangle} alt={Rectangle} />
                        <img className="tableActions" src={Edit} alt={Edit} />
                    </div>
                    <div className="cursor-pointer d-flex align-items-center justify-content-center">
                        <img src={ Rectangle} alt={Rectangle} />
                        <img className="tableActions" src={Delete} alt={Delete} />
                    </div>
                </div>
              
           
              
            </td>
            </tr>
        )
    })}
         </tbody>
                    </table>
                </div>
                </div>
        </div>
    )
}