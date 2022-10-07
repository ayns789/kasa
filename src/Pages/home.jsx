// import * as React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import BannerImg from '../assets/imgBanner.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner img={BannerImg} title='Chez vous, partout et ailleurs' />
      {/* <h1>Home</h1> */}
    </div>
  );
};

export default Home;
