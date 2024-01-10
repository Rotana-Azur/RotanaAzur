import React from 'react';
import RoomList from './Components/allRooms';
import Login from './Components/login';
import SignUp from './Components/signUP';
import Contact from './Components/contact';
import Header from './Components/header';
import Footer from './Components/footer';
import Aboutus from './Components/aboutus';
import Allrooms from '../src/Components/allRooms'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


// function App() {
//   return (
//      <Router>
//        <Header />
//        <Routes>
//          <Route path="/about-us" component={Aboutus} />
//          <Route path="/contact" component={Contact} />
//          <Route path="/login" component={Login} />
//        </Routes>
//        <Footer/>
//      </Router>
//   );
//  }


const App = () => {
  return (
    
    <div>
      <Header/>
      {/* <h1>Room List</h1> */}
      <Allrooms />

      <Footer/>
    </div>
  );
};

export default App;