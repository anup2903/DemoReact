import React ,{ useContext} from 'react'
import Nav from './Nav'
import Login from './Login'
import useToken from './App/UseToken'
import noteContext from '../context/NoteContext'
import NoteState from '../context/notes/NoteState'
import { Link } from 'react-router-dom'
const About = () => {
  // const [token, setToken] = useState()
  const a = useContext(noteContext) ;
  const {token, setToken} = useToken() 
  // const token = getToken()
    if(!token){
        {return <Login setToken={setToken}/>}
    }
   const expire= (e)=>{
    sessionStorage.removeItem('token')
   }
  return (
    <NoteState>
      <div className="about ">
        <Nav />
        <div className="flex flex-col justify-center mt-36">
          <div className="flex  justify-center">
            <h1 className="text-4xl text-gray-100 text-center">
              This is an example for {a.name} API
            </h1>
          </div>
          <div className="flex justify-center mt-10">
            <h1 className="text-4xl text-gray-100 text-center">
              Your Api Number is : {a.number}
            </h1>
          </div>
          <div className="flex justify-center mt-10">
          
            <Link to='/login'>
              <button
                className="  p-2 rounded-xl bg-green-600"
                onClick={expire}
              >
                <h1 className="text-white">Log Out</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </NoteState>
  );
}

export default About