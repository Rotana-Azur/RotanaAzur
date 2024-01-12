import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Paper, Grid, TextareaAutosize } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    description: '',
  });

  const { username, email, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/contacts/', {
        username,
        email,
        description,
      });

      console.log('Your message has been sent! :', response.data);
    } catch (error) {
      console.error('Failed :', error.response.data);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              label="Nom d'utilisateur"
              variant="outlined"
              fullWidth
              margin="normal"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <TextareaAutosize
              rowsMin={4}
              placeholder="Description"
              id="description"
              name="description"
              value={description}
              onChange={onChange}
              style={{ width: '100%', marginBottom: '20px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />

            <div>
              <Typography variant="h6">Contact Information</Typography>
              <Typography>Numéro de téléphone de l'hôtel: +216 71 456 789</Typography>
              <Typography>Adresse email de l'hôtel: Azurhotel@exemple.com</Typography>
              <Typography>Adresse de l'hôtel: 1 rue de l'exemple, 75000 Tunis</Typography>
            </div>

            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
              Contact Us
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactForm;