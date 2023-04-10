import {BrowserRouter as Router,Routes,Route,  Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Login2 from './components/Login2';
import NoteState from './context/notes/NoteState';
import Successlogin from './components/Successlogin';
import Webpage from './components/Webpage';
function App() {
  const [token, setToken] = useState([]);

  if(!token) {
    return <Login setToken={setToken} />;
  }
  
  return (
    <NoteState>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login setToken={setToken} />} />
            <Route path="login2" element={<Login2 />} />
            <Route path="webpage" element={<Webpage/>} />
            <Route
              path="success"
              element={
                <PrivateRoute>
                  <Successlogin />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </NoteState>
    // <Nav/>
  );
}
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('authToken');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: '/login2',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;
