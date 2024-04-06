import React, { useState } from "react";
import "./StarSlider.css";
import { FaStar } from "react-icons/fa";

const StarSlider = ({ numberOfStars = 5 }) => {
  const [starNumber, setStarsNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  function handleClickStar(currentStar) {
    setStarsNumber(currentStar);
  }

  function handleEnterStart(currentStar) {
    setHoverStar(currentStar);
  }

  function handleLeaveStar() {
    setHoverStar(starNumber);
  }

  return (
    <div className="star-slider" id="starSlider">
      <h2>4.Star Slider</h2>
      {[...Array(numberOfStars)].map((_, i) => {
        i++;
        return (
          <FaStar
            className={i <= hoverStar ? "star yellow" : "star"}
            key={i}
            onClick={() => handleClickStar(i)}
            onMouseEnter={() => handleEnterStart(i)}
            onMouseLeave={handleLeaveStar}
          />
        );
      })}
    </div>
  );
};

export default StarSlider;
