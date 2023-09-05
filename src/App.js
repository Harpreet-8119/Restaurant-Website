import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import 'animate.css';
import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from './Components/pages/Menu';
import AboutUs from './Components/pages/About';
import Reservation from './Components/pages/Reservation';
import ScrollToTop from './Components/Scrolltotop';
function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
<Navbar/>
   <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/menu' element={<Menu></Menu>} />
          <Route path='/about-us' element={<AboutUs></AboutUs>} />
          <Route path='/sign-up' element={<Reservation></Reservation>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
