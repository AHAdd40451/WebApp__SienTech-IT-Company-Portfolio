// src/component/Gallery.js
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import styled from "styled-components";
import { Heading, Box } from "theme-ui"
import { Navigate, Link } from "react-router-dom";
import { images } from "../../constants";


import("./slidert.css")


const sliderItems = [
  {
    id: 0,
    img: images.companySlider,
    title: "SienTech",
    desc: "Listening to you, and answering with software!",
  },
  {
    id: 1,
    img: images.faceGraphic,
    title: "Graphic Designing",
    desc: "DON'T COMPROMISE ON DESIGN! Connect With Your Customers, Not Just Your Business.",
  },
  {
    id: 2,
    img: images.banner,
    title: "Website Development",
    desc: `Build Your Website & Grow Your Business Online Smarter`,

  },
  
];
const styles = {
  image: {
    img: {
      display: "flex",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      Width: "100%",
      height: "100%",
    },
  },
}



const Slidert = () => {

  return (
    <Carousel  autoFocus  autoPlay  swipeScrollTolerance={100} preventMovementUntilSwipeScrollTolerance transitionTime={"3000"} interval={"3000"} showThumbs={false} infiniteLoop>
      {sliderItems?.map((item) => (
        <div className="container-slider" key={item.id}>
          <div className="container-img">
              <Box sx={styles.image}> <img src={item?.img} alt="head-sientech"  className="head-sc"/>
              </Box>
          </div>
          <div className="container-info">
            <h1 className="container-title">
            <span> {item?.title} </span></h1>

              <Heading className="head-text1">
              {item?.categories} 
              </Heading>
            <p className="container-desc">{item?.desc}</p>
          </div>
        </div>
      ))}
    </Carousel >

  )

}

export default Slidert


