import React, { useState } from "react";
import "../App.css";
import Flickity from "flickity";
import childrens from "../images/42424242424242424 1.svg";
import irons from "../images/snapedit_1712143663965 1.svg";
import trex from "../images/snapedit_1712144461666 1.svg";
import bigdino from "../images/GettyImages-615096544-5c5737bac9e77c0001a41089 1.svg";
import smalldino from "../images/small.svg";
import branchmain from "../images/1000_F_548494538_YlpbzOM32HO4gZwabKuGh7NQkuEgZCpT 1.svg";
import lycan from "../images/lycan.svg";
import wolve from "../images/wolve.svg";
import aa from "../images/aa.svg";
import Footer from "./Footer";
import bifg from "../images/bifg.svg";
import { Car, Bot, People, MadeIn, Logo } from "./SvgImages";
import ScrollUpDown from "react-top-bottom-scroll";
import Payment from "../images/online-pay-svgrepo-com.svg";

export default function Dino() {
  const [open, setOpen] = useState({});

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

  return (
    <div className="main">
      <div className="info_page">
        <div className="nav">
          <div className="logo">
            <Logo />
          </div>
          <img src={Payment} alt="" className="payment" />
        </div>
        <div className="discover">
          <div className="main_info">
            {/* <div className="branch"></div> */}
            <img src={branchmain} alt="" className="branch" />
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
          <button className="order_bt">Order Now</button>
          {/* <button className="demo_bt">Demo...</button> */}
        </div>
        {/* <img src={aa} alt="" className="aa" /> */}
      </div>

      <div className="provide">
        <div className="ency">
          <img src={wolve} alt="" className="wolve" />
          <div className="ency_pic"></div>
          <div className="ency_info">
            <h1>What We Provide</h1>
            <br />
            <h3>Customized Book with Your Child's Photos</h3>
            <h5>
              Discover the wonder of dinosaurs with a custom book, uniquely
              crafted with your child's photos! Dive into an engaging expedition
              where they become part of the story, fostering a love for learning
              and exploration.
            </h5>
            <br />
            <h3>More than 20 dinosaurs featured in our pages</h3>
            <h5>
              Learn about the alluring ancient reptiles: Eoraptor, Plateosaurus,
              Postosuchus, Brontosaurus, Apatosaurus, Diplodocus, Kentosaurus,
              Composagnathus, Archeopteryx, Tyrannosaurus Rex, Triceratops,
              Velociraptor, Spinosaurus, Ankylosaurus, Pteranodon,
              Parasaurolophus, Carcharodontosaurus, Argentinosaurus,
              Stegocephalus, Titanosaurus.
            </h5>
            <h3>Immersive story written by top wordsmiths</h3>
            <h5>
              Created by a team of paleontology experts, experienced writers,
              and a psychologist, our encyclopedia guarantees a safe and
              enriching experience for your child.
            </h5>

            <button className="ency_more">More Info</button>
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
          <img src={childrens} alt="" className="childrens" />
          <img src={trex} alt="" className="trexx" />
        </div>
        <img src={irons} alt="" className="ironbranch" />
      </div>

      <div className="maininfocompany">
        <div className="information">
          <h1>Personalized Dinosaur Encyclopedia FAQs</h1>
          {infocompany.map((item) => (
            <div key={item.id} className="findoutinfo">
              <div className="findoutmainfo">
                <h2>{item.title}</h2>
                <button onClick={() => toggle(item.id)}>
                  {open[item.id] ? "^" : "v"}
                </button>
              </div>
              {open[item.id] && <p>{item.content}</p>}
            </div>
          ))}
        </div>
        <div className="infobook">
          <div className="infobookimg"></div>
        </div>
      </div>

      <div className="argedino">
        <img src={bigdino} alt="" className="bigdino" />
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
        <img src={bifg} alt="" className="bifg" />
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
            <button type="submit">KK</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
