/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/newline-after-import */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { images } from "../../constants";
import { Link } from "react-router-dom";

import("./FooterLast.css");

const FooterLast = () => (
  <div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4 className="main-heads">SienTech</h4>
            <ul>
              <span className="rights">
                SienTech Limited is a software firm that provides services such
                as websites, Graphic Designing among others
              </span>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Usefull Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Locations</h4>
            <ul>
              <img src={images.canada} alt="" className="canada" />
              <li className="flag-de">
                1003 , 46 Street NE , Calgary T3J0Y7, Alberta , Canada
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="/">
                <ImFacebook2 />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
              <a href="#">
                <BsLinkedin />
              </a>
            </div>
            <span className="rights">©SienTech, Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default FooterLast;