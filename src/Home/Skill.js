import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

const Skill = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <div>
      <h1 className="header_content">SKILLS</h1>
      <Slide slidesToScroll={2} slidesToShow={2}>
        <div className="each-slide-effect">
          <div className="box">
            <span>
              <img src="https://www.php.net/images/logos/new-php-logo.png" />
            </span>
          </div>
        </div>

        <div className="each-slide-effect">
          <div>
            <span>
              <img src="assets/HTML5_Logo_128.png" />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <span>
              <img src="assets/icons8-css3-color-120.png" />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <span>
              <img src="assets/python-logo-only.svg" />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <span>
              <img style={{ width: "128px" }} src="assets/Ci_Logo.png" />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <span>
              <img
                style={{ width: "128px" }}
                src="assets/logo-mysql-170x115.png"
              />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <span>
              <img
                style={{ width: "128px" }}
                src="assets/96018_xampp_icon.png"
              />
            </span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Skill;
