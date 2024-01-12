import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HomePage = () => {
  const backgroundImageUrl =
    'https://as1.ftcdn.net/v2/jpg/00/87/67/74/1000_F_87677449_Ia7kriWg3RTu8WKEDzkuNV2KMtfBeV1m.jpg';

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // Adjust this property to control the number of visible slides
      slidesToScroll: 1,
    };
    

  return (
    <Container
      maxWidth="100%"
      sx={{
        textAlign: 'center',
        mt: 4,
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        minHeight: '100vh', // Set minimum height to 100% of viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingY: 4,
      }}
    >
      {/* First Section */}
      <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginBottom: 4 }}>
        <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
          Your Dream Stay Awaits
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
          Book now and experience luxury like never before.
        </Typography>
        <Button variant="contained" color="primary">
          Book Now
        </Button>
      </Paper>

      <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginBottom: 4 }}>
        <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
          Explore Our Rooms
        </Typography>
        <Slider {...sliderSettings}>
          <div>
            <img
              src=""
              alt="Room 1"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
          <div>
            <img
              src=""
              alt="Room 2"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            </div>
          </Slider>
        </Paper>
        <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
            About Us
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero
            malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
          </Typography>
        </Paper>

        <Typography variant="body2" sx={{ marginTop: 4 }}>
          &copy; 2024 Hotel Paradise. All rights reserved.
        </Typography>
      </Container>
    );
  };

  export default HomePage;