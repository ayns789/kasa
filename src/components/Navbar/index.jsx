// Navbar.js
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import LogoImg from '../../assets/logo_kasa.jpg';

export default function Navbar() {
  return (
    <header className={styles.nav} role='banner'>
      <Link to='/'>
        <img src={LogoImg} className={styles.navLogo} alt='logo Kasa' />
      </Link>
      <nav>
        <Link to='/' className={styles.navLink}>
          Accueil
        </Link>
        <Link to='/about' className={styles.navLink}>
          A propos
        </Link>
      </nav>
    </header>
  );
}
