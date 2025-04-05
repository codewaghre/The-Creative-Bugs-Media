import React from 'react'
import '../css/footer.css'

import { motion } from "motion/react"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <motion.footer

                className='footer'>
                <div className='footer-line'></div>
                <div className='footer-container'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className='footer-link'>
                        <Link to={"/"} className='footer-line-s'>
                            Home
                        </Link>

                        <Link to={"/gallery"} className='footer-line-s'>
                            Work
                        </Link>

                        <Link to={"/bookCall"} target='blank' className='footer-line-s'>
                            contact
                        </Link>
                    </motion.div>
                    <p>
                        copyright @ 2025 The Creative bugs Media
                    </p>
                </div>
            </motion.footer>


        </>
    )
}

export default Footer