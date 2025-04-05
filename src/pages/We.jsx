import React from 'react'
import '../css/we.css'

import Heading from '../components/Heading'
import about from '../data/About.json'

import { Link } from 'react-router-dom';
import { motion } from "motion/react"

function We() {

    const { headingOne, headingTwo, image, card } = about
    const { links, p, h1 } = card
    return (
        <>
            <section className='we'>
                <motion.div
                    className='we-heading'
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false }}
                >
                    <Heading textOne={headingOne} textTwo={headingTwo} />
                </motion.div>

                <div className='we-container'>
                    <div className='about' >
                        <div className='about-us'>
                            <motion.p
                                whileInView={{ y: 0, scale: 1 }}
                                initial={{ y: 70, }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {p}
                            </motion.p>

                            <motion.h1
                                whileInView={{ y: 0, scale: 1 }}
                                initial={{ y: 50, }}
                                transition={{ duration: 1.7, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                            >{h1}</motion.h1>

                            <motion.div
                                whileInView={{ y: 0, scale: 1 }}
                                initial={{ y: 50, }}
                                transition={{ duration: 1.9, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                                className='socials'>
                                {
                                    links.map((link) => {
                                        return (
                                            <Link key={link.id} to={link.link} target='blank'>
                                                {link.name}
                                            </Link>
                                        )
                                    })
                                }
                            </motion.div>


                        </div>
                    </div>

                    <motion.div
                        whileInView={{ y: -80, }}
                        initial={{ y: 50, }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='we-img-container'
                    >
                        <div className='we-img'>
                            <img src={image} />
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default We