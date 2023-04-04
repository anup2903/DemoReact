import React ,{useState} from 'react'
import Nav from './Nav'
import Login from './Login'
import useToken from './App/UseToken'
// function setToken(userToken){
//   sessionStorage.setItem('token',JSON.stringify(userToken))
// }
// function getToken(){
//   const tokenString = sessionStorage.getItem('token')
//   const userToken =JSON.stringify(tokenString)
//   return userToken?.token
// }

const About = () => {
  // const [token, setToken] = useState()
  const {token, setToken} = useToken() 
  // const token = getToken()
    if(!token){
        {return <Login setToken={setToken}/>}
    }
  return (
    <div>
      <Nav />
      <div>
        <h1>welcome to the about page </h1>
        <h1>You will get to know about us in more detail</h1>
      </div>
    </div>
  );
}

export default About