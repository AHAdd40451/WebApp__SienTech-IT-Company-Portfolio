import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Helmet } from "react-helmet-async";
import("./AboutUs.css");

const AboutUs = () => (
  <>
    <Helmet>
      <title>SienTech</title>
      <meta name="description" content="Established on 2022, SienTech is began as an Software company that
        provided technical and programming expertise services to companies. We
        give you a wide scope of new advances and technology. We have encountered
        and worked with them, and we have a mastery of the Web." />
      <link rel="canonical" href="/about" />
    </Helmet>
    <div className="About_container" id="about">
      <h1 className="main-head">About Us</h1>

      <h2 className="head-text1">
        <span> Providing the simplest solution for the most complex problem</span>
      </h2>

      <p className="about-para ">
        Established on 2022, SienTech is began as an Software company that
        provided technical and programming expertise services to companies. We
        give you a wide scope of new advances and technology. We have encountered
        and worked with them, and we have a mastery of the Web.
        Design/Development, Graphics Designing, and a few other things. Although
        the company has yet to reach a start in operations its already poised to
        become one of the leading figures in the information technology industry
        in the near future With The Hard Work of Talented Developer The company
        will continue to do so in the years to come.
      </p>
    </div>
  </>

);
export default AppWrap(
  MotionWrap(AboutUs, "app__about"),
  "about",
  "app__whitebg"
);
