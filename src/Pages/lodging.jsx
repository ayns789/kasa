import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import RenderLodging from '../components/Lodging';
import Redirection from '../components/Redirection';
import { useContext } from 'react';
import { LodgingContext } from '../components/Router/index.jsx';

const Lodging = () => {
  // scroll de la page sera en haut au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* get les datas json */
  const params = useParams();
  const lodgings = useContext(LodgingContext);

  // pour récupérer la data et la garder en mémoire pour rechargement, si id identique
  // il ne s'exécutera pas
  const lodging = useMemo(
    () => lodgings.find((appt) => appt.id === params.id),
    [lodgings, params.id]
  );

  // pour patienter le chargement des data au chargement du module et éviter un bug
  if (lodgings.length <= 0 || !lodgings) {
    // progress bar <Loader />
    return <progress></progress>;
  }
  //  Check si le logement existe, si le composant est chargé et a donc créé un array,
  // si lodgings a pris des valeurs, redirection vers la page 404 si ca n'est le cas
  if (Array.isArray(lodgings) && lodgings.length > 0 && !lodging) {
    return <Redirection />;
  }

  return <RenderLodging lodging={lodging} />;
};

export default Lodging;
