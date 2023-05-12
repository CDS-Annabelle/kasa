import React from "react";
import styles from "./Content.module.scss";
import Card from '../Card/Cards';
import data from '../../data/accommodations.json';
import Topbanner from "../Topbanner/Topbanner";
import image from "../../assets/images/homeban.png";
import { Link } from "react-router-dom";
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
             <Link key={a.id} to={`/accommodations/${a.id}`}>
              <Card title={a.title} cover={a.cover} />
            </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Accommodation />
    </>
  );
}

export default Content;

