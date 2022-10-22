import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className={styles.cardContent}>
      <Link to={`/lodging/${props?.id}`}>
        <h3 className={styles.cardTitle}>{props?.title}</h3>
        <img src={props?.cover} className={styles.cardImg} alt='appartement' />
      </Link>
    </div>
  );
};

export default Card;
