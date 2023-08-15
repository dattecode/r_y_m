import React from "react";
import "./style/page.css"

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="pages">
      {pages.map((page) => (
        <li className={`${currentPage === page && "pageOn"} page`} onClick={() => setCurrentPage(page)} key={page}>
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
