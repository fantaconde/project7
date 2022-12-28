import React, { useEffect, useState } from "react";

function CarouselCard2({ imageSources }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [controlButton, setControlButton] = useState(true);

  useEffect(() => {
    if (imageSources.length <= 1) {
      setControlButton(false);
    } else {
      setControlButton(true);
    }
  }, [controlButton, imageSources.length]);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="carouselImages">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageSources[currentIndex]} alt="First slide" />
          </div>
        </div>
        {controlButton && (
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className="carousel-control-prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
        )}

        {controlButton && (
          <button
            className="carousel-control-next"
            onClick={handleNextClick}
            disabled={currentIndex === imageSources.length - 1}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        )}
      </div>
    </div>
  );
}

export default CarouselCard2;
