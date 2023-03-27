import React from "react";
import { icons } from "../../Assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <a target="_blank" href={icons.Anchal_Tyagi_Resume}>
        <div className="resume-btn-wrapper">
          <button>Resume</button>
        </div>
      </a>
      <div className="avatar-img-wrapper">
        <img
          src={icons.Anchal_img}
          alt="AVatar"
          width="50px"
          height="50px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default Header;
