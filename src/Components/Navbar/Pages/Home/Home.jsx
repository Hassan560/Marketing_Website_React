import React from "react";
import HomeImage from "../../../../assets/HomeImage.png";
import HomeContentImage from "../../../../assets/Home.Content.Image.png";
import HomeCss from "./Home.module.css";
function Home() {
  return (
    <>
      {/* HomeContentOne */}
      <div className={HomeCss.home_content}>
        <div className={HomeCss.left_side_home}>
          <h1>WE MAKE BEST IN THIS</h1>
          <span>DIGITAL MARKETING</span>
          <p>
            At Burgess, we focus on the marketing in digital <br /> marketing. Our goal
            is not to sell you the latest tech <br /> fad, but to create an integrated.
          </p>
          <div className={HomeCss.home_btn}>
            <button className={HomeCss.btnOne}>Know More</button>
            <button className={HomeCss.btnTwo}>Get Started</button>
          </div>
        </div>
        <div className={HomeCss.right_side_home}>
          <img className={HomeCss.image} src={HomeImage} alt="homeImg" />
        </div>
      </div>
      {/* HomeContentOne End */}

      {/* HomeContentTwo start */}
      <div className={HomeCss.home_content_Two}>
        <div className={HomeCss.left_side_homeTwo}>
          <img
            className={HomeCss.imageTwo}
            src={HomeContentImage}
            alt="homeImgTwo"
          />
        </div>
        <div className={HomeCss.right_side_homeTwo}>
          <h1>
            DIGITAL MARKETING <br /> <span>CASE</span> STUDIES
          </h1>
          <p>
            For over three years, DigiUP have  provided <br /> digital marketing
            services to Dolce, <br />  transforming the marketing function, <br /> driving ROI
            through."DigIUP have  <br /> transformed our digital marketing.<br />
          </p>
        </div>
      </div>
      {/* HomeContentTwo End */}
    </>
  );
}

export default Home;
