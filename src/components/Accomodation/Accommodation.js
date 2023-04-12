import styles from './Accommodation.module.scss';

function Accommodation({title, cover}) {
  return (
      <div className={styles.cardContainer}>
        <img className={styles.imageCard} src={cover} alt={title} />
        <span className={styles.accommodationTitle}>{title}</span>
      </div>
  );
}

export default Accommodation;