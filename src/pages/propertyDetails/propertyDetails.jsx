import React from "react";
import properties from "../../logements.json";
import CollapseComponent from "../../components/propertyCollapse/collapse";
import "./propertyDetails.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Tags from "../../components/tags/tags";
import CarouselCard from "../../components/Carousel/carousel";
import Footer from "../../components/footer/footer";

export default function PropertyDetails() {

  // Get property from url
  const params = useParams();

  const [homeProperty, setHomeProperty] = useState({});
  const [equipments, setEquipments] = useState([]);
  const [equipmentsList, setEquipmentsList] = useState([]);
  const [tags, setTags] = useState([]);
  const [host, setHost] = useState({});
  const [rating, setRating] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    // console.log(params.id);
    //get the property from the json file

    //Find if the property exists
  
    const Property = properties.find((property) => property.id === params.id);
    // Redirect to error page if property not found
    if (!Property) {
      window.location.href = "/error";
    }
    // console.log(Property);

    //set the property value
    setHomeProperty(Property);

    //set the property equipments
    setEquipments(Property.equipments);
    //make the equpment a list of values

    const listItems = equipments.map((equipment, id) => (
      <li key={id} style={{listStyleType: "none"}}>{equipment}</li>
    ));
  //set the list of equipments
    setEquipmentsList(listItems);

    // set the rating stars
    setRating(Property.rating);

    //set the host details
    setHost(Property.host);

    //set Tags
    setTags(Property.tags);

    //set carousel images
    setCarouselImages(Property.pictures);
    console.log(carouselImages[0]);
  }, [carouselImages, equipments, homeProperty, params.id]);

  return (
    <div className="propertyDetails">
      {
        // Displaying the carousel
        <CarouselCard imageSources={carouselImages} />
      }
      <div className="property">
        <div className="propertyTitleLocation">
          {/* Display the title */}
          <div className="propertyTitle">{homeProperty.title}</div>
          {/* Display Location */}
          <div className="propertyLocation">{homeProperty.location}</div>
        </div>
        <div className="propertyHost propertyHost-xm">
          {/* Displaying the host Name from host */}
          {host.name}
          <div>
            {/* Displaying the host pictuire from host */}
            <img className="hostPicture" src={host.picture} alt="hostPicture" />
          </div>
        </div>
      </div>
      <div className="propertyTagsStack">
        {/* displaying tags */}
        <Tags tags={tags} />

        <div className="ratingStack ratingStack-xm">
          <div className="rating">
            {/* Generate the number of stars with a rating */}
            {Array.from({ length: rating }, (_, i) => (
              // Generating a list of  stars
              <span key={i} className="fa fa-star checked"></span>
            ))}
            {/* Generat ethe number of stars without a rating */}
            {Array.from({ length: 5 - rating }, (_, i) => (
              <span key={i} className="fa fa-star unchecked"></span>
            ))}
          </div>
        </div>


      </div>
      <div className="propertyStackHost ">
        <div className="ratingStack ratingStack-sm">
          <div className="rating">
            {/* Generate the number of stars with a rating */}
            {Array.from({ length: rating }, (_, i) => (
              <span key={i} className="fa fa-star checked"></span>
            ))}
            {/* Generat ethe number of stars without a rating */}
            {Array.from({ length: 5 - rating }, (_, i) => (
              <span key={i} className="fa fa-star"></span>
            ))}
          </div>
        </div>
        <div className="propertyHost">
          {host.name}
          <div>
            <img className="hostPicture" src={host.picture} alt="hostPicture" />
          </div>
        </div>
      </div>

        {/* Passng the description */}
      <div className="collapseComponents">
        <CollapseComponent
          title="Description"
          content={homeProperty.description}
        />
        {/* Passing the Equipment list component */}
        <CollapseComponent title="Equipments" content={equipmentsList} />
      </div>
      <Footer />
    </div>
  );
}
