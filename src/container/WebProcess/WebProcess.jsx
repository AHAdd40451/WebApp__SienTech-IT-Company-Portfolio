/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const styles = {
  services: {
    pt: ["80px", null, null, null, null, null, "140px"],
    ".service-card:nth-of-type(2)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)",
      },
    },
    ".service-card:nth-of-type(3)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)",
      },
    },
    ".service-card:nth-of-type(4)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)",
      },
    },
  },
  blockTitle: {
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridGap: ["30px", null, null, null, null, "50px"],
    gridTemplateColumns: [
      "2fr",
      null,
      null,
      "2fr 2fr",
      null,
      "2fr 2fr 2fr 2fr",
    ],
  },
  icon: {
    display: "flex",
    ml: "auto",
    mr: "auto",
    width: ["80px", null, null, "110px"],
    height: ["80px", null, null, "110px"],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ["20px", null, null, "40px"],
    backgroundImage:
      "linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)",
  },
  serviceCard: {
    textAlign: "center",
    h3: {
      margin: 0,
      fontSize: ["18px", null, null, 3],
      fontWeight: "bold",
      lineHeight: 1,
      color: "black",
      mt: ["30px", null, null],
      mb: ["20px", null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, "15px"],
      color: "heading_secondary",
      width: "100%",
      maxWidth: [null, null, null, null, "84%", "100%"],
      mx: [null, null, null, null, "auto", "0"],
    },
  },
};

const SERVICES_DATA = [
  {
    icon: images.featureImage1,
    title: "Explain Your Requirements",
    text: "Schedule a meeting to discuss your project requirements and vision with our team.",
  },
  {
    icon: images.featureImage2,
    title: "Design and Development",
    text: "Once the specifications are identified, the team starts developing the solution.",
  },
  {
    icon: images.featureImage3,
    title: "Quality Assurance",
    text: "After development and final review from the client, the team ensures that everything works just fine.",
  },
  {
    icon: images.featureImage4,
    title: "Project Launch",
    text: "Our team launches your brand-new site after all checks and revisions have cleared to ensure the highest standard.",
  },
];

const WebProcess = () => (
  <motion.div
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
  >
    <Box sx={styles.services}>
      <Container>
        <h2 className="head-text">
          <span> SienTech Working Proccess</span>
        </h2>
        <br />
        <br />

        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <img src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text className="p-text">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  </motion.div>
);
export default AppWrap(
  MotionWrap(WebProcess, "app__skills"),
  "skills",
  "app__primarybg"
);


// let graph = [
//   {
//     id: 1,
//     image: images.ecom,
//     title: "E-COMMERCE WEBSITE DEVELOPMENT",
//     li1: "Custom eCommerce Website Development is a compelling strategy for creating online shops. Besides, because of the recent pandemic, eCommerce stores are even more influential. With our Custom E-Commerce Website Development Services, you do not need to worry about your online business because you can count on our qualified web designers to provide you with high-quality eCommerce development services. Our front-end and back-end web developers are trained to wield the power of e-Commerce CMS in visual and graphic design. This lets us take the idea you have for your online store and turn it into a proficient, eye-catching E-commerce site",
//   },
//   {
//     id: 2,
//     image: images.cms,
//     title: "CONTENT MANAGEMENT SYSTEM (CMS) SERVICES",
//     li1: "A content management system (CMS) is an application that is used to handle web content, providing various contributors to create, edit and publish content. SienTech provides Content Management Systems (CMS) Services enabling you and your staff to easily manage your website from a user-friendly interface. Our CMS is designed to be user-friendly and tailored to fit the custom needs of your organization. If you want to edit the content of any page on your website, our Content Management System (CMS) will present a window where users can edit the web content and users can also preview the changes they prepared. After approving the changes, it will immediately come into view live on the user’s website.",
//     margin: "14rem",
//   },
//   {
//     id: 3,
//     image: images.portal,
//     title: "COMPLEX DYNAMIC PORTAL DEVELOPMENT",
//     li1: "We can offer an end-to-end Complex Dynamic Portal enabling services with creative web design elegance, combined with information of the newest technologies. Our process has been designed and proven to produce the greatest results in the shortest amount of time. These help to advance sales performance, increase client satisfaction and create marketing initiatives well-organized. Our Complex Dynamic Portal development, website development, web design, CMS and other services contain consulting and addition for portal-based solutions.",
//     margin: "13rem",
//     marginB: "10rem"

//   },
// ];
