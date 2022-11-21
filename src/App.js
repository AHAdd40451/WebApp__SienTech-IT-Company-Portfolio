/* eslint-disable no-unused-vars */
import React from 'react';
import { About, Footer, Skills, Testimonial, Work, Headers, Boost, WebProcess, GraphicServices, Costumer } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Headers />
    <About />
    <Boost />
    <GraphicServices />
    <WebProcess />
    <Costumer />
    <Footer />
    {/* <Work /> */}
    {/* <Skills /> */}
    {/* <Testimonial /> */}

  </div>
);

export default App;
