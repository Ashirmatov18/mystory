import React, { useState } from "react";
import "./Reviews.css";
import ReactStars from "react-stars";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Reviews() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  return (
    <div className="mainn">
      <div className="main_reviews">
        <div className="first_block_review">
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
            <div className="photo_review">
              <div className="comments">
                <div className="user_picture"></div>
                <div className="circle"></div>
                <div className="comment_review">
                  <h3>Klara L</h3>
                  <h6>1/2/2024</h6>
                  <p>
                    Thank you! Cool idea with butterflies, and special thanks to
                    you for the stickers 🌷🙌
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
              <div className="comments">
                <div className="user_picture"></div>
                <div className="circle"></div>
                <div className="comment_review">
                  <h3>Klara L</h3>
                  <h6>1/2/2024</h6>
                  <p>
                    Thank you! Cool idea with butterflies, and special thanks to
                    you for the stickers 🌷🙌
                  </p>
                </div>
              </div>
              <div className="comments">
                <div className="user_picture"></div>
                <div className="circle"></div>
                <div className="comment_review">
                  <h3>Klara L</h3>
                  <h6>1/2/2024</h6>
                  <p>
                    Thank you! Cool idea with butterflies, and special thanks to
                    you for the stickers 🌷🙌
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
              <div className="comments">
                <div className="user_picture"></div>
                <div className="circle"></div>
                <div className="comment_review">
                  <h3>Klara L</h3>
                  <h6>1/2/2024</h6>
                  <p>
                    Thank you! Cool idea with butterflies, and special thanks to
                    you for the stickers 🌷🙌
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="show_more">Show more reviews</button>
            </div>
          </div>
        </div>

        <div className="video_block_review">
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
              <button className="video-button">Personalize book</button>
            </div>
          </div>
        </div>

        <div className="info_us">
          <div className="book_info">
            <h1>+1500 books</h1>
            <h1>+5 countries</h1>
          </div>
          <div className="trusted">
            <h1>
              We are trusted by more than 1000 parents from different parts of
              the world
            </h1>
            <h5>
              Millions of emotions collected <br /> from all over the world{" "}
              <br /> especially for you
            </h5>
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
    </div>
  );
}
