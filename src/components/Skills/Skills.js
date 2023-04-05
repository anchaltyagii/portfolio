import React, { useState } from "react";
import Resume from "../../Assets/Anchal_Tyagi_Resume.pdf";
import { FiExternalLink } from "react-icons/fi";
import "./Skills.css";

function Skills() {
  const [sterling, setSterling] = useState(true);
  const [americanExpress, setAmericanExpress] = useState(false);
  const [zestmoney, setZestmoney] = useState(false);

  const handleSterling = () => {
    setSterling(true);
    setAmericanExpress(false);
    setZestmoney(false);
  };

  const handleAmerican = () => {
    setAmericanExpress(true);
    setSterling(false);
    setZestmoney(false);
  };

  const handleZestmoney = () => {
    setZestmoney(true);
    setAmericanExpress(false);
    setSterling(false);
  };

  return (
    <>
      <div className="skills-wrapper">
        <div className="header">
          <h1 className="skills-header">Work Experience</h1>
          <div>
            <p>
              I am currently working in Skill-Mine Technology, Bangalore as
              <b> Software Developer</b>.
            </p>
            <p>
              I have worked with fintech clients like, American Express,
              ZestMoney, Sterling, etc
            </p>
          </div>
          <div style={{ marginTop: "40px" }}>
            <h3>My Story:</h3>
            <p>
              I joined SkillMine fresh out of college with little experience.
            </p>
            <p>
              But, over the years, I have developed various technical skills and
              gained a lot of experience working on some exciting projects.
            </p>
            <p>When I joined I was the least experienced member of the team.</p>
            In 1.5 years, I have led big tasks and even led and mentored a small
            team of junior developers.
          </div>
          <div className="tabs-container">
            <button
              className={sterling ? "tab-btn-active" : "tab-btn"}
              onClick={() => handleSterling()}
            >
              Sterling
            </button>
            <button
              className={americanExpress ? "tab-btn-active" : "tab-btn"}
              onClick={() => handleAmerican()}
            >
              American Express
            </button>
            <button
              className={zestmoney ? "tab-btn-active" : "tab-btn"}
              onClick={() => handleZestmoney()}
            >
              ZestMoney
            </button>
          </div>
          <div>
            {americanExpress && (
              <div>
                <h3>American Express:</h3>
                <ul>
                  <li>
                    I have worked on customer portal website, where user can see
                    their account & card information.
                  </li>
                  <li>
                    Tech Stack used: ReactJs, HTML5, CSS, Bootstrap, React
                    testing library.
                  </li>
                </ul>
              </div>
            )}
            {zestmoney && (
              <div id="zestmoney">
                <h3>ZestMoney:</h3>
                <ul>
                  <li>
                    I have also worked with ZestMoney client, I have been part
                    of three project here.
                  </li>
                  <li>
                    I have worked on ZestMoney product - Widget which is being
                    used by 600+ Merchants <br></br>
                    and visited by millions of users in a month to avail their
                    EMI on specific product.<br></br>
                    Here, I have implemented many features analytics dashboard,
                    changed the UI part and <br></br>
                    and added dynamic pricing which will be helpful for
                    customers visiting.
                  </li>
                  <li>
                    I have also worked on partner-suite product where i build
                    two web apps Home and FAQs App.
                  </li>
                </ul>
              </div>
            )}
            {sterling && (
              <div>
                <h3>
                  Sterling Accuris
                  <a
                    href="https://sterling-accuris.skill-mine.com/"
                    target="_blank"
                  >
                    &nbsp; &nbsp;
                    <FiExternalLink color="#00a5ec" height="10px" />
                  </a>
                  :
                </h3>
                <ul>
                  <li>
                    I have worked on UI of the patient portal & integrated APIs
                    in the website.
                  </li>
                  <li>
                    I have also worked on some of the mobile app UI using
                    Crafter CMS and NextJs.
                  </li>
                  <li>
                    Tech Stack used: NextJs, HTML, CSS, JavaScript, Crafter CMS
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* <div>
            <p>
              I have also done internship at IT-Bodhi where built the admin
              console to maintain <br></br>student information for managed
              online courses.
            </p>
          </div> */}
          <a href={Resume} className="resume" download>
            <div className="resume_wrapper">Download Resume</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Skills;
