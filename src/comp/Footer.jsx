import React, { useState } from "react";
import "../App.css";
import { Logo } from "./SvgImages";
import f from "../images/facebook(2).svg";
import ln from "../images/linkedin(2).svg";
import inst from "../images/instagram(3).svg";
import dinofooter from "../images/1939441 1.svg";
import sakura from "../images/pngwing 12.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="footer_main">
        <div className="footer_first">
          <div>
            <Logo />
          </div>
          <div>
            <p>
              {t("dino.home.footer.explore-magic-1")} <br /> <br />
              {t("dino.home.footer.explore-magic-2")}
            </p>
          </div>
          <div>
            <img src={dinofooter} alt="" />
          </div>
        </div>
        <div className="footer_second">
          <div className="links">
            <ul>
              <li>{t("dino.home.footer.home")}</li>
              <li>{t("dino.home.footer.personalized-books")}</li>
              <li>{t("dino.home.footer.contact")}</li>
              <li>{t("dino.home.footer.privacy")}</li>
            </ul>
          </div>
          <div>
            <p>{t("dino.home.footer.social")}</p>
            <div className="social">
              <img src={f} alt="" />
              <img src={inst} alt="" />
              <img src={ln} alt="" />
            </div>
          </div>
          <div className="line"></div>
          <div className="reserved">
            <h2>mystory.com© {t("dino.home.footer.rights-reserved")}</h2>
          </div>
        </div>
        <img src={sakura} alt="" className="sakura" />
      </div>

      <div className="footer_mobile">
        <div>
          <Logo />
        </div>
        <h2>{t("dino.home.footer.home")}</h2>
      </div>
    </>
  );
}
