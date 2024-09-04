import React from 'react';
import logo from '../../Assets/tech_image.png';
import './About.css';

function About() {
  return (
    <div className='about-wrapper'>
      <div className='header'>
        <h1 className='about-header'>Who Am I</h1>
        <p>
          I am a Web developer, Currently living in Noida. <br></br>I love to
          build websites and talk about creativity.
        </p>
        <p>
          I am working as Software Developer (Front-end) with <br /> experience
          of <strong>3+ years</strong> in IT industry.
        </p>
        <h3>Education:</h3>
        <p>
          I have completed Bachelor Of Technology(B.Tech) <br></br> from
          Banasthali University, Jaipur in 2021.
        </p>
        <p className='tech-stack'>Tech Stack:</p>
        <p>
          I am Proficient in tech stack like, JavaScript, ReactJs,
          <br />
          Redux, Nextjs, HTML5, CSS, SASS, Bootstrap, Tailwind, Ant Design &
          MaterialUI.
        </p>
        <p></p>
      </div>
      <div className='tech_img_wrapper'>
        <img
          src={logo}
          className='App-logo'
          alt='technology'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
}

export default About;
