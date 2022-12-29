import React from "react";
import LandingCard from "../../components/landingcard/landingcard";
import CollapseComponent from "../../components/aboutCollapse/aboutcollapse";
import image from "../../assets/about-banner.png";
import Footer from "../../components/footer/footer";
export default function About() {
  return (
    <div>
      <LandingCard image={image} />
      <CollapseComponent
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      />
      <CollapseComponent
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <CollapseComponent
        title="Service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <CollapseComponent
        title="Responsabilité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
      <Footer />
    </div>
  );
}
