import React, { useState } from "react";
import "../App.css";

function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(null);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [bookText, setBookText] = useState([]);

  const handleImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img));
      await uploadImage(img);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
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
    if (!imageUrl || !name) {
      alert("Please upload an image and enter your name.");
      return;
    }

    setLoading(true);

    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const img = new File([blob], "image.jpg", { type: blob.type });

    await uploadImage(img);

    const originalBookText = `
test    
    `;

    const bookPages = splitTextIntoPages(originalBookText, 9);
    setBookText(bookPages);
  };

  const splitTextIntoPages = (text, numPages) => {
    const words = text.split(" ");
    const wordsPerPage = Math.ceil(words.length / numPages);
    const pages = [];

    for (let i = 0; i < numPages; i++) {
      pages.push(
        words.slice(i * wordsPerPage, (i + 1) * wordsPerPage).join(" ")
      );
    }

    return pages;
  };

  const renderBook = () => {
    const bookSpreads = [];
    for (let i = 0; i < bookText.length; i += 2) {
      bookSpreads.push(
        <div key={i} className="book-container">
          <section className="open-book">
            <div className="book-spread">
              <div className="book-page">
                <div className="page-content">
                  <p>{bookText[i]}</p>
                </div>
                <div className="page-number">{i + 1}</div>
              </div>
              {i + 1 < bookText.length && (
                <div className="book-page">
                  <div className="page-content">
                    <p>{bookText[i + 1]}</p>
                  </div>
                  <div className="page-number">{i + 2}</div>
                </div>
              )}
            </div>
          </section>
        </div>
      );
    }
    return bookSpreads;
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
        value={name}
        onChange={handleNameChange}
        className="input-name"
      />
      <button onClick={handleGenerateBook} className="generate-button">
        Generate Book
      </button>
      {loading && <p>Loading...</p>}
      {pages.length > 0 ? (
        <div className="book-container">
          {pages.map((page, index) => (
            <div
              key={index}
              className={`book-page ${index === 0 ? "cover-page" : ""}`}
            >
              <img src={page} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </div>
      ) : (
        imageUrl &&
        !loading && (
          <div className="image-preview">
            <div
              className="image-half"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div
              className="image-half image-shadow"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          </div>
        )
      )}
      {bookText.length > 0 && renderBook()}
    </div>
  );
}

export default ImageUploader;
