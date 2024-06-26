import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { getBookPageLinks, getBookText } from "../../booklinks";
import Footer from "../Footer";
import { Logo } from "../SvgImages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loadingGif from "../../images/gif.gif";
import Payment from "../../images/online-pay-svgrepo-com.svg";
import imageswap from "../../images/swapp.jpg";
import swapped from "../../images/swap.jpg";

function Personalize() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("ru");
  const [gender, setGender] = useState("girl");
  const [age, setAge] = useState(6);
  const [hairColor, setHairColor] = useState("blond");
  const [open, setOpen] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setSelectedImage(img);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(img);
    }
  };

  const handleNameChange = (event) => {
    const formattedName =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setUserName(formattedName);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(parseInt(event.target.value));
  };

  const handleHairColorChange = (color) => {
    setHairColor(color);
  };

  const handleGenerateBook = async () => {
    if (!selectedImage || !userName) {
      alert("Please upload an image and enter your name.");
      return;
    }

    setLoading(true);

    let ageGroup;
    if (age >= 4 && age <= 7) {
      ageGroup = 6;
    } else if (age >= 8 && age <= 11) {
      ageGroup = 10;
    } else if (age >= 12 && age <= 14) {
      ageGroup = 14;
    } else {
      alert("Please enter a valid age between 4 and 14.");
      setLoading(false);
      return;
    }

    const bookLanguage = language === "en" ? "eng" : "ru";
    console.log("Gender:", gender);
    console.log("Age Group:", ageGroup);
    console.log("Hair Color:", hairColor);
    console.log("Language:", bookLanguage);

    const bookPageLinks = getBookPageLinks(gender, ageGroup, hairColor);
    const bookText = getBookText(gender, language);

    const formData = new FormData();
    formData.append("face", selectedImage);

    const bookName = `encyclopedia_dino_${gender}_${ageGroup}_${hairColor}_white_1_${bookLanguage}`;
    console.log("Book Name:", bookName);

    try {
      const response = await fetch(
        `https://v5-v6ovqwi4ya-el.a.run.app/swap?book=${bookName}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
        const swappedPages = Object.keys(data).map((key) => {
          const base64Image = data[key];
          console.log("Base64 Image Data:", base64Image);
          return `data:image/jpeg;base64,${base64Image}`;
        });
        console.log("Swapped Pages:", swappedPages);
        navigate("/swapper", {
          state: {
            swappedPages,
            userName,
            language,
            gender,
            ageGroup,
            hairColor,
            bookPageLinks,
            bookText,
          },
        });
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="main_personalize">
      {loading && (
        <div className="loading-overlay">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
          <div className="loading">
            <p>l</p>
            <p>o</p>
            <p>a</p>
            <p>d</p>
            <p>i</p>
            <p>n</p>
            <p>g</p>
          </div>
        </div>
      )}
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
      <div className="how-it-works">
        <h2 className="how-it-works-title">HOW IT WORKS?</h2>
        <div className="how-it-works-steps">
          <div className="step">
            <div className="image-upload-container">
              <img src={imageswap} alt="Child" className="photo" />
              <div className="upload-box">
                <p>UPLOAD</p>
              </div>
            </div>
            <div className="step-content">
              <h3>1. Upload your photo. AI will draw your portrait.</h3>
              <p>
                Our AI makes the best out of any photo! Questions? See our photo
                guide.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="image-upload-container">
              <img src={swapped} alt="Child" className="photo" />
              <div className="upload-box">
                <p>REVIEW</p>
              </div>
            </div>
            <div className="step-content">
              <h3>2. Preview your artwork. 3 revisions</h3>
              <p>Preview, approve, or ask for edits.</p>
            </div>
          </div>
          <div className="step">
            <div className="image-upload-container">
              <img src={imageswap} alt="Child" className="photo-last" />
              <div className="upload-box">
                <p>UPLOAD</p>
              </div>
            </div>
            <div className="step-content">
              <h3>3. We ship it fast & free. Let the fun begin!</h3>
              <p>
                Get your camera ready for the greatest unboxing reaction. Happy
                smiles guaranteed!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="containerrr">
        <div className="upload-container">
          <p className="upload-text">UPLOAD YOUR PHOTO</p>
          <button className="upload-button" onClick={handleButtonClick}>
            CHOOSE IMAGE
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
          {previewImage && (
            <div className="image-preview">
              <img src={previewImage} alt="Selected" />
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={handleNameChange}
          className="input-name"
        />
        <select
          value={language}
          onChange={handleLanguageChange}
          className="styled-select"
        >
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
        <select
          value={gender}
          onChange={handleGenderChange}
          className="styled-select"
        >
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
        </select>
        <select
          value={age}
          onChange={handleAgeChange}
          className="styled-select"
        >
          {Array.from({ length: 11 }, (_, i) => i + 4).map((value) => (
            <option key={value} value={value}>
              {value} years old
            </option>
          ))}
        </select>
        <div className="hair-color-section">
          <h3>Choose your hair color</h3>
          <div className="hair-color-options">
            <button
              className={`hair-color-button ${
                hairColor === "blond" ? "selected" : ""
              }`}
              onClick={() => handleHairColorChange("blond")}
            >
              <div
                className="color-box"
                style={{ backgroundColor: "#f9e9a2" }}
              ></div>
              <span>Blond</span>
            </button>
            <button
              className={`hair-color-button ${
                hairColor === "brunette" ? "selected" : ""
              }`}
              onClick={() => handleHairColorChange("brunette")}
            >
              <div
                className="color-box"
                style={{ backgroundColor: "#000000" }}
              ></div>
              <span>Brunette</span>
            </button>
            <button
              className={`hair-color-button ${
                hairColor === "shaten" ? "selected" : ""
              }`}
              onClick={() => handleHairColorChange("shaten")}
            >
              <div
                className="color-box"
                style={{ backgroundColor: "#a87e68" }}
              ></div>
              <span>Shaten</span>
            </button>
          </div>
        </div>
        <button onClick={handleGenerateBook} className="generate-button">
          Generate Book
        </button>
      </div>

      <div className="info_aboutus">
        <div className="maininfocompany">
          <div className="info_us">
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
        </div>
      </div>
      <Footer style={{ backgroundColor: "black", color: "white" }} />
    </div>
  );
}

export default Personalize;
