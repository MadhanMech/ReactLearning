import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const InfiniteQueries = () => {

    const fetchStudents = ({pageParam}) => {
    return axios.get(
      `http://localhost:3001/students/?_limit=10&_page=${pageParam}`
    );
  };
   const {data,hasNextPage,fetchNextPage}=useInfiniteQuery({
        queryKey:["students"],
        queryFn:fetchStudents,
        initialPageParam:1,
        // can use lastPage->currentPage 
        //allPages->pages
           getNextPageParam: (lastPage, allPages) => {
            console.log("lasstPage",lastPage)
            console.log(allPages)
            // If the last page has less than 10 items, there are no more pages
            if (lastPage.data.length < 10) {
                return undefined;
            }
            // Otherwise, return the next page number
            return allPages.length + 1;
        },
       

   })

  return (
    <div>
      <h3>InfiniteScroll</h3>
       <div>
           {data?.pages.map((page)=>page.data.map((item)=>{
            return(
                <div key={item.id}>
                    {item.name}

                </div>)
           }))}
           <button onClick={fetchNextPage} disabled={!hasNextPage} >Load More</button>
       </div>
    </div>
  )
}

export default InfiniteQueries
