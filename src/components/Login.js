import React from 'react'
import Nav from './Nav'

const Login = () => {
  return (
    <div>
      <Nav />

      <div className="h-56 w-80 ml-[40rem] my-60 bg-pink-300">
        <div className="flex space-x-5 pt-14 justify-center">
          <h1>Username</h1>
          <input className="bg-yellow-200" type="text" />
        </div>
        <div className="pt-12 flex space-x-5 justify-center">
          <h1>Password</h1>
          <input
            className="bg-purple-300"
            type="password"
            name="password"
            id=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login