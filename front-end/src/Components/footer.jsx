import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Box>
          <Box>
            <IconButton color="inherit" component={Link} href="#" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} href="#" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} href="#" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
