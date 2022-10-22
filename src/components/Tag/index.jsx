import React from 'react';
import styles from './index.module.css';

const Tag = (props) => {
  return (
    <div className={styles.containerTag}>
      {props.tags.map((tag, index) => (
        <div key={index} className={styles.tag}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};
export default Tag;
