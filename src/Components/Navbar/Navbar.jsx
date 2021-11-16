import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [isMobile, setIsMobile] = useState(true);
  const toggle = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.left_Side_nav}>
        <Link to="/">
          <h5>
            Digi<span>Up</span>
          </h5>
        </Link>
      </div>
      <div
        className={isMobile ? "right_Side_nav" : "navLinksMobile"}
        onClick={() => setIsMobile(true)}
      >
        <ul className="navLinksMobile">
          <Link className={styles.home} to="/">
            Home
          </Link>
          <Link className={styles.services} to="/Services">
            Services
          </Link>
          <Link className={styles.about} to="About">
            About
          </Link>
          <Link className={styles.contact} to="Contact">
            Contact
          </Link>
        </ul>
      </div>
      <button className={styles.mobilemenuicon} onClick={toggle}>
        {isMobile ? <FaBars /> : <FaTimes />}
      </button>
    </div>
  );
}

export default Navbar;
