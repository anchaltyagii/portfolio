import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import version from '../../package.json';
import Linkedin_icon from '../Assets/linkedin_icon.png';
import Mail_icon from '../Assets/mail_icon.jpg';
import AT from '../Assets/AT_logo.jpg';
import Hamburger_icon from '../Assets/Hamburger_icon.png';
import delete_icon from '../Assets/delete_icon.jpg';
import './Navbar.css';

function Navbar() {

  const [hamMenu, setHamMenu] = useState(false);

  const ham_menu = () => {
          setHamMenu(true);
  }
  const del_menu = () => {
    setHamMenu(false);
}

  return (
    <div className='nav-link'>
        <NavLink to="/">
      <div className='logo-wrapper'>
          <img src={AT} alt="AT_logo" className='img_AT'/>
          <h3 className='anchal_heading'>Anchal</h3>
          <h3 className='anchal_heading'>Web developer</h3>
      </div>
      </NavLink>
      <div onClick={ham_menu}>
       <img src={Hamburger_icon} alt="AT_logo" className='ham_logo'/>
      </div>
      <div className='nav-bar'>
            <div className='nav-wrapper'><NavLink className="nav-content ham-content" exact to="/" >Home</NavLink></div>
            <div className='nav-wrapper'><NavLink className="nav-content ham-content" exact to="/about">About</NavLink></div>
            <div className='nav-wrapper'><NavLink className="nav-content ham-content" exact to="/skills">Experience</NavLink></div>
            <div className='nav-wrapper'><NavLink className="nav-content ham-content" exact to="/contact">Contact</NavLink></div>
            <div className='nav-wrapper'>
            <a href='https://www.linkedin.com/in/anchal-tyagi-4b5192182/' target = "_blank"><img src={Linkedin_icon} alt="Linkedin" className='img_link'/></a>
            <a href="mailto:anchaltyagi3100@gmail.com"><img src={Mail_icon} alt="Linkedin" className='img_link'/></a>
            </div>
            <div className='nav-wrapper'>{version.version}</div>
      </div>
     
     <div className = {hamMenu ? "ham_logo_mobile" : "ham_logo_mobile_none"}>
            <div onClick={del_menu} className='delete_icon_wrapper'><img src = {delete_icon} className='delete_icon' alt = "delete_icon"/></div>
            <div onClick={del_menu} className='ham_logo_mobile_wrapper'><NavLink className="ham-content" exact to="/" >Home</NavLink></div>
            <div onClick={del_menu} className='ham_logo_mobile_wrapper'><NavLink className="ham-content" exact to="/about">About</NavLink></div>
            <div onClick={del_menu} className='ham_logo_mobile_wrapper'><NavLink className="ham-content" exact to="/skills">Experience</NavLink></div>
            <div onClick={del_menu} className='ham_logo_mobile_wrapper'><NavLink className="ham-content" exact to="/contact">Contact</NavLink></div>

            {/* <div className='nav-wrapper'>{version.version}</div> */}
      </div>
    </div>
  )
}

export default Navbar
