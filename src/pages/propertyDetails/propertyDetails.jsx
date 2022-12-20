import React from "react";
import LandingCard from "../../components/landingcard/landingcard";
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
    const listItems = equipments.map((equipment, key) => <li key={equipment.id}>{equipment}</li>);
    //set the list of equipments
    setEquipmentsList(listItems);
    // console.log(homeProperty.equipments);
    //set Tags
    setTags(Property.tags);
  }, [equipments, homeProperty, params.key]);

  return (
    <div className="propertyDetails">
      <LandingCard />
      {
        // Display the property tags
      }
      <CollapseComponent
        title="Description"
        content={homeProperty.description}
      />

      <CollapseComponent title="Equipments" content={equipmentsList} />
        <Tags tags={tags} />
    </div>
  );
}
