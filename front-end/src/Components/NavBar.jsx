import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CustomNavbar = ({ onPageChange }) => {
  const handleNavItemClick = (page) => {
    onPageChange(page);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <Button color="inherit" onClick={() => handleNavItemClick('home')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => handleNavItemClick('our-rooms')}>
          Our Rooms
        </Button>
        <Button color="inherit" onClick={() => handleNavItemClick('about-us')}>
          About Us
        </Button>
        <Button color="inherit" onClick={() => handleNavItemClick('restaurant')}>
          Restaurant
        </Button>
        <Button color="inherit" onClick={() => handleNavItemClick('contact')}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;