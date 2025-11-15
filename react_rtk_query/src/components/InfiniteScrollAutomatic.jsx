import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer"

const InfiniteScrollAutomatic = () => {
    const fetchStudents = ({ pageParam }) => {
        return axios.get(
            `http://localhost:3001/students/?_limit=10&_page=${pageParam}`
        );
    };

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["students"],
        queryFn: fetchStudents,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            
            // If the last page has less than 10 items, there are no more pages
            if (lastPage.data.length < 10) {
                return undefined;
            }
            // Otherwise, return the next page number
            return allPages.length + 1;
        },
    })

    const { ref, inView } = useInView()

    useEffect(() => {
        // Only fetch if in view AND there's a next page available
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

    return (
        <div>
            <h3>Infinite Scroll Automatic</h3>
            <div>
                {data?.pages.map((page) => page.data.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    )
                }))}
            </div>
            <div ref={ref}>
                {isFetchingNextPage 
                    ? "Loading......" 
                    : hasNextPage 
                        ? "Load more" 
                        : "No more data"}
            </div>
        </div>
    )
}

export default InfiniteScrollAutomatic