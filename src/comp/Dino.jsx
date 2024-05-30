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

export default function Dino() {
  const [open, setOpen] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: "What age is your dinosaur book best for?",
      content:
        "This dinosaur book is crafted to enchant a broad spectrum of ages. Vibrant illustrations and captivating narratives make it ideal for toddlers and preschoolers, typically aged 2 to 5, fostering learning through exploration. Yet, its educational depth extends its appeal to older children, ranging from around 3 to 14 years old. Its timeless allure even captivates adults, making it a delightful choice for family bonding and exploration of prehistoric wonders.",
    },
    {
      id: 2,
      title: "How do I personalize my child's dinosaur book?",
      content:
        "To personalize your child's dinosaur book, simply upload their photo to our platform. Utilizing cutting-edge artificial intelligence technology, we'll integrate their image into unique illustrations throughout the book. This way, your little one becomes the main character on every page, immersing themselves in thrilling adventures with dinosaurs.",
    },
    {
      id: 3,
      title: "How long does it take to make my dinosaur book?",
      content:
        "It typically requires about 2-3 weeks to complete your custom dinosaur book, encompassing design work and the printing process.",
    },
    {
      id: 4,
      title: "Do you have any other encyclopedia editions?",
      content:
        "Certainly! In addition to our dinosaur encyclopedia, we offer encyclopedias covering topics such as space exploration and the history of European countries. However, what sets us apart is our specialization in creating personalized books. You can order any story with your child as the main character, ensuring a truly unique and unforgettable reading experience.",
    },
  ];

  const toggle = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
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
    textRefs,
    svgRefs,
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
  }, [infocompany.length]);

  return (
    <div className="main">
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="info_page">
          <div className="nav">
            <div className="logo">
              <Logo />
            </div>
            <Link to="/payment">
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
                <img
                  ref={branchRef}
                  src={branchmain}
                  alt=""
                  className="branch"
                />
              </CSSTransition>
              <div className="info_disco">
                <div className="instruction">
                  <h2>Discover Dinosaurs world</h2>
                  <h4>Personalized books with your kid as the main hero</h4>
                  <button>Personalize</button>
                  <h2>Follow the instructions</h2>
                  <h4>
                    Click on the button above and watch what happens after below
                  </h4>
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
              <CSSTransition
                in={hasAnimated.svgs[0]}
                timeout={1000}
                classNames="fade-slide-left"
              >
                <div ref={svgRefs[0]}>
                  <Car />
                </div>
              </CSSTransition>
            </div>
            <div className="link_in">
              <CSSTransition
                in={hasAnimated.svgs[1]}
                timeout={1000}
                classNames="fade-slide-right"
              >
                <div ref={svgRefs[1]}>
                  <Bot className="cars" />
                </div>
              </CSSTransition>
            </div>
            <div className="links_in">
              <CSSTransition
                in={hasAnimated.svgs[2]}
                timeout={1000}
                classNames="fade-slide-left"
              >
                <div ref={svgRefs[2]}>
                  <People />
                </div>
              </CSSTransition>
            </div>
            <div className="link_in">
              <CSSTransition
                in={hasAnimated.svgs[3]}
                timeout={1000}
                classNames="fade-slide-right"
              >
                <div ref={svgRefs[3]}>
                  <Bot className="cars" />
                </div>
              </CSSTransition>
            </div>
            <div className="links_in">
              <CSSTransition
                in={hasAnimated.svgs[4]}
                timeout={1000}
                classNames="fade-slide-left"
              >
                <div ref={svgRefs[4]}>
                  <MadeIn />
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="scroll">
            <ScrollUpDown />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={hasAnimated.smalldino}
        timeout={1000}
        classNames="fade-slide-left"
      >
        <img ref={smalldinoRef} src={smalldino} alt="" className="dino" />
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
          <button className="order_bt" onClick={openModal}>
            Order Now
          </button>
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
            <br />
            <CSSTransition
              in={hasAnimated.texts[3]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={textRefs[3]}>
                <h3>More than 20 dinosaurs featured in our pages</h3>
              </div>
            </CSSTransition>
            <CSSTransition
              in={hasAnimated.texts[4]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={textRefs[4]}>
                <h5>
                  Learn about the alluring ancient reptiles: Eoraptor,
                  Plateosaurus, Postosuchus, Brontosaurus, Apatosaurus,
                  Diplodocus, Kentosaurus, Composagnathus, Archeopteryx,
                  Tyrannosaurus Rex, Triceratops, Velociraptor, Spinosaurus,
                  Ankylosaurus, Pteranodon, Parasaurolophus,
                  Carcharodontosaurus, Argentinosaurus, Stegocephalus,
                  Titanosaurus.
                </h5>
              </div>
            </CSSTransition>
            <CSSTransition
              in={hasAnimated.texts[5]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={textRefs[5]}>
                <h3>Immersive story written by top wordsmiths</h3>
              </div>
            </CSSTransition>
            <CSSTransition
              in={hasAnimated.texts[6]}
              timeout={1000}
              classNames="fade"
            >
              <div ref={textRefs[6]}>
                <h5>
                  Created by a team of paleontology experts, experienced
                  writers, and a psychologist, our encyclopedia guarantees a
                  safe and enriching experience for your child.
                </h5>
              </div>
            </CSSTransition>
            <button className="ency_more">More Info</button>
          </div>
        </div>
      </div>

      <div className="carousell">
        <div className="carou_main">
          <div className="caro_img"></div>
          <div className="caro_information">
            Reading the dinosaur encyclopedia turned our evenings into an
            exciting adventure. My sons, Max and Jake, with every page they
            plunged into a new era, as if they themselves had become part of
            ancient history. Delight your little ones
          </div>
        </div>
        <div className="carou_info">
          <h4>Kid-friendly encyclopedias covering multiple subjects</h4>
          <h1>MyStory</h1>
          <h2>Drop Comment</h2>
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
          <h1>Personalized Dinosaur Encyclopedia FAQs</h1>
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
        <p>
          Your children can see themselves as explorers, traveling through the
          ages, encountering dinosaurs face to face. It's not just a book – it's
          an adventure that will captivate their imagination and bring an
          incredible dose of magic and knowledge into their world.
        </p>
      </div>

      <div className="swapinfo">
        <div className="swapimg">
          <div className="fffblock"></div>
          <div className="swapimgexample">
            <div className="swapfirstblock">
              <div className="exampleimg"></div>
              <div className="exampleaitext">
                <h2>AI FACE SWAP</h2>
              </div>
              <div className="boysswapped"></div>
            </div>
            <div className="bookexample">
              <div className="book"></div>
              <div className="personalize">
                <button>Personalize Book</button>
                <h5>Click now!!!</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="swapbranch"></div>
      </div>

      <h1 className="products">Our other Products </h1>

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
            <h2>Encyclopedia about space</h2>
            <div className="productprice">
              <p>$450.00</p>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <h2>Subscribe For Updates</h2>
          <div className="sub_form">
            <input type="email" name="" id="" placeholder="E-mail" />
            <button type="submit">Send</button>
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
