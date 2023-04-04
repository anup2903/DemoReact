import React ,{useState} from 'react'
import Nav from './Nav'
import Login from './Login'

const About = () => {
  const [token, setToken] = useState()
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