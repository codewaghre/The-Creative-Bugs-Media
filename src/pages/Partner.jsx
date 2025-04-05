import React, { useEffect, useState } from 'react'
import '../css/partner.css'

import { BlurhashCanvas } from "react-blurhash";
import { motion } from "motion/react"

import Heading from '../components/Heading'
import partner from "../data/Partner.json"


function Partner() {

    const [imageLoaded, setImageLoaded] = useState(false);
    const blurHash = "L02iCHIU00.8IAayx]s:IUxuxtIU"

    const { headingOne, headingTwo, topCards, bottomCards, imageOne, imageTwo } = partner

    return (
        <section className='partner'>
            <div className='partner-container'>
                <div className='partner-left'>
                    <div className='vector'>
                        <img src='./icon/vector-one.png' />
                    </div>
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: false }}
                        className='partner-heading'>
                        <Heading textOne={headingOne} textTwo={headingTwo} />
                    </motion.div>

                    <div className='partner-card-container'>

                        <div className='partner-top-card'>
                            {
                                topCards.map((card) => {
                                    const animateFromRight = card.id % 2 === 0;
                                    return (
                                        <motion.div
                                            key={card.id}
                                            whileInView={{ x: 0, scale: 1 }}
                                            initial={{ x: animateFromRight ? 100 : -100, scale: 0.8 }}
                                            transition={{ duration: 1.1, ease: "easeOut" }}
                                            viewport={{ once: false }}

                                            className='card-container'>
                                            <div className='card-heading'>
                                                <div className='card-icon'>
                                                    <img src={card.svg} />
                                                </div>
                                                <h2>
                                                    {card.h2}
                                                </h2>
                                            </div>

                                            <p>
                                                {card.p}
                                            </p>
                                        </motion.div>

                                    )
                                })
                            }

                        </div>

                        <div className='partner-bottom-card'>

                            {bottomCards.map((card) => {
                                const animateFromRight = card.id % 2 === 0;
                                return (
                                    <motion.div
                                        key={card.id}
                                        whileInView={{ x: 0, scale: 1 }}
                                        initial={{ x: animateFromRight ? 100 : -100, scale: 0.8 }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        viewport={{ once: false }}
                                        className='card-container'
                                    >
                                        <div className='card-heading'>
                                            <div className='card-icon'>
                                                <img src={card.svg} />
                                            </div>
                                            <h2>
                                                {card.h2}
                                            </h2>
                                        </div>

                                        <p>
                                            {card.p}
                                        </p>
                                    </motion.div>
                                )
                            })}

                        </div>
                    </div>
                </div>

                <div className='partner-right'>
                    <div className='parnter-top-img'>
                        <motion.div
                            whileInView={{ x: 0, scale: 1 }}
                            initial={{ y: 50, scale: 0.8 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false }}
                            className='partner-img'
                            style={{ position: 'relative' }}>

                            {!imageLoaded && (
                                <BlurhashCanvas
                                    hash={blurHash}
                                    style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100%" }}
                                />
                            )}
                            <img
                                className='partner-img-one'
                                src={imageOne}
                                alt='camera image'
                                loading='lazy'
                                onLoad={() => setImageLoaded(true)}
                                style={{
                                    opacity: imageLoaded ? 1 : 0,
                                    transition: 'opacity 0.5s ease-in-out',
                                }}
                            />
                        </motion.div>
                    </div>

                    <div className='partner-bottom-img'>
                        <motion.div
                            whileInView={{ x: 0, scale: 1 }}
                            initial={{ y: 50, scale: 0.8 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: false }}
                            className='partner-img'
                            style={{ position: 'relative' }}>
                            {!imageLoaded && (
                                <BlurhashCanvas
                                    hash={blurHash}
                                    style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100%" }}
                                />
                            )}
                            <img
                                className='partner-img-two'
                                src={imageTwo}
                                alt='camera image'
                                loading='lazy'
                                onLoad={() => setImageLoaded(true)}
                                style={{
                                    opacity: imageLoaded ? 1 : 0,
                                    transition: 'opacity 0.5s ease-in-out',
                                }}
                            />
                        </motion.div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Partner