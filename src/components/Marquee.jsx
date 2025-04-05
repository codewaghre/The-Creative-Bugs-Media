import React from 'react'


import { motion } from "motion/react"

function Marquee({ images, from, to }) {
    return (
        <>
            <div className='brands MyGradient'>

                <motion.div
                    className='brand-one'
                    initial={{ x: `${from}` }}
                    animate={{ x: `${to}` }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {
                        images.map((brand, index) => <img className='brand-img' key={brand.id} src={brand.brand} />)
                    }
                </motion.div>

                <motion.div
                    className='brand-one'
                    initial={{ x: `${from}` }}
                    animate={{ x: `${to}` }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {
                        images.map((brand, index) => <img className='brand-img' key={brand.id} src={brand.brand} />)
                    }
                </motion.div>
            </div>
        </>
    )
}

export default Marquee