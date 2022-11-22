/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';

import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from '../Header/Images';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';

import { images } from '../../constants';

// import('./Boost.css');

const styles = {
    boostAgencies: {
        pt: ['70px', null, null, '80px', '120px', null, '130px'],
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: ['column', null, null, 'row-reverse'],
    },
    col: {
        flex: ['0 0 100%', null, null, '0 0 50%'],
    },
    image: {
        mt: ['25px', null, null, '0'],
        display: 'flex',
        marginLeft: ['0', null, null, null, 'auto'],
        marginRight: ['0', null, null, null, 'auto'],
        height: ['400px', null, null, '400px'],
        position: 'relative',
        top: [null, null, null, '-20px', '-45px', 'auto'],
        overflow: 'hidden',
        mixBlendMode: 'darken',
        maxWidth: ['100%', null, null, null, null, null, 'none'],
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        ml: ['25px', null, null, '0'],
        mb: ['10px'],
        mt: ['30px'],
        li: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ['flex-start', null, null, null, null, 'flex-start'],
            fontSize: [1, null, 2, null, '18px'],
            lineHeight: [2.56],
            svg: {
                width: [17, null, null, 23],
                height: [17, null, null, 23],
                color: 'blue',
                borderRadius: '50%',
                marginRight: ['10px'],
            },
        },
    },
    titleBox: {
        textAlign: ['center', null, null, 'left'],
        h3: {
            color: 'black',
            fontSize: [5, null, null, '21px', '36px', '32px', 8],
            lineHeight: [1.6, null, null, '1.5'],
            fontWeight: 'bold',
            letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
        },
        // p: {
        //     fontSize: [0, null, 2, null, '20px'],
        //     color: 'text_secondary',
        //     opacity: '',
        //     lineHeight: ['26px', null, null, 1.8, null, 2.06],
        //     padding: ['0 20px', null, null, '0'],
        //     mt: ['15px'],
        // },
    },
    link: {
        color: 'primary',
        fontSize: [1, null, 2],
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        pl: ['30px', null, null, '4px', null, '4px'],
        mt: ['5px', null, null, null, '10px'],
        svg: {
            position: 'relative',
            top: '3px',
        },
    },
    content: {
        width: '100%',
        textAlign: ['left', null, null, null, 'left'],
        pt: [null, null, null, null, null, '100px'],
        pl: [null, null, null, null, null, '60px', '140px'],
    },
};

const GraphicServices = () => (

    <Box sx={styles.boostAgencies} id="app__works">
        <Container>
            <Box sx={styles.row}>
                <Flex sx={styles.col}>
                    <Image src={images.graph} sx={styles.image} alt="" />
                </Flex>

                <Flex sx={styles.col}>
                    <Box sx={styles.content}>
                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text"><span>Graphic Designing</span></h2>

                                <br />
                                <br />
                                <br />

                                <h2 className="head-text">Our Design Chemistry For <span>Your Business Success.</span></h2>
                                <br />
                                <br />

                                <Text as="p" className="p-text">
                                    If you are worried about your new business then no need to worry because ScienTech IT has ways out for all of your problems. Our Graphic Designers experienced in addressing internet marketing answers, website design and any kind of challenges related to graphic designing can assist you to overcome these problems. ScienTech IT.com is a full service and faculties graphic designing services in Pakistan, focuses on solving visual branding problems for small and big companies because we set our passions into practice to make modern websites and graphic design with full online Internet marketing tactics.
                                </Text>
                            </motion.div>
                        </Box>
                        <Box as="ul" sx={styles.list}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    LOGO DESIGN
                                </Text>
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    BUSINESS CARD DESIGN
                                </Text>
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    BROCHURES & FLYERS DESIGNING
                                </Text>
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    WEB DESIGN (UX/UI)
                                </Text>

                            </motion.div>
                        </Box>

                    </Box>
                </Flex>


            </Box>

            <br />
            <br />
            <br />
            <br />
            <br />



            <Box sx={styles.row}>
                <Flex sx={styles.col}>
                    <Image src={images.logoD} sx={styles.image} alt="" />
                </Flex>


                <Flex sx={styles.col}>
                    <Box sx={styles.content}>

                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text"><span>LOGO DESIGN</span></h2>
                                <br />
                                <br />

                                <Text as="p" className="p-text">
                                    A logo is the visual identity of your brand. If not composed accurately, it may leave reservations in the minds of viewers. It has to be striking, attractive, and something that pierces through the viewer's mind.
                                </Text>


                                <Text as="p" className="p-text">
                                    Our team of skilled graphic designers understands the need to deliver inspiring logos, helping to create an impact on the viewers about your brand.
                                </Text>
                                <Text as="p" className="p-text">
                                    We have been designing logos and brand identities for many reputed companies, and we can help you too.
                                </Text>

                            </motion.div>

                        </Box>


                    </Box>
                </Flex>

            </Box>


            <br />
            <br />
            <br />
            <br />
            <br />








            <Box sx={styles.row}>
                <Flex sx={styles.col}>
                    <Image src={images.Brochers} sx={styles.image} alt="" />
                </Flex>


                <Flex sx={styles.col}>
                    <Box sx={styles.content}>

                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text"><span>BROCHURES & FLYERS DESIGNING
                                </span></h2>
                                <br />
                                <br />

                                <Text as="p" className="p-text">
                                    Brochures and flyers are cost-efficient marketing means, but aren't they just so confusing? Although complicated yet very important, we can help you design them. We offer brochures and flyer designs services faster and at reasonable prices. Our designs are appealing and spot-on to attract viewers. We have got the skills to combine your digital and print marketing necessities and create impactful marketing campaigns.
                                </Text>


                            </motion.div>

                        </Box>


                    </Box>
                </Flex>

            </Box>


            <br />
            <br />
            <br />
            <br />
            <br />

            <Box sx={styles.row}>
                <Flex sx={styles.col}>
                    <Image src={images.uiux} sx={styles.image} alt="" />
                </Flex>


                <Flex sx={styles.col}>
                    <Box sx={styles.content}>

                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text"><span>
                                    WEB DESIGN (UX/UI)</span></h2>
                                <br />
                                <br />

                                <Text as="p" className="p-text">
                                    From B2B to B2C websites, ScienTech IT Limited renders characteristic web, UI, and UX design services that are pixel perfect and use a responsive design approach to make it appealing, dynamic, and stand out from your competitors. Our website design services in addition to our Web development can help you get greater brand engagement, boost more revenue, and get higher conversions.    </Text>

                            </motion.div>
                        </Box>


                    </Box>
                </Flex>



            </Box>


            <br />
            <br />
            <br />
            <br />
            <br />



        </Container>
    </Box>
);

export default AppWrap(
    MotionWrap(GraphicServices, 'app__works'),
    'work',
);
