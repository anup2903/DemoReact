import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Login2 from './components/Login2';
import Maps from './components/Maps';
import MapCont from './components/MapCont';
function App() {
  const [token, setToken] = useState([]);

  if(!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login setToken={setToken}/>} />
          <Route path="login2" element={<Login2 />} />
          <Route path="map" element={<Maps/>} />
          <Route path="mapcont" element={<MapCont/>} />
        </Route>
      </Routes>
    </Router>
    // <Nav/>
  );
}

export default App;
