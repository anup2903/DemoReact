import React,{useState} from 'react'
import {Link} from "react-router-dom"
import analytics from '../images/analytics.png'
const Nav2 = () => {
  return (
    <nav>
      <ul className="flex justify-between py-3 ">
      <div className='flex'>
        <img src={analytics} className='w-13 h-10' alt="" />
        <li className="pl-2 font-mono text-3xl text-gray-50">Demo</li>
      </div>
        
        <div className="items flex space-x-11 pr-10 pt-1">
          <Link to="/">
            <li className="text-xl">Home</li>
          </Link>

          <Link to="/about">
            <li className="text-xl ">About</li>
          </Link>

          <Link to="/login2">
            <li className="text-xl cursor-pointer">Login</li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Nav2