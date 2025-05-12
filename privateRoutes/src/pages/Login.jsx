import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = () => {
    if (!name.trim() || !email.trim() || !password) {
      alert("All fields are required")
      return
    }

    dispatch(setUser({ name, email, password }))
    navigate('/home')
  }

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
        <h2>Login</h2>
        <input type="text" value={name} placeholder='Enter Name' required onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} placeholder='Enter Email' required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder='Enter Password' required maxLength={8} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default Login
