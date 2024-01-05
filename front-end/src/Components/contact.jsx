import React, { useState } from "react";
import axios from "axios"
const ContactForm = () => {
 const [formData, setFormData] = useState({
    username: "",
    email: "",
    description: "",
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
    
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={onChange}
        />
      </div>

<div>
<h2>Contact</h2>
       <p>Numéro de téléphone de l'hôtel: +216  71 456 789</p>
     <p>Adresse email de l'hôtel: Azurhotel@exemple.com</p>
           <p>Adresse de l'hôtel: 1 rue de l'exemple, 75000 Tunis</p>
</div>

      <button type="submit">Envoyer</button>
    </form>
 );
};

export default ContactForm;


// import React, { useState } from 'react';
// import './styles/contact.css'
// const Contact = () => {
//  const [contact, setContact] = useState({ email: '', name: '', description: '' });
//  const [submitted, setSubmitted] = useState(false);

//  const handleChange = (e) => {
//     const { name, value } = e.target;
//     setContact((prevState) => ({ ...prevState, [name]: value }));
//  };

//  const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//  };

//  if (submitted) {
//     return <h2>Votre message a été envoyé!</h2>;
//  }

//  return (
//     <div>
//       <h2>Contact</h2>
//       <p>Numéro de téléphone de l'hôtel: +216  71 456 789</p>
//       <p>Adresse email de l'hôtel: Azurhotel@exemple.com</p>
//       <p>Adresse de l'hôtel: 1 rue de l'exemple, 75000 Tunis</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Adresse email:
//           <input type="email" name="email" onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Nom:
//           <input type="text" name="name" onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea name="description" onChange={handleChange} required />
//         </label>
//         <br />
//         <button type="submit">Envoyer</button>
//       </form>
//     </div>
//  );
// };

// export default Contact;