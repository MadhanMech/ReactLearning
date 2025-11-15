import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
const ReactQueryFetchByClick = () => {
  const fetchStudent = () => {
    return axios.get("http://localhost:3001/students");
  };

  const { data, isError, isLoading, error, refetch } = useQuery({
    queryKey: ["stduents"],
    queryFn: () => fetchStudent(),
    enabled: false,
    // staleTime:5000,
    // refetchInterval:5000,
    // refetchIntervalInBackground:true,
  });
  return (
    <>
      <div>ReactQueryFetchByClick</div>
      <button onClick={refetch}>Load Data</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error Occured</p>}
      {data?.data?.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <h4>{item.name}</h4>
          <p>{item.email}</p>
          <p>{item.course}</p>
          <p>{item.joined_on}</p>
        </div>
      ))}
    </>
  );
};

export default ReactQueryFetchByClick;
