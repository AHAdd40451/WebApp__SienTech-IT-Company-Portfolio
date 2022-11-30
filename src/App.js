/* eslint-disable no-unused-vars */
import React from 'react';
import { Services, Footer, Skills, Testimonial, Work, Headers, Boost, WebProcess, GraphicServices, Costumer, AboutUs, FooterLast } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    {/* <Skills /> */}

    <Navbar />
    <Headers />
    <AboutUs />
    <Services />
    <GraphicServices />
    <Boost />
    {/* <Work /> */}
    <WebProcess />
    <Costumer />
    <Footer />
    <FooterLast />

  </div>

);

export default App;
