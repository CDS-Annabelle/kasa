import styles from "./Header.module.scss";
import logokasa from '../../assets/images/logokasa.png';
import {Link} from 'react-router-dom';

function Header() {
 return (
  <header className={`${styles.header} d-flex flex-row align-items-center`}>
    <div className="flex-fill">
    <Link to="/"><img src={logokasa} alt="logo Kasa" /></Link>
    </div>
    <div>
    <ul className={styles.headerList}>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </ul>
    </div>
  </header>
 ) 
}

export default Header;