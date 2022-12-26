import React from "react";
import properties from "../../logements.json";
import CollapseComponent from "../../components/collapseComponent/collapse";
import "./propertyDetails.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Tags from "../../components/tags/tags";

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
    // console.log(params.key);
    //get the property from the json file
    const Property = properties.find((property) => property.id === params.key);
    // console.log(Property);

    //set the property value
    setHomeProperty(Property);

    //set the property equipments
    setEquipments(Property.equipments);
    //make the equpment a list of values
    const listItems = equipments.map((equipment, id) => (
      <li key={id}>{equipment}</li>
    ));
    //set the list of equipments
    setEquipmentsList(listItems);
    //set the host details
    setHost(Property.host);
    //set the rating
    setRating(Property.rating);
    //set Tags
    setTags(Property.tags);
    //set carousel images
    setCarouselImages(Property.pictures);
  }, [equipments, homeProperty, params.key]);

  return (
    <div className="propertyDetails">
      {/* <LandingCard /> */}
      {/* <CarouselCard imageSources={carouselImages} /> */}
      {
        // Display the property tags
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
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
      </div>
      <div className="propertyStackHost ">
        <div className="ratingStack ratingStack-sm">
          <div className="rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
        <div className="propertyHost">
          {host.name}
          <div>
            <img className="hostPicture" src={host.picture} alt="hostPicture" />
          </div>
        </div>
      </div>
      <div className="propertDescEquipment">
        <CollapseComponent
          title="Description"
          content={homeProperty.description}
        />

        <CollapseComponent title="Equipments" content={equipmentsList} />
      </div>
    </div>
  );
}
