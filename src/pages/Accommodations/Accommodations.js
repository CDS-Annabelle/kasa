import React from "react";
import accommodationsData from "../../data/accommodations.json";
import Accommodation from "../../components/Accommodation/Accommodation";

function Accommodations(props) {
  const { id } = props; // Récupérer l'ID du logement depuis les props du composant
  const accommodation = accommodationsData.find(a => a.id === parseInt(id)); // Trouve le logement correspondant dans le fichier accommodations.json

  if (!accommodation) { // Si aucun logement ne correspond à l'ID, afficher un message d'erreur
    return <div>Aucun logement trouvé pour l'ID {id}</div>;
  }

  return (
    <Accommodation
      title={accommodation.title}
      cover={accommodation.cover}
      location={accommodation.location}
      tags={accommodation.tags}
      description={accommodation.description}
      equipments={accommodation.equipments}
    />
  );
}

export default Accommodations;