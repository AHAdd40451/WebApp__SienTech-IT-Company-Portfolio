/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import Image from './Images';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const styles = {
  banner: {
    pt: ['110px', null, null, null, '150px', '200px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    overflow: 'hidden',
  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0',
  },
  content: {
    h3: {
      color: 'black',
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: '3.6rem',
      fontFamily: 'ubuntu',
    },
    p: {
      fontSize: [1, null, null, 2, null, 5],
      lineHeight: ['26px', null, null, null, 2.33],
      color: 'black',
      mb: ['20px', null, null, null, null, '30px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '410px'],
      br: {
        display: ['none', null, null, null, 'inherit'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
    },
  },
  image: {
    img: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, 'none'],
      height: 'auto',
    },
  },
  partner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px'],
    },
    img: {
      display: 'flex',
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
};
// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };
const Headers = () => (

  <Box sx={styles.banner} id="banner">
    <Container sx={styles.container}>
      <Grid sx={styles.grid}>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={styles.content}>
            <Heading as="h3" className="head-text">
              Build Your Audience & Grow <span> Your Business Online Smarter  </span>
            </Heading>
            {/* <Text as="p">
              We help build and manage a team of world-class developers to bring
              your vision to life.
            </Text> */}
            {/* <Text as="p">
              Great Website & Design is built with Amazing Developers.
            </Text>
            <Text as="p">
              We will turn your idea in the successful business model framework.
            </Text>
            <Text as="p">
              We believe in the power of elegant minimalism in a world increasingly saturated with garish colour.
            </Text> */}

          </Box>
        </motion.div>
        <Box sx={styles.image}>
          <Image src={images.banner} alt="" />
        </Box>

      </Grid>

    </Container>
  </Box>

);

export default AppWrap(Headers, 'home');
