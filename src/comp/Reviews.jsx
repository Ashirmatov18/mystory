import React, { useState, useRef } from "react";
import "./Reviews.css";
import ReactStars from "react-stars";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import firstflow from "../images/13.png";
import secondflow from "../images/12.png";
import thirdflow from "../images/Листочек 3 1.png";
import fourthflow from "../images/Листочки 2 1.png";
import mask from "../images/Mask group 1 (1).png";
import circlegreen from "../images/Ellipse 240.png";
import swaped from "../images/swap.jpg";
import Footer from "./Footer";
import { Logo } from "./SvgImages";
import { Link } from "react-router-dom";
import Payment from "../images/online-pay-svgrepo-com.svg";

export default function Reviews() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const carouselRef = useRef();

  const items = [
    {
      image:
        "https://storage.googleapis.com/mystory_books/encyclopedia/dino/encyclopedia_dino_boy_10_blond_white_1_eng/1.jpg",
      title: "Encyclopedia about space",
      price: "$450.00",
      description: "WORLD BESTSELLER FROM THE CREATOR OF MYSTORY",
    },
    {
      image:
        "https://storage.googleapis.com/mystory_books/encyclopedia/dino/encyclopedia_dino_boy_10_blond_white_1_eng/1.jpg",
      title: "Another book",
      price: "$350.00",
      description: "An interesting book about something else",
    },
    {
      image:
        "https://storage.googleapis.com/mystory_books/encyclopedia/dino/encyclopedia_dino_boy_10_blond_white_1_eng/1.jpg",
      title: "Another book",
      price: "$350.00",
      description: "An interesting book about something else",
    },
    {
      image:
        "https://storage.googleapis.com/mystory_books/encyclopedia/dino/encyclopedia_dino_boy_10_blond_white_1_eng/1.jpg",
      title: "Another book",
      price: "$350.00",
      description: "An interesting book about something else",
    },
    {
      image:
        "https://storage.googleapis.com/mystory_books/encyclopedia/dino/encyclopedia_dino_boy_10_blond_white_1_eng/1.jpg",
      title: "Another book",
      price: "$350.00",
      description: "An interesting book about something else",
    },
  ];

  const reviews = [
    {
      image: swaped,
      initials: "KL",
      name: "Klara L",
      date: "1/2/2024",
      comment:
        "Thank you! Cool idea with butterflies, and special thanks to you for the stickers 🌷🙌",
      rating: 5,
    },
    {
      image: swaped,
      initials: "KL",
      name: "Klara L",
      date: "1/2/2024",
      comment:
        "Thank you! Cool idea with butterflies, and special thanks to you for the stickers 🌷🙌",
      rating: 5,
    },
    {
      image: swaped,
      initials: "KL",
      name: "Klara L",
      date: "1/2/2024",
      comment:
        "Thank you! Cool idea with butterflies, and special thanks to you for the stickers 🌷🙌",
      rating: 5,
    },
    {
      image: swaped,
      initials: "KL",
      name: "Klara L",
      date: "1/2/2024",
      comment:
        "Thank you! Cool idea with butterflies, and special thanks to you for the stickers 🌷🙌",
      rating: 5,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-left-arrow" onClick={onClick}>
        &#9664;
      </div>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-right-arrow" onClick={onClick}>
        &#9654;
      </div>
    );
  };

  return (
    <div className="mainn">
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Link to="/payment">
          <img src={Payment} alt="" className="payment" />
        </Link>
      </div>
      <div className="main_reviews">
        <div className="first_block_review">
          <img className="firstflow" src={firstflow} alt="imageflower" />
          <h1>Reviews</h1>
          <div className="stars">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
            />
            <p>(3675)</p>
          </div>
          <div className="review_all">
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              showDots={false}
              infinite={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              arrows={false}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`comments ${index === 1 ? "short" : ""}`}
                >
                  <div
                    className="user_picture"
                    style={{ backgroundImage: `url(${review.image})` }}
                  ></div>
                  <div className="comment_review">
                    <div className="user-initials">{review.initials}</div>
                    <div className="user-text">
                      <h3>{review.name}</h3>
                      <h6>{review.date}</h6>
                      <p>{review.comment}</p>
                      <ReactStars
                        count={5}
                        value={review.rating}
                        onChange={ratingChanged}
                        size={24}
                        color2={"#ffd700"}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="carousel-arrows">
              <div onClick={() => carouselRef.current.previous()}>
                <CustomLeftArrow />
              </div>
              <button className="show_more">Show more reviews</button>
              <div onClick={() => carouselRef.current.next()}>
                <CustomRightArrow />
              </div>
            </div>
          </div>

          <img src={secondflow} alt="secondflowe" className="secondflow" />
        </div>

        <div className="video_block_review">
          <img src={thirdflow} alt="" className="thirdflow" />
          <h1>Great reactions guaranteed!</h1>
          <div className="video">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              arrows={true}
            >
              {items.map((item, index) => (
                <div key={index} className="carousel-item">
                  <img src={item.image} alt={item.title} />
                  <div className="carousel-caption">
                    <h3>{item.description}</h3>
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </Carousel>
            <div>
              <Link to="/personalize">
                <button className="video-button">Personalize book</button>
              </Link>
            </div>
          </div>
          <img src={fourthflow} alt="" className="fourthflow" />
        </div>

        <div className="info_us_about">
          <div className="book_info">
            <h1>
              <mark> +1500 books </mark>
            </h1>
            <h1>
              <mark>+5 </mark> countries
            </h1>
            <img src={mask} alt="masklogo" className="mask" />
          </div>
          <div className="trusted">
            <h1>
              We are trusted by more than <mark> 1000 parents </mark> from
              different <mark> parts of the world</mark>
            </h1>
            <h5>
              Millions of emotions collected <br /> from all over the world{" "}
              <br /> especially for you
            </h5>
            <img src={circlegreen} alt="" className="green-circle" />
          </div>
        </div>

        <div className="deliver_info">
          <h2>How to order</h2>
          <div className="info_about_creation">
            <div className="egg">
              <p>
                1 <br /> min
              </p>
            </div>
            <h3>to create a book on the site</h3>
          </div>
          <div className="info_about_creation">
            <div className="egg">
              <p>
                3 <br /> min
              </p>
            </div>
            <h3>for convenient payment of the order</h3>
          </div>
          <div className="info_about_creation">
            <div className="egg">
              <p>
                5-7 <br /> working <br /> days
              </p>
            </div>
            <h3>to produce your unique book</h3>
          </div>
          <div className="info_about_creation">
            <div className="egg">
              <p>
                3-8 <br /> day
              </p>
            </div>
            <h3>to deliver the parcel to your home</h3>
          </div>
        </div>
      </div>
      <Footer style={{ color: "white" }} />
    </div>
  );
}
