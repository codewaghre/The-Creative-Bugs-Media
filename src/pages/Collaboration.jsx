import React from 'react'
import '../css/collaboration.css'
import brands from '../data/Brand.json'
import Marquee from '../components/Marquee'
import { motion } from "motion/react"

function Collaboration() {
    const ourbrands = [...brands]

    return (
        <>

            <motion.div
                className='brand-container '
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 1, }}
                viewport={{ once: false }}
            >

                <Marquee images={ourbrands} from={0} to={"-100%"} />
                <Marquee images={ourbrands} from={"-100%"} to={0} />

            </motion.div>
        </>
    )
}

export default Collaboration