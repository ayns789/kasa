import React, { useState } from 'react';
import styles from './index.module.css';
import '../Lodging/index.module.css';
import './index.module.css';
import DropdownImg from '../../assets/chevronBas.png';

const Dropdown = (props) => {
  Dropdown.defaultProps = { open: false };
  const [open, setOpen] = useState(props.open);
  // const params = useParams();

  return (
    <div
      className={`${
        props.page === 'lodging' ? `  ${styles.dropdownLittle}` : `${styles.dropdown}`
      }`}
    >
      <div className={`${open && styles.active}`} onClick={() => setOpen(!open)}>
        {/* <div className={styles.dropdownContent}> */}
        <div
          className={`${
            props.page === 'lodging' ? `${styles.dropdownContent2}` : `${styles.dropdownContent}`
          }`}
        >
          <div className={styles.title}>{props?.title}</div>
          <img src={DropdownImg} className={`${styles.active} ${styles.chevronBas}`} alt='Title' />
        </div>
      </div>
      {open && (
        <div
          className={`${
            props.page === 'lodging'
              ? `${styles.dropdownDescription2}`
              : `${styles.dropdownDescription}`
          }`}
        >
          {props?.description}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
