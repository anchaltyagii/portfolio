import React from "react";
import Resume from "../Assets/Anchal_Tyagi_Resume.pdf";
import Git_icon from "../Assets/git_icon.png";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="header">
        <h1 className="skills-header">Work Experience</h1>
        <div>
          <p>
            I am currently working in Skill-Mine Technology, Bangalore as{" "}
            <b>Software Developer</b>.
          </p>
          <p>
            I am having experience of nearly 2 years in <b>web development</b>.
          </p>
          <p>
            Right now, I am working with American Express client for their
            customer information portal.
          </p>
          <p>
            I have also worked with ZestMoney client, I have been part of three
            project here.
          </p>
          <p>
            I have worked on ZestMoney product - Widget which is being used by
            600+ Merchants <br></br>
            and visited by millions of users in a month to avail their EMI on
            specific product.<br></br>
            Here, I have implemented many features analytics dashboard, changed
            the UI part and <br></br>
            and added dynamic pricing which will be helpful for customers
            visiting.
          </p>
          <p>
            I have also worked on partner-suite product where i build two web
            apps Home and FAQs App.
          </p>
        </div>
        <div className="experience_wrapper">
          <a
            href="https://www.boat-lifestyle.com/products/airdopes-131"
            target="_blank"
            className="experience_link"
          >
            <img
              src="https://d2nihbm68unxuh.cloudfront.net/partner-widget/zest-logo.svg"
              alt="Zest Logo"
            />
            <br />
            Click to know more about product
          </a>
        </div>
        <div className="git_wrapper">
          <a
            href="https://github.com/anchaltyagii?tab=repositories"
            target="_blank"
            className="git_link"
          >
            <img src={Git_icon} alt="git-icon" className="git-icon" />
            <br></br>
            Check out my more project here -{" "}
          </a>
        </div>
        <div>
          <p>
            I have also done internship at IT-Bodhi where built the admin
            console to maintain <br></br>student information for managed online
            courses.
          </p>
        </div>
        <a href={Resume} className="resume" download>
          <div className="resume_wrapper">Download Resume</div>
        </a>
      </div>
    </div>
  );
}

export default Skills;
