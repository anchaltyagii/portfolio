import React from "react";
import { NavLink } from "react-router-dom";
import Home_web from "../../Assets/home-web.jpg";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "./Home.css";
import { icons } from "../../Assets";

function Home() {
  return (
    <>
      <div className="Home-wrapper">
        <div style={{ paddingBottom: "40px", height: "fit-content" }}>
          <h1 className="home-info">Hi,</h1>
          <h1 className="home-info">I'm Anchal Tyagi</h1>
          <h2 className="home-info2">Software Engineer - Frontend</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/anchaltyagi/" target="_blank">
              <div className="social-container">
                <LinkedinOutlined style={{ color: "#000", fontSize: "28px" }} />
              </div>
            </a>
            <a href="mailto:anchaltyagi3100@gmail.com">
              <div className="social-container">
                <MailOutlined style={{ color: "#000", fontSize: "28px" }} />
              </div>
            </a>
            <a
              href="https://github.com/anchaltyagii?tab=repositories"
              target="_blank"
              className="git_link"
            >
              <div className="social-container">
                <GithubOutlined
                  style={{ color: "#000", fontSize: "28px", lineHeight: "1px" }}
                />
              </div>
            </a>
            <a target="_blank" href={icons.Anchal_Tyagi_Resume} download>
              <div className="social-container">
                <img
                  src={icons.resume_icon}
                  style={{ color: "#fff", fontSize: "28px" }}
                  width="80%"
                  height="80%"
                />
              </div>
            </a>
          </div>

          <div style={{ marginTop: "40px" }}>
            I am proficient in Javascript, ReactJS, NextJS, TypeScript, Redux,
            HTML5, CSS, SASS, and Bootstrap. I am a Software Engineer currently
            working at SkillMine Technology. I have worked for popular fintech
            clients like American Express and Zestmoney.
            <div className="read-more">
              <NavLink to="/skills">
                Read more about my work experience
                <ArrowRightOutlined
                  style={{ color: "#00a5ec", width: "30px" }}
                />
              </NavLink>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <h3>My Story:</h3>I joined SkillMine fresh out of college with
            little experience. But, over the years, I have developed various
            technical skills and gained a lot of experience working on some
            exciting projects. When I joined I was the least experienced member
            of the team. In 2+ years, I have led big tasks and even led and
            mentored a small team of junior developers.
            <div className="read-more">
              <NavLink to="/about">
                Read more
                <ArrowRightOutlined
                  style={{ color: "#00a5ec", width: "30px" }}
                />
              </NavLink>
            </div>
          </div>

          <div style={{ margin: "40px 0px 40px 0px" }}>
            <NavLink className="nav-content1" exact to="/contact">
              <div className="contact-button">Contact Me!</div>
            </NavLink>
          </div>
        </div>
        <div className="img_wrapper">
          <img src={Home_web} className="img" alt="Home-image" />
        </div>
      </div>
    </>
  );
}

export default Home;
