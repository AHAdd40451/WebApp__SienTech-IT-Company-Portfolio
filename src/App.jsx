/* eslint-disable no-unused-vars */
import React from "react";
import {
  Services,
  AboutUs,
  GraphicServices,
  Footer,
  ContactUs,
  WebDevelopment,
} from "./container";
import Home from "./pages/Home"
import { Navbar, Slidert } from "./components";
// import { Navbar } from "./components";
import { Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./container/Work/scroolup";
import "./App.scss";

const App = () => (

  <div className="app">

    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/website" element={<WebDevelopment />} />
      <Route path="/graphic" element={<GraphicServices />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <ContactUs />
    <Footer />
  </div>
);

export default App;
