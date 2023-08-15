import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";
import "./style/residenList.css"

const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // pages
  const RESIDENT_PER_PAGE = 20
  const totalPages = Math.ceil(residents.length / RESIDENT_PER_PAGE)

  //residentes que muestra la pagina
  const sliceStart = (currentPage -1) * RESIDENT_PER_PAGE
  const sliceEnd = sliceStart + RESIDENT_PER_PAGE
  const residentInPage = residents.slice(sliceStart, sliceEnd)

  // generacion del arreglo de las paginas mostradas

  const pages = []
  
  for (let i = 1; i <= totalPages; i++){
    pages.push(i)
  }

  useEffect(() => {
    setCurrentPage(1)
  } , [currentLocation])

  return (
    <section class="contentPagination">
      <section className="paginationCard">
        {residentInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
          <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  );
};

export default ResidentList;
