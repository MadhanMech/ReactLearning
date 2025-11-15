import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const ReactQueryById = () => {
    const {id}=useParams();
    const fetchStudentById=(id)=>{
        return axios.get(`http://localhost:3001/students/${id}`)
    }
    const {data,isError,isLoading,error}=useQuery({
        queryKey:["students",id],
        queryFn:()=>fetchStudentById(id),
        // staleTime:5000,
        // refetchInterval:5000,
        // refetchIntervalInBackground:true,
    })
  return (
    <>
    {isLoading && <p>Loading...</p>}
    {isError && <p>Error Occured</p>}

      <div >
       <p>{data?.data?.id}</p>
        <h4>{data?.data?.name}</h4>
        <p>{data?.data?.email}</p>
        <p>{data?.data?.course}</p>
        <p>{data?.data?.joined_on}</p>
        {/* <NavLink to={`/reactQueryById/${item.id}`}>View Details</NavLink> */}
      </div>
   
    </>
  )
}

export default ReactQueryById