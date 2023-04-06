import styles from "./Content.module.scss";

function Content() {
  return (
    <>
    <div className={`d-flex banner my-30 light ${styles.banner}`}>
      <h1 className={styles.bannerTitle}>Chez vous, partout et ailleurs</h1>
    </div>

    <div className="flex-fill container p-20 my-30">
        <div className={`card p-20 ${styles.contentCard}`}>
          <div className={styles.grid}>
            <div className={styles.elem}>
              <div className={styles.textCard}>Titre de la location</div>
            </div>
            <div className={styles.elem}>
              <div className={styles.textCard}>Titre de la location</div>
            </div>
            <div className={styles.elem}>
              <div className={styles.textCard}>Titre de la location</div>
            </div>
            <div className={styles.elem}>
              <div className={styles.textCard}>Titre de la location</div>
            </div>
            <div className={styles.elem}>
              <div className={styles.textCard}>Titre de la location</div>
            </div>
            <div className={styles.elem}>
              <div className={styles.textCard}>Titre de la location</div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Content;