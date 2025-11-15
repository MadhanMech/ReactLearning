import { useState } from 'react'
import './App.css'

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import RegularFetch from './components/RegularFetch'
import ReactQueryFetch from "./components/ReactQueryFetch"
import ReactQueryFetchByClick from "./components/ReactQueryFetchByClick"
import ReactQueryById from './components/ReactQueryById'
import PaginationQueries from './components/PaginationQueries'
import InfiniteQueries from './components/InfiniteQueries'
import InfiniteScrollAutomatic from './components/InfiniteScrollAutomatic'
import UseQueriesDemo from './components/UseQueriesDemo'

function App() {

  return (
    <>
        <BrowserRouter>
              <nav className='navbar'>
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to ={"/regular"}> Regular Fetch</NavLink>
                  <NavLink to={"/reactQueryFetch"}>React Query Fetch</NavLink>
                  <NavLink to={"/reactQueryFetchByClick"}>Load Data By Click</NavLink>
                  <NavLink to={"/paginationQueries"}>Pagination Queries</NavLink>
                  <NavLink to={"/infinite"}>Infinite Scroll By Click</NavLink> 
                     <NavLink to={"/infinite-auto"}>Infinite Scroll</NavLink> 
                     <NavLink to={'/useQueries-demo'}>UseQueries Demo</NavLink>

                  {/* <NavLink to={"/reactQueryById/:id"}>React Query By Id</NavLink> */}
              </nav>
        <Routes>
              <Route path ="/" element={<Home/>}/>
              <Route path='/regular' element={<RegularFetch/>}/>
              <Route path="/reactQueryFetch"  element={<ReactQueryFetch/>}/>
              <Route path="/reactQueryFetchByClick"  element={<ReactQueryFetchByClick/>}/>
              <Route path="/reactQueryById/:id"  element={<ReactQueryById/>}/>
              <Route path="/paginationQueries" element={<PaginationQueries/>}/>
              <Route path="/infinite" element={<InfiniteQueries/>}/>
              <Route path ="/infinite-auto" element={<InfiniteScrollAutomatic/>}/>
              <Route path="/useQueries-demo" element={<UseQueriesDemo/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
