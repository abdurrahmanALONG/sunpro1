import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Navbar from './sheared/Navbar';
import Courses from './Pages/Courses'

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Navbar>
      
    </div>
  );
}

export default App;
