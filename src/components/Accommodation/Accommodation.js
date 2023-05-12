import React from "react";

function Accommodation(props) {
  const { title, cover, location, tags, description, equipments } = props;

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