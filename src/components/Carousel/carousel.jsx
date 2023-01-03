import React, { useEffect, useState } from "react";
import "./carousel.css";

// Passing the image sources as props
function CarouselCard({ imageSources }) {
  // 
// current picture position
  const [currentIndex, setCurrentIndex] = useState(0);

  //Enable us to enable and disable the control buttons
  const [controlButton, setControlButton] = useState(true);

  useEffect(() => {

    // if there is only one image, disable the control buttons
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
            <div class="carousel-caption d-none d-md-block">
              <p>
                {/* Add +1 so that we adjust  the number  */}
                { currentIndex +1 }/{imageSources.length}
              </p>
            </div>
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

export default CarouselCard;
