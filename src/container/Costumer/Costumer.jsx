/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Box, Container, Flex, Text } from 'theme-ui';
import { FaAngleRight } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from '../Header/Images';
import { AppWrap } from '../../wrapper';
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
        height: ['300px', null, null, 'auto'],
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
        p: {
            fontSize: ['1rem'],
            color: 'text_secondary',
            opacity: '',
            lineHeight: ['3rem'],
            padding: ['2rem'],
            mt: ['15px'],
        },
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

const Costumer = () => (

    <Box sx={styles.boostAgencies}>
        <Container>
            <Box sx={styles.row}>
                <Flex sx={styles.col}>
                    <Image src={images.cta} sx={styles.image} alt="" />
                </Flex>

                <Flex sx={styles.col}>
                    <Box sx={styles.content}>
                        <Box sx={styles.titleBox}>
                            <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="head-text">  Free Customer Support to ensure <span> what you like to expect</span></h2>

                                <Text as="p" className="p-text">
                                    We offer a risk-free trial period of up to two weeks. You will
                                    only have to pay if you are happy with the developer and wish to
                                    continue. If you are unsatisfied, we’ll refund payment or fix
                                    issues on our dime period customers.
                                </Text>
                                <Text as="p" sx={styles.specialText}>
                                    If you are happy with the developer and wish to continue. If you
                                    are unsatisfied, we’ll refund payment or fix issues.
                                </Text>
                                {/* <Link path="/" sx={styles.link}>
                                    Learn more <FaAngleRight />
                                </Link> */}
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
export default AppWrap(Costumer);

