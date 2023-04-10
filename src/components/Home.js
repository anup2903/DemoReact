import React from 'react'
import {Link} from "react-router-dom"
import Nav3 from './Nav3';
import front from '../images/frontend.jpg'
const Home = () => {
  return (
    <div className=" home">
      <Nav3 />
      <div className="flex justify-end home2">
        <div className="flex flex-col w-1/3 mr-16  ">
          <div className="mt-24 w-[18rem]">
            <h1 className="text-left  text-5xl  font-bold flex justify-center homtext ">
              Want to test your front end Skills?
            </h1>
          </div>
          <div className="w-64 mt-10 flex justify-center">
            <h3 className='font-mono'>
            Design your dreams with front end development! Write your HTML, CSS and JS code and get your amazing website
            </h3>
          </div>
          <div className="mt-10 flex ">
            <Link to="/webpage">
              <button className='hombut rounded-xl p-2 w-52 font-libre'><h2 className='font-chivo'>Check Your Webpage</h2></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home