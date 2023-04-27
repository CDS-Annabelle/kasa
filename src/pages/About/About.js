import React from 'react';
import styles from './About.module.scss';
import aboutban from '../../assets/images/aboutban.png';
import Aboutcard from '../../components/Aboutcard/Aboutcard';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutBanner}>
        <div className={styles.overlay}></div>
        <img src={aboutban} alt="About banner" className={styles.image} />
      </div>
      <div className={styles.cardContainer}>
        <Aboutcard title="Fiabilité" text="Text for Card 1" />
        <Aboutcard title="Respect" text="Text for Card 2" />
        <Aboutcard title="Service" text="Text for Card 3" />
        <Aboutcard title="Sécurité" text="Text for Card 4" />
      </div>
    </div>
  );
}

export default About;


