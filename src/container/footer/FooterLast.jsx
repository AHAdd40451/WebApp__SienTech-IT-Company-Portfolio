/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/newline-after-import */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { images } from '../../constants';

import('./FooterLast.css');

const FooterLast = () => (
  <div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4 className="main-heads">ScienTech IT</h4>
            <ul>
              <span className="rights">ScienTech IT Limited is a software firm that provides services such as websites, Graphic Designing among others</span>

            </ul>
          </div>
          <div className="footer-col">
            <h4>Usefull Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#aboutus">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Locations</h4>
            <ul>
              <li><img src={images.canada} alt="" className="canada" /><li className="flag-de">1003 , 46 Street NE , Calgary T3J0Y7, Alberta , Canada
              </li></li>
              <li><img src={images.pak} alt="" className="canada" /><li className="flag-de">L97 Sector 5M North Karachi,Pakistan
              </li></li>

            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><ImFacebook2 /></a>
              <a href="#"><BsTwitter /></a>
              <a href="#"><BsInstagram /></a>
              <a href="#"><BsLinkedin /></a>
            </div>
            <span className="rights">©ScienTech IT, Inc. All rights reserved.</span>

          </div>
        </div>

      </div>
    </footer>

  </div>
);

export default FooterLast;
