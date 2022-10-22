// import * as React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import BannerImg from '../assets/imgBanner.jpg';
import styles from '../components/Card/index.module.css';
import Footer from '../components/Footer';
import { useContext, useEffect } from 'react';
import { LodgingContext } from '../components/Router/index.jsx';

const Home = () => {
  const lodgings = useContext(LodgingContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contentPage}>
      <Navbar />
      <Banner img={BannerImg} title='Chez vous, partout et ailleurs' />
      <div className={styles.container}>
        {lodgings.map((lodging) => (
          <Card key={lodging.id} cover={lodging.cover} id={lodging.id} title={lodging.title} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
