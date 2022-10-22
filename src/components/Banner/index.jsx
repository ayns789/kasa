import React from 'react';
// import React, { useContext } from 'react';
// import { LodgingContext } from '../Router/routes';
import styles from './index.module.css';

const Banner = (props) => {
  // const lodgingState = useContext(LodgingContext);
  return (
    <div className={styles.banner}>
      <img className={styles.imgBanner} src={props.img} alt='banner' />
      <span className={styles.spanBanner}>{props.title}</span>
      {/* {lodgingState.map((e) => (
        <span>{e}</span>
      ))} */}
    </div>
  );
};

export default Banner;
