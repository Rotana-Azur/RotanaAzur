import React, { useState } from 'react';
import './styles/login.css';
import axios from "axios"

function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
 };

 return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
 );
}

export default Login;