import React, {useState} from 'react'
import {Link} from "react-router-dom"
import green from '../images/green.png'
import user from "../images/greenuser.png"
const Nav3 = () => {
  const [tap ,setTap ] = useState(false)
const click =()=>{
setTap(!tap);
}
  return (
    <nav>
      <ul className="flex justify-between py-3 ">
        <div className="flex">
          <img src={green} className="w-13 h-10" alt="" />
          <li className="pl-2 font-mono text-3xl text-black">Demo</li>
        </div>

        <div className="items flex space-x-11 pr-10 pt-1">
          <Link to="/">
            <li className="text-xl cursor-pointer">Home</li>
          </Link>

          <Link to="/about">
            <li className="text-xl cursor-pointer">About</li>
          </Link>

          <Link to="/login2">
            <li className="text-xl cursor-pointer">Login</li>
          </Link>
        </div>
        <div className="burger">
          <img src={user} onClick={click} className="w-13 h-10" alt="" />
        </div>
      </ul>
      {tap && (
        <div className='bg-green-500 media'>
          <Link to="/">
            <li className="text-xl cursor-pointer flex justify-center list-none bor">Home</li>
          </Link>

          <Link to="/about">
            <li className="text-xl cursor-pointer flex justify-center list-none border-y-[1px]">About</li>
          </Link>

          <Link to="/login2">
            <li className="text-xl cursor-pointer flex justify-center list-none">Login</li>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav3