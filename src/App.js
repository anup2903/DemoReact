import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
function App() {
  const [token, setToken] = useState([]);

  // if(!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login setToken={setToken}/>} />
        </Route>
      </Routes>
    </Router>
    // <Nav/>
  );
}

export default App;
