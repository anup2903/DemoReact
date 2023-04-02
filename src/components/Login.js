import React from 'react'
import Nav from './Nav'

const Login = () => {
  return (
    <div className='log '>
      <Nav />

      <div className="mt-32 ml-20">
        <h1 className="font-semibold text-zinc-400">START FOR FREE</h1>
        <h1 className="mt-4 font-bold text-4xl text-zinc-50">Create a new account</h1>
        <h3 className="mt-4 text-zinc-400">Already a member? Log In</h3>
        <div className="mt-2">
          <form className='flex flex-col '>
            <input
              type="email"
              name="email"
              placeholder="Enter your Name"
              className=" w-60 rounded-xl p-2 mt-4 bg-zinc-300"
            />

            <input
              type="password"
              name="pass"
              placeholder="Enter your Password"
              className=" w-60 rounded-xl p-2 mt-4 bg-zinc-300"
            />
            <button className='mt-4 rounded-xl button w-60 justify-center p-2'>Create Account</button>
          </form>
        </div>

        <div className='flex'>
          <hr className='fill-orange-50 border-solid' />
          <h1 className='fill-slate-100'>OR</h1>
          <hr />
        </div>

        
      </div>
    </div>
  );
}

export default Login