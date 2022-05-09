import React from 'react'
import { NavLink } from 'react-router-dom';
import version from '../../package.json';
import Linkedin_icon from '../Assets/linkedin_icon.png';
import Mail_icon from '../Assets/mail_icon.jpg';
import AT from '../Assets/AT_logo.jpg';
import './Navbar.css';

function Navbar() {

  const menu = () => {

  }

  return (
    <div className='nav-link'>
        <NavLink to="/">
      <div className='logo-wrapper'>
          <img src={AT} alt="AT_logo" className='img_AT'/>
          <h3>Anchal</h3>
          <h3>Web developer</h3>
      </div>
      </NavLink>
      <div className='nav-bar'>
            <div className='nav-wrapper'><NavLink className="nav-content" exact to="/" >Home</NavLink></div>
            <div className='nav-wrapper'><NavLink className="nav-content" exact to="/about">About</NavLink></div>
            <div className='nav-wrapper'><NavLink className="nav-content" exact to="/skills">Experience</NavLink></div>
            <div className='nav-wrapper'><NavLink className="nav-content" exact to="/contact">Contact</NavLink></div>
            <div className='nav-wrapper'>
            <a href='https://www.linkedin.com/in/anchal-tyagi-4b5192182/' target = "_blank"><img src={Linkedin_icon} alt="Linkedin" className='img_link'/></a>
            <a href="mailto:anchaltyagi3100@gmail.com"><img src={Mail_icon} alt="Linkedin" className='img_link'/></a>
            </div>
            {/* <div className='nav-wrapper'>{version.version}</div> */}
      </div>
      <img src={AT} alt="AT_logo" className='ham_logo'/>
    </div>
  )
}

export default Navbar
