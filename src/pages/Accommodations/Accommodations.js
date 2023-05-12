import React from "react";
import accommodationsData from "../../data/accommodations.json";
import Accommodation from "../../components/Accommodation/Accommodation";
import { useParams } from "react-router-dom";

function Accommodations() {
  const { id } = useParams(); // Récupére l'ID du logement depuis les props du composant
  
  console.log(id);
  const property = accommodationsData.find(a => a.id === id);
  console.log(accommodationsData);
  console.log(property);// Trouve le logement correspondant dans le fichier accommodations.json

  if (!property) { // Si aucun logement ne correspond à l'ID, afficher un message d'erreur
    return <div>Aucun logement trouvé pour l'ID {id}</div>;
  }

  return (
    <Accommodation
      title={property.title}
      cover={property.cover}
      location={property.location}
      tags={property.tags}
      description={property.description}
      equipments={property.equipments}
    />
  );
}

export default Accommodations;