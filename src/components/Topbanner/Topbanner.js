import React from "react";
import styles from "./Topbanner.module.scss";

const Topbanner = ({ image, title }) => {
  return (
    <div className={styles.banner}>
      <img src={image} alt="" className={styles.banner__img} />
      <div className={styles.banner__overlay}>
        <div className={styles.banner__text}>{title}</div>
      </div>
    </div>
  );
};

export default Topbanner;