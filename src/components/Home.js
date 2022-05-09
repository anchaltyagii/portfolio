import React from 'react'
import { NavLink } from 'react-router-dom';
import Home_web from '../Assets/home-web.jpg';
import './Home.css';

function Home() {
  return (
    <>
    <div className='Home-wrapper'>
       <h1 className='home-info'>Hi,</h1>
       <h1 className='home-info'>I'm Anchal Tyagi</h1>
       <h1 className='home-info'>Web developer</h1>
       <h6 className='home-info2'>Front-end development</h6>
       <div className='contact-button'><NavLink className="nav-content1" exact to="/contact">Contact Me!</NavLink></div>
    </div>
    <div className="img_wrapper">
       <img src={Home_web} className="img" alt="Home-image"/>
    </div>
    </>
  )
}

export default Home
