import React from "react";
import styles from "./Content.module.scss";
import Card from '../Card/Cards';
import data from '../../data/accommodations.json';
import Topbanner from "../Topbanner/Topbanner";
import image from "../../assets/images/homeban.png";
import Accommodation from "../Accommodation/Accommodation";

function Content() {
  const accommodations = data;


  return (
    <>
      <div className="home__banner">
        <Topbanner image={image} title="Chez vous, partout et ailleurs"/>
      </div>

      <div className="container">
        <div className={`card p-20 ${styles.contentCard}`}>
          <div className={styles.grid}>
            {accommodations.map((a) => (

              <Card key={a.id} id={a.id} title={a.title} cover={a.cover} />
            ))}
          </div>
        </div>
      </div>
      
      <Accommodation />
    </>
  );
}

export default Content;

