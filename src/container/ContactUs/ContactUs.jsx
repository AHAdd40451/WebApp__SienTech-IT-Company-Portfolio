
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { runFireworks } from "./fireworks";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import SocialMedia from "../../components/SocialMedia";

import "./ContactUs.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_v9fhsmw",
        "template_vy5t9pn",
        form.current,
        "hRumW46UfwWKjwG4u"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed ");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with Us</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="sientechit@gmail.com" className="cellno">
            sientechit@gmail.com
          </a>

        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="phone" />
          <a href="https://wa.me/message/KH4S6YBC5AFVF1" className="cellno">
            +13065517847
          </a>

        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form ref={form} onSubmit={sendEmail}>
            <div className="app__flex">
              <input
                className="cellno"
                type="name"
                placeholder="Your Name"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="cellno emailC"
                required
              />
            </div>
            <div>
              <textarea
                className="cellno"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>
            <button type="submit" className="" onClick={sendEmail}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
            {runFireworks()}
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(ContactUs, "app__footer"),
  "contact",
  "app__whitebg"
);
