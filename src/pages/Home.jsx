import React, { useState } from 'react'

import '../css/home.css'
import homeData from "../data/Home.json"
import Navbar from '../components/Navbar'
import Button from '../components/Button'

import { BlurhashCanvas } from "react-blurhash";
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

function Home() {
    const [imageLoaded, setImageLoaded] = useState(false);

    const { homeHeadingOne, homeHeadingTwo, homeHeadingThree, description, hashImg, banner } = homeData
    const { hashimgone } = hashImg

    const blurHash = hashimgone

    return (
        <>
            <div className='hero'>
                <motion.div
                    className='navbar'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Navbar />
                </motion.div>

                {/* Home Page Banner  */}
                <motion.div
                    className='banner'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className='left'>

                        <div className='heading'>
                            <h1 className='txt-heading'>
                                {homeHeadingOne}<span className='txt-gradient'>{homeHeadingTwo}</span> {homeHeadingThree}
                            </h1>
                        </div>


                        <div className='left-para'>
                            <p>
                                {description}
                            </p>
                        </div>

                        {/* Contact Button */}
                        <div className='left-btn'>
                            <Link to={"/bookcall"}>
                                <Button text={"Book a Call"} icon={true} />
                            </Link>

                            <Link to={"/gallery"}>
                                <div className='small-device'>
                                    <Button text={"Our Impact  and Expertise's"} icon={true} />
                                </div>
                            </Link>
                        </div>
                    </div>


                    {/* Imgage Section */}
                    <div className='right'>
                        <div className='img' style={{ position: 'relative' }}>
                            {!imageLoaded && (
                                <BlurhashCanvas
                                    hash={blurHash}
                                    style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100%" }}
                                />
                            )}
                            <img
                                src={banner.imgtwo}
                                alt='camera with tripod'
                                className='camera-img'
                                loading='lazy'
                                onLoad={() => setImageLoaded(true)}
                                style={{
                                    opacity: imageLoaded ? 1 : 0,
                                    transition: 'opacity 0.5s ease-in-out',
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

            </div >
        </>
    )
}

export default Home