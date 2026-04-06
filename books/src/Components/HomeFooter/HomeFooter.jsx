import React from 'react';
import { FaDiscord, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import './HomeFooter.css';

const HomeFooter = () => {
  return (
    <footer className='home-footer' id='home-footer'>
      <div className='container'>
        <div className='home-footer-card'>
          <div className='home-footer-copy'>
            <p className='home-footer-kicker'>Contact &amp; Connect</p>
            <h2>Join our reading community</h2>
          </div>

          <div className='home-footer-divider' aria-hidden='true'></div>

          <div className='home-footer-actions'>
            <div className='home-footer-icons' aria-label='Social media links'>
              <a href='https://www.instagram.com' target='_blank' rel='noreferrer' className='home-footer-icon' aria-label='Instagram' title='Instagram'>
                <FaInstagram />
              </a>
              <a href='https://www.facebook.com' target='_blank' rel='noreferrer' className='home-footer-icon' aria-label='Facebook' title='Facebook'>
                <FaFacebookF />
              </a>
              <a href='https://x.com' target='_blank' rel='noreferrer' className='home-footer-icon' aria-label='X' title='X'>
                <FaXTwitter />
              </a>
              <a href='https://discord.com' target='_blank' rel='noreferrer' className='home-footer-icon' aria-label='Discord' title='Discord'>
                <FaDiscord />
              </a>
            </div>

            <div className='home-footer-meta'>
              <a href='mailto:hello@zlibary.com'>hello@zlibary.com</a>
              <span>© 2026 Zlibary. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
