import React from 'react'
import "../css/gallery.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Video from '../components/Video'
import gallery from "../data/Gallery.json"

import { motion } from "motion/react"

function Gallery() {

    const { headingOne, p1, p2, p3, reel, video, videoLast } = gallery
    return (
        <>
            <section className='gallery'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='navbar'>
                    <Navbar />
                </motion.div>


                <motion.main
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <div className='main-grid'>
                        <div className='small-img no-img-1'>
                            <img src='./gallery/g1.jpg' />
                        </div>

                        <div className='small-img no-img-2'>
                            <img src='./gallery/g1.jpg' />
                        </div>

                        <div className='big-img'>
                            <img src='./gallery/g4.jpg' />
                        </div>

                        <div className='small-img no-img-2'>
                            <img src='./gallery/g1.jpg' />
                        </div>

                        <div className='small-img no-img-1'>
                            <img src='./gallery/g1.jpg' />
                        </div>

                    </div>

                    <div className='gallery-heading'>
                        <h1>
                            <span className='txt-gradient'>{headingOne}</span>
                        </h1>

                        <p>{p1}</p>

                        <div className='gallery-btn'>
                            <Button text={"Book a Call"} icon={true} />
                        </div>
                    </div>


                    <div className='gallery-reel-container'>

                        <div className='reel-para'>
                            <motion.p
                                whileInView={{ y: 0, scale: 1.1 }}
                                initial={{ y: 50, scale: 0.8 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                {p2}
                            </motion.p>
                        </div>

                        <div className='gallery-reel' >

                            {
                                reel.map((video) => {
                                    return (
                                        <motion.div
                                            key={video.id}
                                            whileInView={{ y: 0, scale: 1 }}
                                            initial={{ y: 50, scale: 0.8 }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            viewport={{ once: false, amount: 0.2 }}
                                            className='gallery-reel-show'>
                                            <Video src={video.reel} />
                                        </motion.div>
                                    )
                                })
                            }

                        </div>


                    </div>


                    <div className='gallery-video-container'>

                        <div className='reel-para'>
                            <motion.p
                                whileInView={{ y: 0, scale: 1.1 }}
                                initial={{ y: 50, scale: 0.8 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}

                            >
                                {p3}
                            </motion.p>
                        </div>

                        <div className='gallery-video' >

                            {
                                video.map((video) => {
                                    return (
                                        <motion.div
                                            whileInView={{ y: 0, scale: 1 }}
                                            initial={{ y: 50, scale: 0.8 }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            viewport={{ once: false, amount: 0 }}
                                            key={video.id}
                                            className='gallery-video-show'>
                                            <Video src={video.video} />
                                        </motion.div>
                                    )
                                })
                            }

                        </div>

                        <div className='video-last'>
                            <motion.div
                                whileInView={{ y: 0, scale: 1 }}
                                initial={{ y: 50, scale: 0.8 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.1 }}
                                className='gallery-video-show'>
                                <Video src={videoLast} />
                            </motion.div>
                        </div>


                    </div>


                </motion.main>

                <Footer />
            </section >
        </>
    )
}

export default Gallery