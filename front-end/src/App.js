import React, { useState } from 'react';
import Footer from './Components/footer';
import HomePage from './Components/HomePage.jsx';
import CustomNavbar from './Components/NavBar.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <div>
      <CustomNavbar onPageChange={handlePageChange} />

      {/* Render the current page component */}
      {currentPage === 'home' && <HomePage />}
      {/* Add other pages as needed */}
      
      <Footer />
    </div>
  );
};

export default App;