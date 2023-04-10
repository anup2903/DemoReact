import React, { useState } from 'react'
import Nav2 from './Nav2';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
const Login2 = () => {
const [mail , setMail]=useState('')
const [pass , setPass]=useState('')
const handleMail=(e)=>{
  setMail(e.target.value)
}
const handlePass=(e)=>{
  setPass(e.target.value)
}
const history = useNavigate();
const handleSubmit =(e)=>{
  e.preventDefault();
  axios.post('http://localhost:8080/login',{
    email: mail,
    password : pass
  })
  .then((result)=>{
    const token = result.data.token;
    localStorage.setItem('authToken', token);
    history("./success")
  })
  .catch((error) => {
    console.log(error);
  });

}

  return (
    <div className="log2">
      <Nav2 />
      <div className="flex justify-center mt-24 ">
        <div className="bg-slate-200 w-96 h-[30rem] rounded-xl flex flex-col">
          <h1 className="text-2xl flex justify-center pt-5 font-semibold text-blue-600">
            Member Login
          </h1>
          <form  className="flex flex-col justify-end mt-10 ">
            <div className="flex justify-center">
              <input
                type="email"
                value={mail}
                onChange={handleMail}
                className="w-60 rounded-xl p-2   bg-slate-400"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="password"
                value={pass}
                onChange={handlePass}
                className="mt-5 w-60 rounded-xl p-2 flex justify-center bg-slate-400"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center">
              <button
              onClick={handleSubmit}
                type="submit"
                className=" log2but mt-5 rounded-xl button w-60 flex justify-center p-2 "
              >
                LOGIN
              </button>
            </div>
            <h2 className="mt-3 flex justify-center">Forgot your password?</h2>
          </form>
          <div className='flex mt-7 justify-center'>
            <hr className='w-20 border-zinc-500'/>
            <h1 className='text1 text-center px-2'>OR</h1>
            <hr className='w-20 border-zinc-500'/>
          </div>
          <div className='flex justify-center'>
            <button className='rounded-xl bg-slate-100 w-60 flex justify-center p-2'><img className='googimg flex pr-1 pt-1 justify-center' src="https://img.icons8.com/fluency/48/null/google-logo.png"/> Login with google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2