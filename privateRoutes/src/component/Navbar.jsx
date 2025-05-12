import React, { use } from 'react'
import './Navbar.css'
import { selectUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
 dispatch(removeUser());
 navigate('/');

  } 
  return (
    <nav>
      <h1>Protected Routes</h1>
      <ul>
        {!user&&
        
        <li><a href="/">Login</a></li>}

        {user&&
        <>
        <li><a href="/home">Home</a></li>
        <li><a href="/setting">Setting</a></li>
        <li><a onClick={()=>{handleLogout()}} href="/">Logout</a></li>
        </>
        }
      </ul>
    </nav>
  )
}

export default Navbar
