import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import loadingGif from "../images/gif.gif";

function ImageUploader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("ru");
  const [gender, setGender] = useState("girl");
  const [imageLinks, setImageLinks] = useState([]);
  const [bookText, setBookText] = useState({});
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location.state) {
      navigate("/");
      return;
    }

    const { selectedImage, userName, language, gender, imageLinks, bookText } =
      location.state;

    setSelectedImage(selectedImage);
    setUserName(userName);
    setLanguage(language);
    setGender(gender);
    setImageLinks(imageLinks);
    setBookText(bookText);

    const uploadImage = async (img) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("face", img);
      const bookName = "encyclopedia_dino_boy_6_blond_white_1_eng";

      try {
        const response = await fetch(
          `https://v5-v6ovqwi4ya-el.a.run.app/swap?book=${bookName}`,
          {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Response data:", data);
          const pagesData = Object.keys(data).map(
            (key) => `data:image/jpeg;base64,${data[key]}`
          );
          setPages([...pagesData, ...imageLinks]);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedImage) {
      uploadImage(selectedImage);
    }
  }, [location, navigate]);

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
      {loading && (
        <img src={loadingGif} alt="Loading..." className="loading-gif" />
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
