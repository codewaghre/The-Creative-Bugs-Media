import React from 'react'
import "../css/bookCall.css"

import Heading from '../components/Heading'
import CalendlyWidget from '../components/CalendlyWidget'

import { motion } from "motion/react"

function CallUs() {
    return (
        <section className='call'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className='call-heading'
            >
                <Heading textOne={"Connect"} textTwo={"with Us"} />
            </motion.div>


            <motion.div
                whileInView={{ y: 0, scale: 1 }}
                initial={{ y: 50, scale: 0.8 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className='calendly-container'
            >
                <CalendlyWidget />
            </motion.div>



        </section>
    )
}

export default CallUs