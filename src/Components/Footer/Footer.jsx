import React from "react";
import FooterSty from "./Footer.module.css";
import {
  AiFillTwitterSquare,
  AiFillGooglePlusSquare,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
function Footer() {
  return (
    <>
      <div className={FooterSty.footer}>
        <div className={FooterSty.footerOne}>
          <h1>
            Digi<span>Up</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet <br /> consectetur adipisicing <br />{" "}
            elit. Ullam numquam <br /> natus sed voluptatum <br /> quos
            cupiditate.
          </p>
          <div className={FooterSty.social}>
            <h4>Follow Us</h4>
            <li>
              <AiFillFacebook style={{ fontSize: "25px" }} />
            </li>
            <li>
              <AiFillTwitterSquare style={{ fontSize: "25px" }} />
            </li>
            <li>
              <AiFillGooglePlusSquare style={{ fontSize: "25px" }} />
            </li>
            <li>
              <AiFillLinkedin style={{ fontSize: "25px" }} />
            </li>
          </div>
        </div>
        <div className={FooterSty.footerTwo}>
          <h2>Tags</h2>
          <p>Agency</p>
          <p>Business</p>
          <p>Marketing</p>
          <p>Portfolio</p>
          <p>Article</p>
          <p>Services</p>
        </div>
        <div className={FooterSty.footerThree}>
          <h2>Contact</h2>
          <h6>12Df,Chantilly</h6>
          <p>Washington DC, United States America.</p>
          <h6>Call : 1 (800) 123-45-67</h6>
          <p>Mon-Fri. 7:00 am to 7:00 pm</p>
          <h6>Send Your Mail At</h6>
          <p>support@DigiUp.com</p>
        </div>
      </div>
      <div className={FooterSty.footerEndTwo}></div>
    </>
  );
}

export default Footer;
