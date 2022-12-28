import React, { useState } from "react";

function CarouselCard2(imageSources ) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <button onClick={handlePrevClick} disabled={currentIndex === 0}>
        Previous
      </button>
      <img src={imageSources[currentIndex]} alt="Carousel" />
      <button
        onClick={handleNextClick}
        disabled={currentIndex === imageSources.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default CarouselCard2;
