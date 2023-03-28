import React from 'react';
import styles from './index.module.css';
import Kasa from '../Logo/index.jsx';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentLogo}>
          <Kasa color='#fff' />
        </div>
        <div className={styles.footerContentCopyright}>
          <h3>© 2022 Kasa. All rights reserved</h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
