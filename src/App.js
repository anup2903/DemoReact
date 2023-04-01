import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
    // <Nav/>
  );
}

export default App;
