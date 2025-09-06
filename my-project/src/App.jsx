import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  


  return (
    <div className="App flex flex-col  h-full w-full"> 
    <nav className="bg-gray-700 ">
      <ul className='flex h-20 justify-end items-center '>
      <li className=''>
        <NavLink to="/" className={({ isActive }) => "m-5 " + (isActive? "text-blue-800 font-bold" :" text-black hover:text-blue-800")}>
        Home
        </NavLink>
      </li>
      <li className=''>
        <NavLink to="/about"  className={({ isActive }) => "m-5 " + (isActive? "text-blue-800 font-bold" :" text-black hover:text-blue-800")}>
        About
        </NavLink>
        </li>
      </ul>
    </nav>
    <main>
      <Outlet />
      </main>
      </div>
  )
}

export default App
