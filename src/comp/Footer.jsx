import React, { useState } from "react";
import "../App.css";
import { Logo } from "./SvgImages";
import f from "../images/facebook(2).svg";
import ln from "../images/linkedin(2).svg";
import inst from "../images/instagram(3).svg";
import dinofooter from "../images/1939441 1.svg";
import sakura from "../images/pngwing 12.svg";

export default function Footer() {
  return (
    <>
      <div className="footer_main">
        <div className="footer_first">
          <div>
            <Logo />
          </div>
          <div>
            <p>
              Explore the Magic <br /> <br /> A unique gift for your loved one
            </p>
          </div>
          <div>
            <img src={dinofooter} alt="" />
          </div>
        </div>
        <div className="footer_second">
          <div className="links">
            <ul>
              <li>Home</li>
              <li>Personalized Books</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <p>Social</p>
            <div className="social">
              <img src={f} alt="" />
              <img src={inst} alt="" />
              <img src={ln} alt="" />
            </div>
          </div>
          <div className="line"></div>
          <div className="reserved">
            <h2>mystory.com© all right reserve</h2>
          </div>
        </div>
        <img src={sakura} alt="" className="sakura" />
      </div>

      <div className="footer_mobile">
        <div>
          <Logo />
        </div>
        <h2>Home</h2>
      </div>
    </>
  );
}
