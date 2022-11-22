/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-tag-spacing */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">We Know that <span>Good Services</span> <br />means <span>Good Business</span></h2>
      <br />
      <h3 className="head-text2">Grow your startup with our Services</h3>

      <div className="app__profiles">
        {/* {abouts.map((about, index) => ( */}
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          <a href="#app__works">
            <img src={images.g} />
          </a>

          <h2 className="bold-text" style={{ marginTop: 20 }}>Graphic Designer</h2>
          <p className="p-text" style={{ marginTop: 10, textDecoration: 'none' }}>The best digital designers team up together to bring you creative, beautiful and engaging designs. We create excellence !</p>
          <a href="#app__works" className="button">Learn More</a>


          {/* <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p> */}

          {/* <a href="#a">Learn More</a> */}
        </motion.div>

        {/* ))} */}

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          <a href="#web">

            <img src={images.w} />
          </a>

          <h2 className="bold-text" style={{ marginTop: 20 }}>Website Development</h2>
          <p className="p-text" style={{ marginTop: 10 }}>We have the best Web development professional team to achieve what the rest can not.</p>
          <a href="#web" className="button">Learn More</a>

        </motion.div>
      </div >

    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);

