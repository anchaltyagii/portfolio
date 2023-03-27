import { PhoneOutlined } from "@ant-design/icons";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    // <div className="footer-wrapper">
    //   <NavLink to="/">
    //     {location.pathname === "/" ? (
    //       <div className="footer-icon">
    //         <HomeOutlined style={{ color: "blue" }} />
    //       </div>
    //     ) : (
    //       <div className="footer-icon">
    //         <HomeOutlined />
    //       </div>
    //     )}
    //   </NavLink>

    //   <a href="tel: +919971405839">
    //     <div className="footer-icon">
    //       <PhoneOutlined style={{ transform: "rotate(89deg)" }} />
    //     </div>
    //   </a>

    //   <div className="footer-icon">
    //     <MenuOutlined />
    //   </div>
    // </div>
    <>
      {/* <div className="footer-container">
        <p>Designed & built by Anchal Tyagi</p>
      </div> */}
    </>
  );
};

export default Footer;
