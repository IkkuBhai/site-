import React from 'react';
import './App.css';

function App()
{
  return(
    <div className="hero">
      <div className="nav">
        <div className="logo">
          <h1>H<span>i</span></h1>
        </div>
   
        <input type="text" placeholder='Search'>
        </input>
     
        <div className="menu">
          <ul>
            <li><a href="#talent">Talent Profile</a></li>
            <li><a href="#recruiter">Recruiter</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us </a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        
      </div>

      <div className="talent-recruiter">
        <ul>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <li className="talent"><h2>Talent</h2></li>
          <li className="recruiter"><h2>Recruiter</h2></li>
        </ul>
      </div>

      <div className="home-button">
        <br></br>
        <h3>Bridging the Gap between Employability and Jobs Landscape for the
          current and Future Jobs.</h3>
      </div>
    </div>
    
  )
}


export default App;
