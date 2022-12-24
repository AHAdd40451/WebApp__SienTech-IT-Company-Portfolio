/* eslint-disable no-unused-vars */
import React from "react";
import {
  Services,
  Headers,
  AboutUs,
  GraphicServices,
  Footer,
  FooterLast,
  WebProcess,
  Costumer,
  Boost,
} from "./container";
import { Navbar } from "./components";
// import { Navbar } from "./components";
import { Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./container/Work/scroolup";
import "./App.scss";
const App = () => (
  <div className="app">
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route
        path={"/"}
        element={
          <>
            <Headers />
            <AboutUs />
            <Services />
            <WebProcess />
            <Costumer />
          </>
        }
      />
      <Route path="/website" element={<Boost />} />
      <Route path="/graphic" element={<GraphicServices />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    <Footer />
    <FooterLast />
  </div>
);

{
  /* <Headers />
    <Services /> */
}

{
  /* <Skills />

    <Headers />
    <AboutUs />
    <Services />
    <GraphicServices />
    <Boost />
    <Work />
    <WebProcess />
    <Costumer />
    <Footer />
    <FooterLast /> */
}
export default App;
