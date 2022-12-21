import React from "react";
import LandingCard from "../../components/landingcard/landingcard";
import properties from "../../logements.json";
import CollapseComponent from "../../components/collapseComponent/collapse";
import "./propertyDetails.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Tags from "../../components/tags/tags";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function PropertyDetails() {
  // Get property from url
  const params = useParams();

  const [homeProperty, setHomeProperty] = useState({});
  const [equipments, setEquipments] = useState([]);
  const [equipmentsList, setEquipmentsList] = useState([]);
  const [tags, setTags] = useState([]);
  const [host, setHost] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // console.log(params.key);
    //get the property from the json file
    const Property = properties.find((property) => property.id === params.key);
    console.log(Property);
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
  }, [equipments, homeProperty, params.key]);

  return (
    <div className="propertyDetails">
      <LandingCard />
      {
        // Display the property tags
      }
      <div className="property">
        <div className="propertyTitleLocation">
          <div className="propertyTitle">{homeProperty.title}</div>
          <div className="propertyLocation">{homeProperty.location}</div>
        </div>
        <div className="propertyHost">
          {host.name}
          <div>
            <img className="hostPicture" src={host.picture} alt="hostPicture" />
          </div>
        </div>
      </div>
      <div className="propertyTagsStack">
        <Tags tags={tags} />
        <Stack className="ratingStack" spacing={1}>
          <Rating
            className="rating"
            name="half-rating-read"
            value={parseInt(rating)}
            precision={0.5}
            readOnly
          />
        </Stack>
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
