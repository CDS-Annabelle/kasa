import React from "react";
import styles from "./Content.module.scss";
import Card from '../Card/Cards';
import data from '../../data/accommodations.json';

function Content() {
  const accommodations = data;

  return (
    <>
      <div className={`d-flex banner my-30 light ${styles.banner}`}>
        <h1 className={styles.bannerTitle}>Chez vous, partout et ailleurs</h1>
      </div>

      <div className="container">
        <div className={`card p-20 ${styles.contentCard}`}>
          <div className={styles.grid}>
            {accommodations.map((a) => (
              <Card key={a.id} title={a.title} cover={a.cover} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

