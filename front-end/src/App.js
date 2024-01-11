import React, { useState } from 'react';
import Footer from './Components/footer';
import HomePage from './Components/HomePage.jsx';
import Navbar from './Components/NavBar.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <div>
      <Navbar onPageChange={handlePageChange} />

      {currentPage === 'home' && <HomePage />}
      
      <Footer />
    </div>
  );
};

export default App;