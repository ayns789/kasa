// Navbar.js
import { Link } from 'react-router-dom';
import './index.module.css';

export default function Navbar() {
  return (
    <header role='banner'>
      <a href='./'>
        <img src='../assets/logo_kasa.jpg' className='logo' alt='logo Kasa' />
      </a>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A propos</Link>
      </nav>
    </header>
  );
}
