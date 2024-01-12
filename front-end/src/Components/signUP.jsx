import React, { useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Checkbox, Button, FormControlLabel, Paper, Grid } from '@mui/material';
import './styles/signUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', {
        username,
        email,
        password,
        isAdmin,
      });

      console.log('Successful sign up:', response.data);
    } catch (error) {
      console.error('Failed to sign up:', error.response.data);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} className="sign-up-container" style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           
            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUp;