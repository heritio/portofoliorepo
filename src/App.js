import React from 'react'

import Navbar from "./components/navbar"
import Banner from "./components/banner"
import Projects from "./components/projects"
import Contact from "./components/contact"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner id="About"/>
      <h2 id="Projects">My public projects</h2>
     
        <Projects />
      
     
     
      
      <Contact id="Contact"/>
    </div>
  );
}

export default App;
