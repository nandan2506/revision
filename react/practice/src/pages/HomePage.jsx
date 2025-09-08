import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-4 justify-center text-center'>
      Home Page
      <button onClick={()=>navigate("/login")}>login</button>
      <button onClick={()=>navigate("/signUp")}>signup</button>
    </div>
  )
}
