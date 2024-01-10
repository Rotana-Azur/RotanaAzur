import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const getRandomColor = () => {
  const colors = ['#FF6F61', '#6B4226', '#3E4095', '#17BEBB', '#B388EB', '#FFD54F'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, backgroundColor: getRandomColor() }}>
        <Typography variant="h4" component="h1" sx={{ marginBottom: 2, color: '#fff' }}>
          Welcome to Hotel Paradise
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#eee', marginBottom: 4 }}>
          Experience Luxury and Comfort
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 3, backgroundColor: getRandomColor() }}>
              <Typography variant="h5" sx={{ marginBottom: 2, color: '#fff' }}>
                Beautiful Rooms
              </Typography>
              <Typography color="#fff">
                Discover our elegant and spacious rooms designed for your comfort.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 3, backgroundColor: getRandomColor() }}>
              <Typography variant="h5" sx={{ marginBottom: 2, color: '#fff' }}>
                Fine Dining
              </Typography>
              <Typography color="#fff">
                Indulge in exquisite culinary delights at our world-class restaurant.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 3, backgroundColor: getRandomColor() }}>
              <Typography variant="h5" sx={{ marginBottom: 2, color: '#fff' }}>
                Relaxation
              </Typography>
              <Typography color="#fff">
                Unwind in our spa and wellness center, designed to rejuvenate your senses.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="body2" sx={{ marginTop: 4, color: '#666' }}>
        &copy; 2024 Hotel Paradise. All rights reserved.
      </Typography>
    </Container>
  );
};

export default HomePage;