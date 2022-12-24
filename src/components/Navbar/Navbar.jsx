import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src="./SienTech.png" alt="" />
        </Link>
        <Link to="/" className="scientech">
          <h1>SienTech</h1>
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          
          <Link to="/">Home</Link>
        </li>
        <li className="app__flex p-text">
          
          <Link to="/about">About</Link>
        </li>
        <li className="app__flex p-text">
          
          <Link to="/services">Services</Link>
        </li>
        <li className="app__flex p-text">
          
          <Link to="/work">Contact Us</Link>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
         
                <ul className="app__navbar-links">
        <li >
          
          <Link to="/" onClick={() => setToggle(false)}>Home</Link>
        </li>
        <li >
          
          <Link to="/about" onClick={() => setToggle(false)}>About</Link>
        </li>
        <li >
          
          <Link to="/services" onClick={() => setToggle(false)}>Services</Link>
        </li>
        <li >
          
          <Link to="/work" onClick={() => setToggle(false)}>Contact Us</Link>
        </li>
      </ul>


           
          </motion.div>
        )}
      </div>
    </nav>
  );
};

   {/* <ul>
              {["home", "about", "services", "work", "skills", "contact"].map(
                (item) => (
                  <li key={item}>
                    <Link to={`/${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul> */}

export default Navbar;
