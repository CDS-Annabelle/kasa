import React from "react";

function Accommodation(props) {
  const {location, tags, name, rating } = props;

  return (
    <div>
      <p>{location}</p>
      <p>{tags}</p>
      <p>{name}</p>
      <p>{rating}</p>

    </div>
  );
}

export default Accommodation;