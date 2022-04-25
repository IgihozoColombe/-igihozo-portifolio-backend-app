import React from 'react';

// icons
import angleRightIcon from "../../assets/img/icons/icons8_angle-right.svg";

// css
import '../../assets/css/Pager.css'

const Pagination = (props) => {

  const noPages = Math.ceil(props.totalCount / 13)

  const pager = () => {

    const lefCuz = props.currentPage - 1
    const rightCuz = props.currentPage + 1

    let pageCount = []

    for (let i = 1; i < noPages + 1; i++) {
      pageCount.push(i)
    }

    if (noPages <= 3){
      return pageCount
    }

    if (props.currentPage <= 4) {
      pageCount = pageCount.map( e => e == 5 ? '...' : e)
      
      pageCount = pageCount.filter((e, i, arr) => i < 5 || e == arr[arr.length - 1])

      
      return pageCount
    }


    if (rightCuz >= 2 || noPages > 5  && !(noPages - rightCuz >= 1)) {
      if (props.currentPage <= 3) {
        
        pageCount = pageCount.map(e => e == rightCuz + 1 && !(e === noPages) ? '...' : e)

      } else {

        pageCount = pageCount.map(e => e == rightCuz + 1 && !(e === noPages) ? '...' : e)
      }
    }

    if (lefCuz > 2 && noPages > 5) {
      pageCount = pageCount.map(e => e == lefCuz - 1 ? '...' : e)
    }


    if (noPages > 5) {

      if (props.currentPage <= 3) {
        pageCount = pageCount.filter((e, i, arr) => i < rightCuz + 1  || e == arr[arr.length - 1])
        pageCount.splice(1, ((lefCuz - 1) - pageCount[1]))        
      } else {
        pageCount = pageCount.filter((e, i, arr) => i < rightCuz + 1 || e == arr[arr.length - 1])
        pageCount.splice(1, ((lefCuz - 1) - pageCount[1]))
      }
    }

    return pageCount
  };

  const pages = pager()

  return (
    <nav className="pager-wrapper" aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {
          pages.map((pageNumber, i) => {
            if (pageNumber === "...") {
              return <li key={i.toString()} className="page-item dot"><a className={`page-link dots`} href="#">&#8230;</a></li>
            }
            return <li key={i.toString()} className="page-item"><a className={`page-link ${pageNumber === props.currentPage ? 'active' : ''}`} onClick={() => props.onChange(pageNumber)} href="javascript:void(0)">{pageNumber}</a></li>
          })
        }

        <li className="page-item"><a className={`page-link ${props.currentPage === noPages ? 'disabled' : ''}`} href="javascript:void(0)"><img src={angleRightIcon} onClick={() => props.onChange(props.currentPage + 1)} alt="" /></a></li>
      </ul>
    </nav>
  );
};

export default Pagination;