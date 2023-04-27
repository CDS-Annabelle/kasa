import React, { useState } from 'react';
import styles from './Aboutcard.module.scss';

function AboutCard({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

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
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default AboutCard;

