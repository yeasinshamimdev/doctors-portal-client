import Navbar from '../src/Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-7xl	mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
