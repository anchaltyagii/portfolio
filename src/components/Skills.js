import React from 'react'
import Resume from '../Assets/Anchal_Tyagi_Resume.pdf';
import './Skills.css';

function Skills() {
  return (
    <div className='skills-wrapper'>
        <div className='header'>
           <h1 className='skills-header'>Work Experience</h1>
           <div>
             <p>I am currently working in Skill-Mine Technology, Bangalore as <b>Software Developer</b>.</p>
             <p>I am working on ZestMoney product - Widget which is being used by 600+ Merchants <br></br>and visited by millions of users in a month to avail their EMI on specific product.</p>
           </div>
           <div>
             <p>I have also done internship at IT-Bodhi where built the admin console to maintain <br></br>student information for managed online courses.</p>
           </div>
          <div className='resume_wrapper'>
            <a href={Resume} className='resume' download>Download Resume</a>
          </div>
        </div>
    </div>
  )
}

export default Skills;
