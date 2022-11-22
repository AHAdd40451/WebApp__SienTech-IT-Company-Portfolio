/* eslint-disable no-unused-vars */
import React from 'react';
import { About, Footer, Skills, Testimonial, Work, Headers, Boost, WebProcess, GraphicServices, Costumer } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    {/* <Work /> */}
    {/* <Skills /> */}
    {/* <Testimonial /> */}
    <Navbar />
    <Headers />
    <About />
    <GraphicServices />
    <Boost />
    <WebProcess />
    <Costumer />
    <Footer />

  </div>

);

export default App;
