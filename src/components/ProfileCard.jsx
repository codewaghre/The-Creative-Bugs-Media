import React from 'react'
import { motion } from "motion/react"

function ProfileCard({ image, name, p }) {
    return (
        <>
            <motion.div

                whileInView={{ y: 0, scale: 1 }}
                initial={{ y: 50, scale: 0.8 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className='profile-one'>
                <div className='profile-card'>

                    <div className='user-img'>
                        <img src={image} />
                    </div>

                    <div className='user-deatils'>
                        <h3>
                            {name}
                        </h3>

                        <p>
                            {p}
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProfileCard