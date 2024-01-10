import React from 'react';
import Footer from './Components/footer';
import Aboutus from './Components/aboutus';
import Navbar from './Components/NavBar.jsx';
import HomePage from './Components/HomePage.jsx';
const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage />

      <Footer/>
    </div>
  );
};

export default App;