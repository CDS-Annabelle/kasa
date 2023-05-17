import React from "react";

function Accommodation(props) {
  const { title, cover, location, tags, name, rating } = props;

  return (
    <div>
      <img src={cover} alt={title} />
      <p>{location}</p>
      <p>{tags}</p>
      <p>{name}</p>
      <p>{rating}</p>

    </div>
  );
}

export default Accommodation;