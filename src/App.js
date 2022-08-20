import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Navbar from './sheared/Navbar';
import Courses from './Pages/Courses'
import Registration from './Pages/Registration';
import Notfound from './Pages/Notfound';
import CourseDetails from './Pages/CourseDetails';
import RequireAuth from './Pages/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/courses/:courseId" element={
            <RequireAuth>
              <CourseDetails />
            </RequireAuth>} />

        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
