import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div >
          <div >
            <img src = {aboutImg} alt = "" />
          </div>
          <div>
            <h2>About BookHub</h2>
            <p>We are passionate about bringing stories and knowledge closer to everyone. Our platform offers a diverse collection of novels, academic resources, and bestselling books, all in one place. Whether you're reading for pleasure or learning something new, we make it easy to discover, explore, and enjoy your next favorite book anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About