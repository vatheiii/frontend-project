import React from 'react';
import {
  FaBookOpen,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact-page'>
      <div className='container'>
        <div className='section-title contact-heading'>
          <h2>Contact</h2>
          <p className='contact-heading-subtitle'>
            We are here to help you discover, explore, and enjoy more books.
          </p>
          <span className='section-divider' aria-hidden='true'></span>
        </div>

        <div className='contact-wrapper grid'>
          <div className='contact-card'>
            <h3>Send us a message</h3>
            <p className='contact-subtext'>
              We would love to hear from you. Share feedback, ideas, or support requests!
            </p>

            <form className='contact-form'>
              <label htmlFor='name'>Name <span className='required-mark'>*</span></label>
              <input id='name' name='name' type='text' placeholder='Enter your full name' required />

              <label htmlFor='email'>Email <span className='required-mark'>*</span></label>
              <input id='email' name='email' type='email' placeholder='Enter your email address' required />

              <label htmlFor='message'>Message <span className='required-mark'>*</span></label>
              <textarea id='message' name='message' rows='5' placeholder='Tell us how we can help you...' required />

              <button type='button' className='contact-submit'>
                Send Message
              </button>
            </form>
          </div>

          <aside className='contact-side'>
            <div className='contact-info-card'>
              <h4>Contact Details</h4>
              <p>
                <FaMapMarkerAlt /> Hermann-Milde-Str. 67, West Lilianaburg, ST 89583
              </p>
              <p>
                <FaPhoneAlt /> <a href='tel:+4917650201761'>+49 17650201761</a>
              </p>
              <p>
                <FaEnvelope /> <a href='mailto:readsbooksgermany@zlibary.com'>readsbooksgermany@zlibary.com</a>
              </p>
            </div>

            <div className='contact-info-card'>
              <h4>Quick Info</h4>
              <div className='quick-info-list'>
                <div className='quick-info-item'>
                  <FaClock />
                  <div>
                    <strong>Response time</strong>
                    <span>Usually within 24 hours</span>
                  </div>
                </div>
                <div className='quick-info-item'>
                  <FaBookOpen />
                  <div>
                    <strong>Support focus</strong>
                    <span>Books, search, and account help</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className='contact-bottom-strip'>
        <div className='container'>
          <p>Need quick help? Reach us any time. We are always building a better reading experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
