import React, { useState } from 'react';
import axios from "axios"
import './styles/signUp.css'
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
 );
};

export default SignUp;