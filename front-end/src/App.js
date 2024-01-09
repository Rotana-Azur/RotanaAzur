import React from 'react';
import RoomList from './Components/allRooms';
import Login from './Components/login';
import SignUp from './Components/signUP';
import TestMui from './Components/TestMui.jsx'
import Contact from './Components/contact';
import Header from './Components/header';
import Footer from './Components/footer';
import Aboutus from './Components/aboutus';
const App = () => {
  return (
    <div>
      <Header/>
      {/* <h1>Room List</h1> */}
      <Aboutus />

      <Footer/>
    </div>
  );
};

export default App;