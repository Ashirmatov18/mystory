import React, { useState } from "react";
import "../App.css";
import Flickity from "flickity";
import childrens from "../images/test.png";
import irons from "../images/lian.png";
import trex from "../images/small 1.png";
import bigdino from "../images/GettyImages-615096544-5c5737bac9e77c0001a41089 1.png";
import smalldino from "../images/small.png";
import branchmain from "../images/liana.png";
import lycan from "../images/snapedit_1712140778379 1.png";
import wolve from "../images/wolve.svg";
// import aa from "../images/aa.svg";
import Footer from "./Footer";
import bifg from "../images/bifg.svg";
import { Car, Bot, People, MadeIn, Logo } from "./SvgImages";
import ScrollUpDown from "react-top-bottom-scroll";
import Payment from "../images/online-pay-svgrepo-com.svg";
import dinofooter from "../images/1939441 1.svg";
import Modal from "./modal/Modal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Dino() {
  const [open, setOpen] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };

  const infocompany = [
    {
      id: 1,
      title: "dino.home.faq.what-age",
      content: "dino.home.faq.what-age-answer",
    },
    {
      id: 2,
      title: "dino.home.faq.how-personalize",
      content: "dino.home.faq.how-personalize-answer",
    },
    {
      id: 3,
      title: "dino.home.faq.how-long",
      content: "dino.home.faq.how-long-answer",
    },
    {
      id: 4,
      title: "dino.home.faq.other-encyclopedia",
      content: "dino.home.faq.other-encyclopedia-answer",
    },
  ];

  const toggle = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleChangeLanguage = (lng) => {
    setLanguage(lng);
    changeLanguage(lng);
  };

  return (
    <div className="main">
      <div className="info_page">
        <div className="nav">
          <div className="logo">
            <Logo />
          </div>{" "}
          <div>
            <select
              value={language}
              onChange={(e) => handleChangeLanguage(e.target.value)}
            >
              <option value="en">{t("language.eng")}</option>
              <option value="ru">{t("language.ru")}</option>
            </select>
          </div>
          <Link to="/payment">
            {" "}
            <img src={Payment} alt="" className="payment" />
          </Link>
        </div>
        <div className="discover">
          <div className="main_info">
            {/* <div className="branch"></div> */}
            <img src={branchmain} alt="" className="branch" />
            <div className="info_disco">
              <div className="instruction">
                <h2>{t("dino.home.discover")}</h2>
                <h4>{t("dino.home.description")}</h4>
                <button>{t("dino.home.personalize")}</button>
                <h2>{t("dino.home.follow-instructions")}</h2>
                <h4>{t("dino.home.click-button")}</h4>
              </div>
            </div>
          </div>
          <div className="pic_disco">
            <h1>$60 </h1>
            <h1>$39.90</h1>
          </div>
        </div>
        <div className="svg_links">
          <div className="links_in">
            <Car />
            {/* <h3>hii</h3> */}
          </div>
          <div className="link_in">
            <Bot className="cars" />
          </div>{" "}
          <div className="links_in">
            <People />
            {/* <h3>hii</h3> */}
          </div>
          <div className="link_in">
            <Bot className="cars" />
          </div>
          <div className="links_in">
            <MadeIn />
            {/* <h3>hii</h3> */}
          </div>
        </div>
        <div className="scroll">
          <ScrollUpDown />
        </div>
      </div>
      {/* <div className="dino"></div> */}
      <img src={smalldino} alt="" className="dino" />

      <div className="road"></div>

      <div className="demo">
        <img src={lycan} alt="" className="finger" />
        <div className="buttons">
          <button className="order_bt" onClick={openModal}>
            {t("dino.home.order-now")}
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />

          {/* <button className="demo_bt">Demo...</button> */}
        </div>
        {/* <img src={aa} alt="" className="aa" /> */}
      </div>
      <div className="provide">
        <div className="ency">
          <img src={wolve} alt="" className="wolve" />
          <div className="ency_pic"></div>
          <div className="ency_info">
            <h1>{t("dino.home.what-we-provide")}</h1>
            <br />
            <h3>{t("dino.home.cusomized-book")}</h3>
            <h5>{t("dino.home.cusomized-book-description")}</h5>
            <br />
            <h3>{t("dino.home.more-than-20")}</h3>
            <h5>{t("dino.home.learn-about-dinos")}</h5>
            <h3>{t("dino.home.immersive-story")}</h3>
            <h5>{t("dino.home.created-by")}</h5>

            <button className="ency_more">{t("dino.home.more-info")}</button>
          </div>
        </div>
        {/* <h3>Reviews</h3> */}
      </div>

      <div className="carousel">
        {/* <Flickity className='slider' elementType='div' >

        </Flickity> */}

        <div className="carou_main">
          <div className="caro_img"></div>
          <div className="caro_information">
            {t("dino.home.review.reading-the-dinosaur")}
          </div>
        </div>
        <div className="carou_info">
          <h4>{t("dino.home.review.kid-friendly")}</h4>
          <h1>MyStory</h1>
          <h2>{t("dino.home.review.drop-comment")}</h2>
        </div>
      </div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      <div className="child_dino">
        <div className="trexchild">
          <img src={childrens} alt="" className="childrens" />
          <img src={trex} alt="" className="trexx" />
        </div>
        <img src={irons} alt="" className="ironbranch" />
      </div>

      <div className="maininfocompany">
        <div className="information">
          <h1>{t("dino.home.faq.title")}</h1>
          {infocompany.map((item) => (
            <div key={item.id} className="findoutinfo">
              <div className="findoutmainfo">
                <h2>{t(item.title)}</h2>
                <button onClick={() => toggle(item.id)}>
                  {open[item.id] ? "^" : "v"}
                </button>
              </div>
              {open[item.id] && <p>{t(item.content)}</p>}
            </div>
          ))}
        </div>
        <div className="infobook">
          <div className="infobookimg"></div>
        </div>
      </div>

      <div className="argedino">
        <img src={bigdino} alt="" className="bigdino" />
        <p>{t("dino.home.argedino")}</p>
      </div>

      <div className="swapinfo">
        <div className="swapimg">
          <div className="fffblock"></div>
          <div className="swapimgexample">
            <div className="swapfirstblock">
              <div className="exampleimg"></div>
              <div className="exampleaitext">
                <h2>{t("dino.home.ai-face-swap")}</h2>
              </div>
              <div className="boysswapped"></div>
            </div>
            <div className="bookexample">
              <div className="book"></div>
              <div className="personalize">
                <button>{t("dino.home.personalize-book")}</button>
                <h5>{t("dino.home.click-now")}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="swapbranch"></div>
      </div>

      <h1 className="products">{t("dino.home.other-products")}</h1>

      <div className="otherproducts">
        <img src={bifg} alt="" className="bifg" />
        <div className="productinfo">
          <div className="productphoto"></div>
          <div className="productency">
            <h2>{t("dino.home.subscribe-for-updates")}</h2>
            <div className="productprice">
              <p>$450.00</p>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <h2>{t("dino.home.space-encyclopedia")}</h2>
          <div className="sub_form">
            <input
              type="email"
              name=""
              id=""
              placeholder={t("dino.home.email")}
            />
            <button type="submit">{t("dino.home.send")}</button>
          </div>
        </div>
        <img src={dinofooter} alt="" className="footerdinomobile" />
      </div>

      <Footer />
    </div>
  );
}
