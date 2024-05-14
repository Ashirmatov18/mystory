import { useEffect, useState } from "react";

function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img)); // Создаем URL для загруженного изображения
    }
  };
  return (
    <div className="container">
      <input
        type="file"
        className="input-file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {imageUrl && (
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
      )}
    </div>
  );
}
export default ImageUploader;
