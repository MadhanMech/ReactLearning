import React from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
const PaginationQueries = () => {
    const [pageNumber,setPageNumber]=React.useState(1)
  const fetchStudents = (pageNumber) => {
    return axios.get(
      `http://localhost:3001/students/?_limit=1&_page=${pageNumber}`
    );
  };
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["students", pageNumber],
    queryFn: () => fetchStudents(pageNumber),
    placeholderData:keepPreviousData//avoid flickering
  });
  return (
    <div className="container">
      <h3>paginationQueries</h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error Occured</p>}
      {data?.data?.map((item) => (
        <div  key={item.id}>
          <p>{item.id}</p>
          <h4>{item.name}</h4>
          <p>{item.email}</p>
          <p>{item.course}</p>
          <p>{item.joined_on}</p>
        </div>
      ))}
      <button disabled={pageNumber===1} onClick={()=>setPageNumber(pageNumber-1)}>Previous</button>
      <button disabled={pageNumber===2} onClick={()=>setPageNumber(pageNumber+1)}>Next</button>   
    </div>
  );
};

export default PaginationQueries;
