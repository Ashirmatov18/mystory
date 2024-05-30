import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useInView } from "react-intersection-observer";
import "../App.css";
import childrens from "../images/test.png";
import irons from "../images/lian.png";
import trex from "../images/small 1.png";
import bigdino from "../images/GettyImages-615096544-5c5737bac9e77c0001a41089 1.png";
import smalldino from "../images/small.png";
import branchmain from "../images/liana.png";
import lycan from "../images/snapedit_1712140778379 1.png";
import wolve from "../images/wolve.svg";
import Footer from "./Footer";
import bifg from "../images/bifg.svg";
import { Car, Bot, People, MadeIn, Logo } from "./SvgImages";
import ScrollUpDown from "react-top-bottom-scroll";
import Payment from "../images/online-pay-svgrepo-com.svg";
import dinofooter from "../images/1939441 1.svg";
import Modal from "./modal/Modal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import flagUS from "../images/us.png";
import flagRU from "../images/rus.png";

export default function Dino() {
  const [open, setOpen] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const selectElement = document.querySelector(".language-select");
    if (selectElement) {
      if (language === "en") {
        selectElement.style.backgroundImage = `url(${flagUS})`;
      } else if (language === "ru") {
        selectElement.style.backgroundImage = `url(${flagRU})`;
      }
    }
  }, [language]);

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

  const [branchRef, branchInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [smalldinoRef, smalldinoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [fingerRef, fingerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [wolveRef, wolveInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [childrensRef, childrensInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [trexRef, trexInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ironsRef, ironsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [bigdinoRef, bigdinoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [bifgRef, bifgInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [dinofooterRef, dinofooterInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [encyPicRef, encyPicInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [infoBookImgRef, infoBookImgInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [textRefs, setTextRefs] = useState([]);
  const [svgRefs, setSvgRefs] = useState([]);
  const [instructionRefs, setInstructionRefs] = useState([]);
  const [buttonRefs, setButtonRefs] = useState([]);
  const [dinoRef, dinoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use state to keep track of whether the animations have been triggered
  const [hasAnimated, setHasAnimated] = useState({
    branch: false,
    smalldino: false,
    finger: false,
    wolve: false,
    childrens: false,
    trex: false,
    irons: false,
    bigdino: false,
    bifg: false,
    dinofooter: false,
    encyPic: false,
    infoBookImg: false,
    texts: [],
    svgs: [],
    instructions: [],
    buttons: [],
    dino: false,
  });

  // Update state when elements come into view
  useEffect(() => {
    if (branchInView && !hasAnimated.branch)
      setHasAnimated((prev) => ({ ...prev, branch: true }));
    if (smalldinoInView && !hasAnimated.smalldino)
      setHasAnimated((prev) => ({ ...prev, smalldino: true }));
    if (fingerInView && !hasAnimated.finger)
      setHasAnimated((prev) => ({ ...prev, finger: true }));
    if (wolveInView && !hasAnimated.wolve)
      setHasAnimated((prev) => ({ ...prev, wolve: true }));
    if (childrensInView && !hasAnimated.childrens)
      setHasAnimated((prev) => ({ ...prev, childrens: true }));
    if (trexInView && !hasAnimated.trex)
      setHasAnimated((prev) => ({ ...prev, trex: true }));
    if (ironsInView && !hasAnimated.irons)
      setHasAnimated((prev) => ({ ...prev, irons: true }));
    if (bigdinoInView && !hasAnimated.bigdino)
      setHasAnimated((prev) => ({ ...prev, bigdino: true }));
    if (bifgInView && !hasAnimated.bifg)
      setHasAnimated((prev) => ({ ...prev, bifg: true }));
    if (dinofooterInView && !hasAnimated.dinofooter)
      setHasAnimated((prev) => ({ ...prev, dinofooter: true }));
    if (encyPicInView && !hasAnimated.encyPic)
      setHasAnimated((prev) => ({ ...prev, encyPic: true }));
    if (infoBookImgInView && !hasAnimated.infoBookImg)
      setHasAnimated((prev) => ({ ...prev, infoBookImg: true }));
    if (dinoInView && !hasAnimated.dino)
      setHasAnimated((prev) => ({ ...prev, dino: true }));

    textRefs.forEach((ref, index) => {
      if (ref && ref.inView && !hasAnimated.texts[index]) {
        setHasAnimated((prev) => {
          const newTexts = [...prev.texts];
          newTexts[index] = true;
          return { ...prev, texts: newTexts };
        });
      }
    });

    svgRefs.forEach((ref, index) => {
      if (ref && ref.inView && !hasAnimated.svgs[index]) {
        setHasAnimated((prev) => {
          const newSvgs = [...prev.svgs];
          newSvgs[index] = true;
          return { ...prev, svgs: newSvgs };
        });
      }
    });

    instructionRefs.forEach((ref, index) => {
      if (ref && ref.inView && !hasAnimated.instructions[index]) {
        setHasAnimated((prev) => {
          const newInstructions = [...prev.instructions];
          newInstructions[index] = true;
          return { ...prev, instructions: newInstructions };
        });
      }
    });

    buttonRefs.forEach((ref, index) => {
      if (ref && ref.inView && !hasAnimated.buttons[index]) {
        setHasAnimated((prev) => {
          const newButtons = [...prev.buttons];
          newButtons[index] = true;
          return { ...prev, buttons: newButtons };
        });
      }
    });
  }, [
    branchInView,
    smalldinoInView,
    fingerInView,
    wolveInView,
    childrensInView,
    trexInView,
    ironsInView,
    bigdinoInView,
    bifgInView,
    dinofooterInView,
    encyPicInView,
    infoBookImgInView,
    dinoInView,
    textRefs,
    svgRefs,
    instructionRefs,
    buttonRefs,
  ]);

  useEffect(() => {
    setTextRefs((refs) =>
      Array(infocompany.length)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
    setSvgRefs((refs) =>
      Array(5)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
    setInstructionRefs((refs) =>
      Array(4)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
    setButtonRefs((refs) =>
      Array(10)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
  }, [infocompany.length]);

  return (
    <div className="main">
      <div className="info_page">
        <div className="nav">
          <div className="logo">
            <Logo />
          </div>{" "}
          <div className="language-select-wrapper">
            <select
              value={language}
              onChange={(e) => handleChangeLanguage(e.target.value)}
              className="language-select"
            >
              <option value="en" data-icon="url(/images/flag_us.png)">
                {t("language.eng")}
              </option>
              <option value="ru" data-icon="url(/images/flag_ru.png)">
                {t("language.ru")}
              </option>
            </select>
          </div>
          <Link to="/payment">
            {" "}
            <img src={Payment} alt="" className="payment" />
          </Link>
        </div>
        <div className="discover">
          <div className="main_info">
            <CSSTransition
              in={hasAnimated.branch}
              timeout={1000}
              classNames="fade-slide-right"
            >
              <img ref={branchRef} src={branchmain} alt="" className="branch" />
            </CSSTransition>
            <div className="info_disco">
              <div className="instruction">
                <CSSTransition
                  in={hasAnimated.instructions[0]}
                  timeout={1000}
                  classNames="fade"
                >
                  <div ref={instructionRefs[0]}>
                    <h2>{t("dino.home.discover")}</h2>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={hasAnimated.instructions[1]}
                  timeout={1000}
                  classNames="fade"
                >
                  <div ref={instructionRefs[1]}>
                    <h4>{t("dino.home.description")}</h4>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={hasAnimated.buttons[0]}
                  timeout={1000}
                  classNames="fade"
                >
                  <div ref={buttonRefs[0]}>
                    <button>{t("dino.home.personalize")}</button>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={hasAnimated.instructions[2]}
                  timeout={1000}
                  classNames="fade"
                >
                  <div ref={instructionRefs[2]}>
                    <h2>{t("dino.home.follow-instructions")}</h2>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={hasAnimated.instructions[3]}
                  timeout={1000}
                  classNames="fade"
                >
                  <div ref={instructionRefs[3]}>
                    <h4>{t("dino.home.click-button")}</h4>
                  </div>
                </CSSTransition>
              </div>
            </div>
          </div>
          <div className="pic_disco">
            <h1>$60 </h1>
            <h1>$39.90</h1>
          </div>
        </div>
        <div className="svg_links">
          <CSSTransition
            in={hasAnimated.svgs[0]}
            timeout={1000}
            classNames="fade-slide-left"
          >
            <div ref={svgRefs[0]} className="link_in">
              <Car />
            </div>
          </CSSTransition>
          <CSSTransition
            in={hasAnimated.svgs[1]}
            timeout={1000}
            classNames="fade-slide-right"
          >
            <div ref={svgRefs[1]} className="link_in">
              <Bot className="cars" />
            </div>
          </CSSTransition>
          <CSSTransition
            in={hasAnimated.svgs[2]}
            timeout={1000}
            classNames="fade-slide-left"
          >
            <div ref={svgRefs[2]} className="link_in">
              <People />
            </div>
          </CSSTransition>
          <CSSTransition
            in={hasAnimated.svgs[3]}
            timeout={1000}
            classNames="fade-slide-right"
          >
            <div ref={svgRefs[3]} className="link_in">
              <Bot className="cars" />
            </div>
          </CSSTransition>
          <CSSTransition
            in={hasAnimated.svgs[4]}
            timeout={1000}
            classNames="fade-slide-left"
          >
            <div ref={svgRefs[4]} className="link_in">
              <MadeIn />
            </div>
          </CSSTransition>
        </div>
        <div className="scroll">
          <ScrollUpDown />
        </div>
      </div>
      <CSSTransition
        in={hasAnimated.dino}
        timeout={1000}
        classNames="fade-slide-left"
      >
        <img ref={dinoRef} src={smalldino} alt="" className="dino" />
      </CSSTransition>

      <div className="road"></div>

      <div className="demo">
        <CSSTransition
          in={hasAnimated.finger}
          timeout={1000}
          classNames="fade-slide-left"
        >
          <img ref={fingerRef} src={lycan} alt="" className="finger" />
        </CSSTransition>
        <div className="buttons">
          <CSSTransition
            in={hasAnimated.buttons[1]}
            timeout={1000}
            classNames="fade"
          >
            <div ref={buttonRefs[1]}>
              <button className="order_bt" onClick={openModal}>
                {t("dino.home.order-now")}
              </button>
            </div>
          </CSSTransition>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="provide">
        <div className="ency">
          <CSSTransition
            in={hasAnimated.wolve}
            timeout={1000}
            classNames="fade-slide-right"
          >
            <img ref={wolveRef} src={wolve} alt="" className="wolve" />
          </CSSTransition>
          <CSSTransition
            in={hasAnimated.encyPic}
            timeout={1000}
            classNames="fade-slide-left"
          >
            <div ref={encyPicRef} className="ency_pic"></div>
          </CSSTransition>
          <div className="ency_info">
            <CSSTransition
              in={hasAnimated.texts[0]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={textRefs[0]}>
                <h1>What We Provide</h1>
              </div>
            </CSSTransition>
            <h1>{t("dino.home.what-we-provide")}</h1>
            <br />
            <CSSTransition
              in={hasAnimated.texts[1]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={textRefs[1]}>
                <h3>Customized Book with Your Child's Photos</h3>
              </div>
            </CSSTransition>
            <CSSTransition
              in={hasAnimated.texts[2]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={textRefs[2]}>
                <h5>
                  Discover the wonder of dinosaurs with a custom book, uniquely
                  crafted with your child's photos! Dive into an engaging
                  expedition where they become part of the story, fostering a
                  love for learning and exploration.
                </h5>
              </div>
            </CSSTransition>
            <h3>{t("dino.home.cusomized-book")}</h3>
            <h5>{t("dino.home.cusomized-book-description")}</h5>
            <br />
            <h3>{t("dino.home.more-than-20")}</h3>
            <h5>{t("dino.home.learn-about-dinos")}</h5>
            <h3>{t("dino.home.immersive-story")}</h3>
            <h5>{t("dino.home.created-by")}</h5>

            <CSSTransition
              in={hasAnimated.buttons[2]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={buttonRefs[2]}>
                <button className="ency_more">
                  {t("dino.home.more-info")}
                </button>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>

      <div className="carousell">
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

      <div className="child_dino">
        <div className="trexchild">
          <CSSTransition
            in={hasAnimated.childrens}
            timeout={1000}
            classNames="fade-slide-left"
          >
            <img
              ref={childrensRef}
              src={childrens}
              alt=""
              className="childrens"
            />
          </CSSTransition>
          <CSSTransition
            in={hasAnimated.trex}
            timeout={1000}
            classNames="fade-slide-right"
          >
            <img ref={trexRef} src={trex} alt="" className="trexx" />
          </CSSTransition>
        </div>
        <CSSTransition
          in={hasAnimated.irons}
          timeout={1000}
          classNames="fade-slide-left"
        >
          <img ref={ironsRef} src={irons} alt="" className="ironbranch" />
        </CSSTransition>
      </div>

      <div className="maininfocompany">
        <div className="information">
          <h1>{t("dino.home.faq.title")}</h1>
          {infocompany.map((item, index) => (
            <div key={item.id} className="findoutinfo">
              <div className="findoutmainfo">
                <h2>{item.title}</h2>
                <button onClick={() => toggle(item.id)}>
                  {open[item.id] ? "^" : "v"}
                </button>
              </div>
              <CSSTransition
                in={hasAnimated.texts[index + 7]}
                timeout={1000}
                classNames="fade"
              >
                <div ref={textRefs[index + 7]}>
                  {open[item.id] && <p>{item.content}</p>}
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
        <CSSTransition
          in={hasAnimated.infoBookImg}
          timeout={1000}
          classNames="fade-slide-right"
        >
          <div ref={infoBookImgRef} className="infobookimg"></div>
        </CSSTransition>
      </div>

      <div className="argedino">
        <CSSTransition
          in={hasAnimated.bigdino}
          timeout={1000}
          classNames="fade-slide-right"
        >
          <img ref={bigdinoRef} src={bigdino} alt="" className="bigdino" />
        </CSSTransition>
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
                <CSSTransition
                  in={hasAnimated.buttons[3]}
                  timeout={1000}
                  classNames="fade"
                >
                  <div ref={buttonRefs[3]}>
                    <button>{t("dino.home.personalize-book")}</button>
                  </div>
                </CSSTransition>
                <h5>{t("dino.home.click-now")}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="swapbranch"></div>
      </div>

      <h1 className="products">{t("dino.home.other-products")}</h1>

      <div className="otherproducts">
        <CSSTransition
          in={hasAnimated.bifg}
          timeout={1000}
          classNames="fade-slide-left"
        >
          <img ref={bifgRef} src={bifg} alt="" className="bifg" />
        </CSSTransition>
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
            <CSSTransition
              in={hasAnimated.buttons[4]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={buttonRefs[4]}>
                <button type="submit">{t("dino.home.send")}</button>
              </div>
            </CSSTransition>
          </div>
        </div>
        <CSSTransition
          in={hasAnimated.dinofooter}
          timeout={1000}
          classNames="fade-slide-left"
        >
          <img
            ref={dinofooterRef}
            src={dinofooter}
            alt=""
            className="footerdinomobile"
          />
        </CSSTransition>
      </div>

      <Footer />
    </div>
  );
}
