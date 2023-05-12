import React from "react";
import data from '../../data/accommodations.json';

function Accommodation(props) {
  const { match } = props;
  const id = match?.params?.id;
  const accommodation = data.find((a) => a.id === parseInt(id));

  if (!accommodation) {
    return <div>Accommodation not found</div>;
  }

  const { title, cover, location, tags, description, equipments } = accommodation;

  return (
    <div>
      <h1>{title}</h1>
      <img src={cover} alt={title} />
      <p>{location}</p>
      <p>{tags}</p>
      <div>
        <h2>Description</h2>
        <p>{description}</p>
      </div>
      <div>
        <h2>Equipements</h2>
        <p>{equipments}</p>
      </div>
    </div>
  );
}

export default Accommodation;