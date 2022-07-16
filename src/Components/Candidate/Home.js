import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import logo from './prolifics_logo.png'
import hr from './hr.jpg'
import candid from'./candid.png'
function Home() {
  return <section className='container1'>
      <div className="first-half">
          <img className='logo' src = {logo} alt="Logo" />
          <p className='hr-portal'>Global Technology Solutions Provider.</p>
      </div>
      <div className='login'>
        <Link to ="/loginAdmin">
          <img src={hr} className='hr-logo' alt="hr-logo"></img>
        </Link>
        <Link to ="/loginCandid">
          <img src={candid} className='hr-logo' alt="candid-logo"/>
        </Link>
      </div>
  </section>;
}

export default Home;
