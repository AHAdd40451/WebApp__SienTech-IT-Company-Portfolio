/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/AHAdd40451" target="_blank" rel="noreferrer">
      <div>
        <BsTwitter />
      </div>
    </a>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
