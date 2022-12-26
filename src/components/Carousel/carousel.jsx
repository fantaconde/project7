import React from "react";
import LandingCard from "../landingcard/landingcard";

function CarouselCard({ imageSources }) {
  return (
    <div className="propertyCarousel">
      {imageSources.map((imageSource, id) => (
        <LandingCard key={id} image={imageSource} />
      ))}
    </div>
  );
}

export default CarouselCard;
