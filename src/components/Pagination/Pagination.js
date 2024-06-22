import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import style from "./Pagination.module.css";
import { useGlobalContext } from "../../context/AppContext";
const Pagination = () => {

    const {handleCurrentPage, getProductSize} = useGlobalContext();
    const [pageCount, setPageCount] = useState(0);


    // useEffect(() => {
    //     const getTotalPage = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=28');
    //         if(!response.ok){
    //             throw new Error("Check your connection")
    //         }
    //         const result = await response.json();
    //         console.log("RS",result);
    //         let total = response.headers.get("x-total-count");
    //         total = Math.ceil(getProductSize/28)
    //         setPageCount(total)
    //     }
    //     getTotalPage();
    // }, [])

    // const handlePageChange = (data) => {
    //     const pageNumber = data.selected + 1;
    //     console.log(pageNumber);
    //     handleCurrentPage(pageNumber)
    // }


    return(
        <>
         {/* <ReactPaginate
          previousLabel={<BiChevronLeft size={18}/>}
          nextLabel={<BiChevronRight size={18}/>}
          className={style.pagination}
          breakLabel={"..."}
          pageCount={pageCount}
          activeClassName={style.active}
          activeLinkClassName={style.activelink}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          pageClassName={style.page}
          previousClassName={style.prev}
          nextClassName={style.next}
        /> */}
        </>
    )
}
export default Pagination;