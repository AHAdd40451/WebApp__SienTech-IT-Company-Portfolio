/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-tag-spacing */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Services.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Link } from "react-router-dom";

const Services = () => {
  let data = [
    {
      id: 1,
      href: "/graphic",
      title: "Graphic Designing",
      img: images.g,
      desc: "The best digital designers team up together to bring you creative,beautiful and engaging designs.",
      btn: "Learn More",
    },
    {
      id: 2,
      href: "/website",
      title: "Website Development",
      img: images.w,
      desc: " We have the best Web development professional team to achieve what the rest can not.",
      btn: "Learn More",
    },
  ];

  return (
    <div className="services_container" id="services">
      <h2 className="head-text">
        We Know that <span>Good Services</span> <br />
        means <span>Good Business</span>
      </h2>
      <br />
      <h3 className="head-text2">Grow your startup with our Services</h3>

      <div className="app__profiles">
        {/* {abouts.map((about, index) => ( */}
        {data.map((item) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={item.id}
          >
            <Link to={item.href}>
              <img src={item.img} />
            </Link>

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p
              className="p-text"
              style={{ marginTop: 10, textDecoration: "none" }}
            >
              {item.desc}
            </p>
            <Link to={item.href} className="button">
              {item.btn}
            </Link>
          </motion.div>
        ))}

        {/* <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <a href="#web">
            <img src={images.w} />
          </a>

          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Website Development
          </h2>
          <p className="p-text" style={{ marginTop: 10, height: 5 }}>
            We have the best Web development professional team to achieve what
            the rest can not.
          </p>
          <a href="#web" className="button">
            Learn More
          </a>
        </motion.div> */}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Services, "app__services"),
  "services",
  "app__whitebg"
);

// export default Services;
