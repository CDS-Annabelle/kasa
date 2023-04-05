import styles from "./Header.module.scss";
import logokasa from '../assets/images/logokasa.png';





function Header() {
 return (
  <header className={styles.header}>
   <div>
      <img src={ logokasa } alt="logo Kasa" />
    </div>
    <ul>
      <li>Accueil</li>
      <li>A propos</li>
    </ul>
    
    </header>
 ) 
}

export default Header;