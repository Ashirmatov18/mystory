import React, { useState } from "react";
import "../App.css";

function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(null);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img));
      await uploadImage(img);
    }
  };

  const uploadImage = async (img) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("face", img);
    const bookName = "Encyclopedia_girl_10_shaten";

    try {
      const response = await fetch(`/api/swap?book=${bookName}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const pagesData = Object.keys(data).map(
          (key) => `data:image/jpeg;base64,${data[key]}`
        );
        setPages(pagesData);
        setCurrentPage(0);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="containerr">
      <input
        type="file"
        className="input-file"
        accept="image/*"
        onChange={handleImageChange}
      />
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
    </div>
  );
}

export default ImageUploader;
