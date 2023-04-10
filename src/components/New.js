import React, { useState } from 'react'
import Nav from './Nav'
import PropTypes from 'prop-types'
import axios from 'axios'
async function LoginUser(credentials) {
  let res = await axios.post("http://localhost:8080/login", {
    credentials,
  })
     return res = await res.data.token;
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
      console.log("Success")
      localStorage.setItem('authToken', token);
    //   setToken(token)
  }
  return (
    <div className='log '>
      <Nav />

      <div className="mt-32 ml-20 ">
        <h1 className="mt-4 font-bold text-4xl text-zinc-50">Create a new account</h1>
        <h3 className="mt-4 text-zinc-400 font-serif">Already a member? Log In</h3>
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
          <div className='flex mt-7 '>
            <hr className='w-[6.2rem] border-zinc-500'/>
            <h1 className='text1 text-center px-2 text-gray-100'>OR</h1>
            <hr className='w-[6.2rem] border-zinc-500'/>
          </div>
          <div className='flex '>
            <button className='rounded-xl bg-zinc-300 w-60 flex justify-center p-2'><img className='googimg flex pr-1 pt-1 justify-center' src="https://img.icons8.com/fluency/48/null/google-logo.png"/> Login with google</button>
          </div>
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