import React, { useState } from 'react';
import ChevronImg from '../../assets/chevron.png';
import styles from './index.module.css';

const SlideShow = (props) => {
  const [index, setIndex] = useState(0);
  const OnChange = (direction) => {
    if (direction === '+') {
      if (index < props.pictures.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    } else {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(props.pictures.length - 1);
      }
    }
  };

  return (
    <div className={styles.logementImg}>
      <img className={styles.carousel} src={props.pictures[index]} alt='carousel' />
      <span className={styles.btnReserverPrev}>
        <img
          className={styles.prev}
          src={ChevronImg}
          alt='précédent'
          onClick={() => OnChange('-')}
        />
      </span>
      <span className={styles.btnReserverNext}>
        <img className={styles.next} src={ChevronImg} alt='suivant' onClick={() => OnChange('+')} />
      </span>
      <span className={styles.countNumber}>
        <p>
          {index + 1}/{props.pictures.length}
        </p>
      </span>
    </div>
  );
};
export default SlideShow;
