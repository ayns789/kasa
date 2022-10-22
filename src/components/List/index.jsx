import React from 'react';
import styles from './index.module.css';

const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.list.map((string, index) => (
        <li key={index} className={styles.listString}>
          {string}
        </li>
      ))}
    </ul>
  );
};

export default List;
