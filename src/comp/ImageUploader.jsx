import React, { useState } from "react";
import "../App.css";
import { getBookLinks, getBookText } from "../booklinks";
import loadingif from "../images/gif.gif";

function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(null);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [language, setLanguage] = useState("ru");
  const [gender, setGender] = useState("girl");

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img));
      setSelectedImage(img);
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

  const uploadImage = async (img) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("face", img);
    const bookName = "encyclopedia_dino_girl_6_shaten_white_1_ru";

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
        const pagesData = Object.keys(data).map(
          (key) => `data:image/jpeg;base64,${data[key]}`
        );
        setPages(pagesData);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateBook = async () => {
    if (!selectedImage || !userName) {
      alert("Please upload an image and enter your name.");
      return;
    }

    setLoading(true);

    await uploadImage(selectedImage);

    const imageLinks = getBookLinks(gender, language);
    setPages((prevPages) => [...prevPages, ...imageLinks]);

    setLoading(false);
  };

  const bookText = getBookText(gender, language);

  const getBookTextWithUserName = (pageText) => {
    if (!pageText) return null;
    const formattedText = pageText.replace(
      /{name}/g,
      `${userName.charAt(0).toUpperCase() + userName.slice(1)}`
    );
    return formattedText
      .split("<!--split-->")
      .map((paragraph, index, array) => (
        <React.Fragment key={index}>
          <p>{paragraph.trim()}</p>
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ));
  };

  return (
    <div className="containerr">
      <input
        type="file"
        className="input-file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleNameChange}
        className="input-name"
      />
      <select value={language} onChange={handleLanguageChange}>
        <option value="ru">Russian</option>
        <option value="en">English</option>
      </select>
      <select value={gender} onChange={handleGenderChange}>
        <option value="boy">Boy</option>
        <option value="girl">Girl</option>
      </select>
      <button onClick={handleGenerateBook} className="generate-button">
        Generate Book
      </button>
      {loading && (
        <img src={loadingif} alt="Loading..." className="loading-gif" />
      )}

      {pages.length > 0 && (
        <>
          <div className="book-container">
            <section className="open-book">
              <div className="book-spread">
                <div className="book-page full-page-image">
                  <img src={pages[0]} alt="Page 1" />
                </div>
                <div className="book-page full-page-image">
                  <img src={pages[3]} alt="Page 2" />
                </div>
              </div>
            </section>
          </div>
          <div className="book-container">
            <section className="open-book">
              <div className="book-spread">
                <div className="book-page">
                  <div className="page-content">
                    <h2 className="title">The beginning of the journey</h2>
                    {getBookTextWithUserName(bookText.page3)}
                  </div>
                </div>
                <div className="book-page">
                  <div className="half-page">
                    <img
                      src={pages[4]}
                      alt="Page 4"
                      className="half-page-image secondimage"
                    />
                    <div className="half-page-text fourthtext">
                      {getBookTextWithUserName(bookText.page4)}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="book-container">
            <section className="open-book">
              <div className="book-spread">
                <div className="book-page">
                  <div className="half-page">
                    <div className="half-page-text">
                      {getBookTextWithUserName(bookText.page5)}
                    </div>
                    <img
                      src={pages[5]}
                      alt="Page 5"
                      className="half-page-image fiveimg"
                    />
                  </div>
                </div>
                <div className="book-page">
                  <div className="half-page">
                    <div className="half-page-text">
                      {getBookTextWithUserName(bookText.page6)}
                    </div>
                    <img
                      src={pages[1]}
                      alt="Page 6"
                      className="half-page-image"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="book-container">
            <section className="open-book">
              <div className="book-spread">
                <div className="book-page">
                  <div className="half-page">
                    <div className="half-page-text-30">
                      {getBookTextWithUserName(bookText.page7)}
                    </div>
                    <img
                      src={pages[6]}
                      alt="Page 7"
                      className="large-page-image"
                    />
                  </div>
                </div>
                <div className="book-page">
                  <div className="half-page">
                    <div className="half-page-text">
                      {getBookTextWithUserName(bookText.page8)}
                    </div>
                    <img
                      src={pages[7]}
                      alt="Page 8"
                      className="half-page-image sevenimg"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="book-container">
            <section className="open-book">
              <div className="book-spread">
                <div className="book-page full-page-image">
                  <img src={pages[8]} alt="Page 9" />
                </div>
                <div className="book-page full-page-image">
                  <img src={pages[9]} alt="Page 10" />
                </div>
              </div>
            </section>
          </div>
          <div className="book-container">
            <section className="open-book">
              <div className="book-spread">
                <div className="book-page">
                  <div className="half-page">
                    <div className="half-page-text">
                      {getBookTextWithUserName(bookText.page11)}
                    </div>
                    <img
                      src={pages[2]}
                      alt="Page 11"
                      className="half-page-image elevenimg"
                    />
                  </div>
                </div>
                <div className="book-page full-page-image">
                  <img src={pages[10]} alt="Page 12" />
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default ImageUploader;
