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
        height: ['400px', null, null, 'auto'],
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
        //     fontSize: ['1rem'],
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

const Boost = () => (

    <Box sx={styles.boostAgencies}>
        <Container>
            <Box sx={styles.row}>
                <Flex sx={styles.col}>
                    <Image src={images.booster} sx={styles.image} alt="" />
                </Flex>

                <Flex sx={styles.col}>
                    <Box sx={styles.content}>
                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text"><span> Web Development</span></h2>


                                <br />
                                <br />
                                <br />


                                <h2 className="head-text">Boost your Website by<span> choosing Ninja Developers</span></h2>
                                <br />
                                <br />

                                <Text as="p" className="p-text">
                                    Create websites that drive traffic, leads, and conversions in the most prominent web development languages like Node.js, Redux,Vue,Angular,Javascript,and React and eCommerce platforms like Magento, WooCommerce, and Shopify.
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
                                    Get your portfolio website
                                </Text>
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    Responsive web development
                                </Text>
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    Ecommerce website development
                                </Text>
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    Magento web development
                                </Text>
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    CMS development
                                </Text>
                                <Text as="li">
                                    <IoIosCheckmarkCircle />
                                    Website maintenance
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
                    <Image src={images.ecom} sx={styles.image} alt="" />
                </Flex>


                <Flex sx={styles.col}>
                    <Box sx={styles.content}>

                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text"><span>E-COMMERCE WEBSITE DEVELOPMENT</span></h2>
                                <br />
                                <br />

                                <Text as="p" className="p-text">
                                    Custom eCommerce Website Development is a compelling strategy for creating online shops. Besides, because of the recent pandemic, eCommerce stores are even more influential.</Text>

                                <Text as="p" className="p-text">
                                    With our Custom E-Commerce Website Development Services, you do not need to worry about your online business because you can count on our qualified web designers to provide you with high-quality eCommerce development services.</Text>

                                <Text as="p" className="p-text">
                                    Our front-end and back-end web developers are trained to wield the power of e-Commerce CMS in visual and graphic design. This lets us take the idea you have for your online store and turn it into a proficient, eye-catching E-commerce site.   </Text>

                                <Text as="p" className="p-text">
                                    When it comes to designing your online store you can leave it to our E-commerce customization professionals. Not only will this give you the look you want, but will also offer you the quality you need to turn those visitors into consumers.    </Text>

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
                    <Image src={images.cms} sx={styles.image} alt="" />
                </Flex>


                <Flex sx={styles.col}>
                    <Box sx={styles.content}>

                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text"><span> CONTENT MANAGEMENT SYSTEM (CMS) SERVICES</span></h2>
                                <br />
                                <br />

                                <Text as="p" className="p-text">
                                    A content management system (CMS) is an application that is used to handle web content, providing various contributors to create, edit and publish content.
                                </Text>

                                <Text as="p" className="p-text">
                                    ScienTech IT provides Content Management Systems (CMS) Services enabling you and your staff to easily manage your website from a user-friendly interface.
                                </Text>

                                <Text as="p" className="p-text">
                                    Our CMS is designed to be user-friendly and tailored to fit the custom needs of your organization.
                                </Text>

                                <Text as="p" className="p-text">
                                    Our Content Management System Services aids the user to refurbish a website without any knowledge of web languages and Web development tools. We produce a panel where the user can choose a chore and get it done easily.
                                </Text>
                                <Text as="p" className="p-text">
                                    If you want to edit the content of any page on your website, our Content Management System (CMS) will present a window where users can edit the web content and users can also preview the changes they prepared. After approving the changes, it will immediately come into view live on the user’s website.
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
                    <Image src={images.portal} sx={styles.image} alt="" />
                </Flex>
                <Flex sx={styles.col}>
                    <Box sx={styles.content}>

                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text"><span>  COMPLEX DYNAMIC PORTAL DEVELOPMENT</span></h2>
                                <br />
                                <br />

                                <Text as="p" className="p-text">
                                    We can offer an end-to-end Complex Dynamic Portal enabling services with creative web design elegance, combined with information of the newest technologies.
                                </Text>

                                <Text as="p" className="p-text">
                                    Our process has been designed and proven to produce the greatest results in the shortest amount of time. These help to advance sales performance, increase client satisfaction and create marketing initiatives well-organized. </Text>

                                <Text as="p" className="p-text">
                                    Our Complex Dynamic Portal development, website development, web design, CMS and other services contain consulting and addition for portal-based solutions.  </Text>

                            </motion.div>

                        </Box>


                    </Box>
                </Flex>


            </Box>



        </Container>
    </Box>
);

export default AppWrap(
    MotionWrap(Boost, 'app__works'),
    'work',
);
