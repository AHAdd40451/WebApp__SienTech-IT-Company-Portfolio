/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Sientech_ltd" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>

    </div>

    <div>
      <a href="https://www.facebook.com/profile.php?id=100088733316507&mibextid=LQQJ4d" target="_blank" rel="noreferrer">
        <FaFacebookF />

      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/groups/9275002" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
