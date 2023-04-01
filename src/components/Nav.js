import React,{useState} from 'react'
import {Link} from "react-router-dom"
const Nav = () => {

    
  return (
    <nav>
      <ul className="flex justify-between py-3 bg-blue-400">
        <li className="pl-2 font-mono text-3xl">Demo</li>
        <div className="items flex space-x-11 pr-10 pt-1">
          <Link to="/">
            <li className="text-xl">Home</li>
          </Link>

          <Link to="about">
            <li className="text-xl ">About</li>
          </Link>

          <Link to="login">
            <li className="text-xl cursor-pointer">Login</li>
          </Link>
        </div>
      </ul>
      
    </nav>
  );
}

export default Nav