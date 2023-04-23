import React from 'react';
import ReactDom from 'react-dom';
import "./App.css"
import Navbar from "./componts/Navbar.js"
import Home from "./componts/Home.js"
import HomeSecond from "./componts/Home-second.js"
import Ds from "./componts/DS.js"
import About from "./componts/About.js"
import Test from "./componts/Test.js"
import Team from "./componts/Team.js"
import Coma from "./componts/Comanies.js"
import Contact from "./componts/Contact.js"
import Footer from "./componts/Footer.js"




function Project(){
  document.title='Abdullah'
  return(
    <>
    <Navbar />
    <Home />
    <HomeSecond />
    <Ds />
    <About/>
    <Test/>
    <Team/>
    <Coma />
    <Contact />
    <Footer />
    
    </>

  );
}

ReactDom.render(<Project />, document.getElementById('root'));