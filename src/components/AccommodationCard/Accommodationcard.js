import React, { useState } from 'react';
import styles from './AccommodationCard.module.scss';

function AccommodationCard({ title, textDescription, textEquipments }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };
  

  return (
    <div className={`${styles.card} card`}>
      <div className={`${styles.header} card-header`} onClick={toggleCard}>
        <h3>{title}</h3>
        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} ${styles.arrow} icon`}></i>
      </div>
      {isExpanded && (
        <div className={styles.content}>
          <p>{textDescription}</p>
          <ul>{textEquipments}</ul>
        </div>
      )}
    </div>
  );
}

export default AccommodationCard;
