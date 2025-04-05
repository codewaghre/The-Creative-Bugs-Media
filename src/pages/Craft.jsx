import React, { useEffect, useState } from 'react'
import '../css/craft.css'


import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/fi";

import Heading from "../components/Heading"
import Video from '../components/Video';
import craft from '../data/Craft.json'


function Craft() {

    return (
        <>
            <section className='craft'>
                <motion.div

                    className='craft-heading'
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false }}
                >
                    <Heading textOne={craft[0].headingOne} textTwo={craft[0].headingTwo} />
                </motion.div>

                <div className='craft-container'>
                    <div className='craft-left'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            initial={{ opacity: 0, x: -50, scale: 0.8 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: false }}
                            className='craft-img'
                            style={{ position: 'relative' }}>
                            <img
                                src={craft[0].cameraImage}
                                loading='lazy'
                            />
                        </motion.div>
                    </div>

                    <div className='craft-right'>

                        <div className='craft-top'>

                            {
                                craft[0].craftReel.map((video) => {
                                    return (
                                        <motion.div
                                            key={video.id}
                                            className='craft-video'
                                            whileInView={{ y: 0, scale: 1 }}
                                            initial={{ y: 50, scale: 0.8 }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            viewport={{ once: false, amount: 0.2 }}
                                        >
                                            <Video src={video.reel} />
                                        </motion.div>
                                    )
                                })
                            }

                        </div>

                        <div className='craft-bottom'>
                            <div className='craft-link'>
                                <Link
                                    to={"/gallery"}
                                    className='creaft-see-more'>See more Creative work</Link>
                                <span>
                                    <FiArrowUpRight className='craft-icon' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Craft