import React from "react";
import AboutSty from "./About.module.css";
import AboutImage from "../../../../assets/AboutImage.png";
import { FaCheckDouble } from "react-icons/fa";
function About() {
  return (
    <div className={AboutSty.about}>
      <div className={AboutSty.left_side_about}>
        <img src={AboutImage} alt="aboutimg" />
      </div>
      <div className={AboutSty.right_side_about}>
        <h1>
          WORK WITH US AND DRIVE <br /> <span>TRAFFIC</span> ON YOUR WEBSITE{" "}
        </h1>
        <p>
          Capitalize on low identify a ballpark value added <br /> activity to
          beta test. Override the digital divide <br /> withhanging fruit to
          identify
        </p>
        <li>
          <FaCheckDouble style={{ color: "#007cff" }} /> Be on the top of Google
        </li>
        <li>
          <FaCheckDouble style={{ color: "#007cff" }} /> Save your time and let
          us handle it
        </li>
        <li>
          <FaCheckDouble style={{ color: "#007cff" }} /> Cros-devices ability
        </li>
        <li>
          <FaCheckDouble style={{ color: "#007cff" }} /> Be rewarded by our
          services
        </li>
        <button>Know More</button>
      </div>
    </div>
  );
}

export default About;
