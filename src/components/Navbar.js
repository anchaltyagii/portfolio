import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import version from '../../package.json';
import Linkedin_icon from '../Assets/linkedin_icon1.jpg';
import Mail_icon from '../Assets/mail-icon.jpg';
import Git_icon from '../Assets/git_icon.png';
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
            <NavLink className="nav-content ham-content" exact to="/" ><div className='nav-wrapper'>Home</div></NavLink>
            <NavLink className="nav-content ham-content" exact to="/about"><div className='nav-wrapper'>About</div></NavLink>
            <NavLink className="nav-content ham-content" exact to="/skills"><div className='nav-wrapper'>Experience</div></NavLink>
            <NavLink className="nav-content ham-content" exact to="/contact"><div className='nav-wrapper'>Contact</div></NavLink>
            <div className='nav-wrapper'>
            <a href='https://www.linkedin.com/in/anchal-tyagi-4b5192182/' target = "_blank"><img src={Linkedin_icon} alt="Linkedin" className='img_link'/></a>
            <a href="mailto:anchaltyagi3100@gmail.com"><img src={Mail_icon} alt="Linkedin" className='img_link'/></a>
            <a href="https://github.com/anchaltyagii?tab=repositories" target="_blank" className='git_link'> <img src={Git_icon} alt="git-icon" className='img_link'/></a>
            </div>
            <div className='nav-wrapper'>{version.version}</div>
      </div>
     
     <div className = {hamMenu ? "ham_logo_mobile" : "ham_logo_mobile_none"}>
            <div onClick={del_menu} className='delete_icon_wrapper'><img src = {delete_icon} className='delete_icon' alt = "delete_icon"/></div>
            <NavLink className="ham-content" exact to="/" ><div onClick={del_menu} className='ham_logo_mobile_wrapper'>Home</div></NavLink>
            <NavLink className="ham-content" exact to="/about"><div onClick={del_menu} className='ham_logo_mobile_wrapper'>About</div></NavLink>
            <NavLink className="ham-content" exact to="/skills"><div onClick={del_menu} className='ham_logo_mobile_wrapper'>Experience</div></NavLink>
            <NavLink className="ham-content" exact to="/contact"><div onClick={del_menu} className='ham_logo_mobile_wrapper'>Contact</div></NavLink>
            <div className='ham_logo_mobile_wrapper'>
            <a href='https://www.linkedin.com/in/anchal-tyagi-4b5192182/' target = "_blank"><img src={Linkedin_icon} alt="Linkedin" className='img_link'/></a>
            <a href="mailto:anchaltyagi3100@gmail.com"><img src={Mail_icon} alt="Linkedin" className='img_link'/></a>
            <a href="https://github.com/anchaltyagii?tab=repositories" target="_blank" className='git_link'> <img src={Git_icon} alt="git-icon" className='img_link'/></a>
            </div>
            {/* <div className='nav-wrapper'>{version.version}</div> */}
      </div>
    </div>
  )
}

export default Navbar
