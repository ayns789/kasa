// import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Error404/index.module.css';
import { useEffect } from 'react';

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={styles.errorContent}>
        <h1 className={styles.errorName}>404</h1>
        <p className={styles.errorParag}>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className={styles.errorRelink}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default Error;
