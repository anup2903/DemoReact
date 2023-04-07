import React from 'react'
import {Link} from "react-router-dom"
import Nav3 from './Nav3';
const Home = () => {
  return (
    <div className="bg-white ">
      <Nav3 />
      <div className="flex flex-col justify-center">
        <div className="trav flex justify-center">
          <div className="infor flex flex-col justify-center align-top">
            <h1 className="text-5xl ">Where do you </h1>
            <h1 className="text-5xl wantravel font-bold">want to travel</h1>
            <Link to="/mapcont">
              <button className="log3but rounded-xl button w-60 flex justify-around p-2 mt-10">
            <img src="https://cdn-icons-png.flaticon.com/512/355/355980.png?w=740&t=st=1680766154~exp=1680766754~hmac=e119f5a7c1ebda855935ac58dfe65a314132f05921510812cceddf52ed3efc43" className='w-10' alt="" />
              <h2 className='text-center flex pt-2'>Search in Map</h2>
            </button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="divback flex justify-center travel w-[80rem] h-96 bg-slate-50 mt-10 rounded-xl">
        <div className="map pt-2"></div>
        
      </div>
    </div>
  );
}

export default Home