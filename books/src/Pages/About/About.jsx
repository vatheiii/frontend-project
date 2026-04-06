import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title about-heading'>
          <h2>About</h2>
          <p>Building an accessible, enjoyable reading journey for every curious mind.</p>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "Stack of books on a table" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About ZLIBARY</h2>
            <p>We are passionate about bringing stories and knowledge closer to everyone. Our platform offers a diverse collection of novels, academic resources, and bestselling books, all in one place. Whether you're reading for pleasure or learning something new, we make it easy to discover, explore, and enjoy your next favorite book anytime, anywhere.</p>
            <div className='about-stats'>
              <div>
                <span>20K+</span>
                <p>Titles discovered monthly</p>
              </div>
              <div>
                <span>120+</span>
                <p>Genres and topics explored</p>
              </div>
              <div>
                <span>24/7</span>
                <p>Search and discover experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;