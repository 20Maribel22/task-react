import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "./PaginationData.css";

function PaginationData({ pages, paginate, nextClick, prevClick }) {
  return (
    <Pagination className="pag__container">
      <Pagination.Prev  onClick={() =>{prevClick()}} />
      {pages.map((p) => {
        return (
        <Pagination.Item onClick={() =>{paginate(p)}} key={p}>{p}</Pagination.Item>
        )
      })}
      <Pagination.Next  onClick={() =>{nextClick()}} />
    </Pagination>
  );
}

export default PaginationData;
