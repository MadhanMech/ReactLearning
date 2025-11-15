import React from 'react'
import {useQuery} from '@tanstack/react-query'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
const ReactQueryFetch = () => {
   const fetchStudent=()=>{
        return axios.get("http://localhost:3001/students")
   }

     const {data,isError,isLoading,error}=useQuery({
        queryKey:["stduents"],
        queryFn:()=>fetchStudent,
        staleTime:5000,
        // refetchInterval:5000,
        // refetchIntervalInBackground:true,

     })
  return (
    <>
       <div>ReactQueryFetch</div>
         
       {isLoading && <p>Loading...</p>}
       {isError && <p>Error Occured</p>}
       {data?.data?.map((item) => (
         <div key={item.id}>
          <p>{item.id}</p>
           <h4>{item.name}</h4>
           <p>{item.email}</p>
           <p>{item.course}</p>
           <p>{item.joined_on}</p>
           <NavLink to={`/reactQueryById/${item.id}`}>View Details</NavLink>
         </div>
       ))}
    </>
 
  )
}

export default ReactQueryFetch