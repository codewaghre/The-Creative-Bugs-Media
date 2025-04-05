
import React from 'react'
import "../css/framervideo.css"


import { motion } from "motion/react"


function FrameVideo() {


    return (
        <>
            <motion.section
                className='video'
                whileInView={{ y: 0, scale: 1 }}
                initial={{ y: 50, scale: 0.8 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className='video-container'>
                    <video
                        src='./video/video-two.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />
                </div>
            </motion.section>
        </>

    )
}

export default FrameVideo