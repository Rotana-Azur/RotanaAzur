import React, { useEffect,useState } from 'react';
import './styles/login.css';
import axios from "axios"
//import { useNavigate } from 'react-router-dom';

function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [isLoggedIn, setIsLoggedIn] = useState(false);
//  const navigate = useNavigate();

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        email: email, 
        password: password,
      });
      setIsLoggedIn(true);
      console.log('connexion success')
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setIsLoggedIn(false);
    }
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

// import React, { useState } from 'react';
// import './styles/login.css';
// import axios from "axios"

// function Login() {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');

//  const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Email: ', email);
//     console.log('Password: ', password);
//  };

//  return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <h2>Connexion</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//  );
// }

// export default Login;