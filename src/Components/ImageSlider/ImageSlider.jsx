import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImage() {
    setLoading(true);

    try {
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  console.log(images);

  function handlePreviousImage() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleNextImage() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  function handleCurrentSlide(i) {
    setCurrentImage(i);
  }

  useEffect(() => {
    fetchImage(url, page, limit);
  }, [url]);

  if (loading)
    return <div className="container">Loading data ! Please wait...</div>;

  return (
    <div className="container" id="imageSlider">
      <h2>3.Image Slider</h2>
      {errorMsg ? (
        <div>Error occured ! {errorMsg}</div>
      ) : (
        <div className="box">
          <FaArrowLeft className="arrow-left" onClick={handlePreviousImage} />
          {images.map((image, i) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className={currentImage === i ? "image" : "image hide"}
            />
          ))}
          <FaArrowRight className="arrow-right" onClick={handleNextImage} />
          <div className="dotsImgSlider">
            {images.map((_, i) => (
              <div
                key={i}
                className={
                  currentImage === i ? "dotImgSlider active" : "dotImgSlider"
                }
                onClick={() => handleCurrentSlide(i)}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
