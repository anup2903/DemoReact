import React, { useState } from 'react'
import Nav from './Nav'
import PropTypes from 'prop-types'

async function LoginUser(credentials) {
  return fetch('https://localhost:8080/login',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}



const Login = ({setToken}) => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  
  const handleSubmit = async (e) => {
      e.preventDefault()
      const token = await LoginUser({
          userName,
          password
      })
      setToken(token)
  }
  return (
    <div className='log '>
      <Nav />

      <div className="mt-32 ml-20 ">
        <h1 className="mt-4 font-bold text-4xl text-zinc-50">Create a new account</h1>
        <h3 className="mt-4 text-zinc-400">Already a member? Log In</h3>
        <div className="mt-2">
          <form onSubmit={handleSubmit} className='flex flex-col '>
            <input
              type="email"
              required onChange={(e)=>setUserName(e.target.value)}
              name="email"
              placeholder="Enter your Email Id"
              className=" w-60 rounded-xl p-2 mt-4 bg-zinc-300"
            />

            <input
              type="password"
              required onChange={(e)=>setPassword(e.target.value)}
              name="pass"
              placeholder="Enter your Password"
              className=" w-60 rounded-xl p-2 mt-4 bg-zinc-300"
            />
            <button type="submit"  className='log1but mt-4 rounded-xl button w-60 justify-center p-2'>Create Account</button>
          </form>
        </div>

        {/* <div className='flex align-middle'>
          <hr className='w-32 border-zinc-50'/>
          <h1 className='text-slate-50'>OR</h1>
          <hr className='w-32 border-zinc-50'/>
        </div> */}

        
      </div>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login