/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';


const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);



  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm('service_v9fhsmw', 'template_vy5t9pn', form.current, 'hRumW46UfwWKjwG4u')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        setIsFormSubmitted(true);

      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed ');
      });
    e.target.reset();
  };


  return (
    <>
      <h2 className="head-text">Take a coffee & chat with Us</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="ahadkhan40451@gmail.com" className="p-text">ahadkhan40451@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+923168990880</a>
        </div>
      </div>
      {!isFormSubmitted ? (

        <div className="app__footer-form app__flex">
          <form ref={form} onSubmit={sendEmail}>
            <div className="app__flex">
              <input className="p-text" type="name" placeholder="Your Name" name="name" required />
              <input className="p-text" type="email" placeholder="Your Email" name="email" required />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>
            <button type="submit" className="p-text" onClick={sendEmail}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </form>

        </div>

      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>

      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
