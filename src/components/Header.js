import styles from "./Header.module.scss";
import logokasa from '../assets/images/logokasa.png';





function Header() {
 return (
  <header className={`${styles.header} d-flex flex-row align-items-center`}>
    <div className="flex-fill">
      <img src={logokasa} alt="logo Kasa" />
    </div>
    <div>
      <ul className="d-flex">
        <li className="mr-25">Accueil</li>
        <li>A propos</li>
      </ul>
    </div>
  </header>
 ) 
}

export default Header;