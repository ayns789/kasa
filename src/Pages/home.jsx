// import * as React from 'react';
import Banner from '../components/Banner/index.jsx';
import Card from '../components/Card/index.jsx';
import BannerImg from '../assets/imgBanner.jpg';
import styles from '../components/Card/index.module.css';
import { useContext, useEffect } from 'react';
import { LodgingContext } from '../components/Router/index.jsx';

const Home = () => {
  const lodgings = useContext(LodgingContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (lodgings.length <= 0 || !lodgings) {
    return <progress></progress>;
  }

  return (
    <div className={styles.contentPage}>
      <Banner img={BannerImg} title='Chez vous, partout et ailleurs' />
      <div className={styles.container}>
        {lodgings.map((lodging) => (
          <Card key={lodging.id} cover={lodging.cover} id={lodging.id} title={lodging.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
