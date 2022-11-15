import React from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import NavBar from '../components/NavBar/NavBar';
import SupportedPlatforms from '../components/SupportedPlatforms/SupportedPlatforms';
import Inspiration from '../components/Inspiration/Inspiration';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <Jumbotron />
        <SupportedPlatforms />
        <Inspiration />
        <About />
        <Footer />
      </main>
    </>
  )
}

export default Home;
