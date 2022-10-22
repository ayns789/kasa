import React from 'react';
import styles from './index.module.css';
import StarOff from '../../assets/starOff.png';
import StarOn from '../../assets/starOn.png';

const Rating = (props) => {
  // retour d'une copie d'un tableau contenant 5 éléments,
  // un map dessus, un underscore pour sauter l'index 0,
  // et un "i" en argument pour l'index du tableau :
  return [...Array(5)].map((_, i) => {
    // un ternaire pour vérifier que si i est plus petit que le
    // nombre d'étoiles indiquées, parsées en nombre, alors on importe
    // l'image de l'étoile pleine, sinon on importe l'image de l'étoile vide :
    const star = i < Number(props.rating) ? StarOn : StarOff;
    // un retour en donnant en key l'index du tableau, une classe,
    // en src le résultat du ternaire
    return <img key={i} className={styles.star} src={star} alt='étoiles' />;
  });
};

export default Rating;
