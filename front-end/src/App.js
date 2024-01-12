import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer';
import HomePage from './Components/HomePage.jsx';
import Navbar from './Components/NavBar.jsx';
import RoomList from './Components/allRooms'; 
import AboutUs from './Components/aboutus.jsx'
import Restaurant from './Components/Restaurant.jsx'
import  Contact from './Components/contact.jsx'
import Login from './Components/login.jsx'
import SignUp from './Components/signUP.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-rooms" element={<RoomList />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
