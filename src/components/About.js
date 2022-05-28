import React from 'react';
import logo from '../Assets/tech_image.png';
import './About.css';

function About() {
  return (
    <div className='about-wrapper'>
      <div className='header'>
      <h1 className='about-header'>Who Am I</h1>
      <p>I am a Web developer, Currently living in Noida. <br></br>
      I love to buld websites and talk about creativity</p>
      <h3>Education:</h3>
      <p>I have completed Bachelor Of Technology(B.Tech) <br></br> from Banasthali University, Jaipur in 2021.</p>
      </div>
      <div className='skills-container'>
        <p className='tech-stack'>Tech Stack:</p>
            <ul className='skills-li1'>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>SASS</li>
            </ul>
            <ul className='skills-li2'>
                <li>Java</li>
                <li>PHP</li>
                <li>C</li>
                <li>C++</li>
            </ul>
        </div>
        <div className='tech_img_wrapper'><img src={logo} className="App-logo" alt="technology"/></div>
    </div>
  )
}

export default About;
