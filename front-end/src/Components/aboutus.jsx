import React from 'react';
import { Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';


const abouTheme = createTheme()
const AboutUs = () => {
  return (

    <ThemeProvider theme={abouTheme}>
  <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    
    <Container>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
      THE FINEST HOTEL AT THE BEST PRICE
The best people to take care of
our most valuable asset: you.
Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.
Get more information
The fortress lies within a Protected Natural Area and blends perfectly into the landscape. Cap Rocat has been completely renovated by Antonio Obrador with the utmost respect for its unique architecture


      </Typography>
    </Container>

    
            
          </Grid>
        
        
     
    
</ThemeProvider>
  );
};

export default AboutUs;