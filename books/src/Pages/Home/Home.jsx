import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import FeaturedBooks from '../../Components/FeaturedBooks/FeaturedBooks';
import HomeFooter from '../../Components/HomeFooter/HomeFooter';
import About from '../About/About';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#about') {
      setIsAboutVisible(true);
    }
  }, [location.hash]);

  useEffect(() => {
    if (location.hash === '#about' && isAboutVisible) {
      requestAnimationFrame(() => {
        aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.hash, isAboutVisible]);

  return (
    <main className='home-page'>
      <Header />
      <FeaturedBooks />

      <div
        ref={aboutSectionRef}
        id='about-section'
        className={`about-reveal ${isAboutVisible ? 'is-visible' : ''}`}
        aria-hidden={!isAboutVisible}
      >
        <About />
      </div>

      <HomeFooter />
    </main>
  );
};

export default Home;