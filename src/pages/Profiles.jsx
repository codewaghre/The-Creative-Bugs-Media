import React from 'react'
import '../css/profiles.css'

import Heading from "../components/Heading"
import ProfileCard from '../components/ProfileCard'
import profile from '../data/Profile.json'

import { motion } from "motion/react"


function Profiles() {

    const { headingOne, headingTwo, image, profileCardOne, profileCardTwo } = profile
    return (
        <section className='profile'>

            <div className='profile-container ' >

                <div className='left-profile'>

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: false }}
                        className='profile-heading'>
                        <Heading textOne={headingOne} textTwo={headingTwo} />
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: false }}
                        className='profile-img'
                    >
                        <img
                            alt='profile img'
                            src={image}
                        />
                    </motion.div>
                </div>

                <div className='right-profile'>


                    <div className='profile-one'>
                        {
                            profileCardOne.map((data, index) => {
                                return <ProfileCard key={index} image={data.profileImage} name={data.name} p={data.p} />
                            })
                        }
                    </div>


                    <div className='profile-two'>
                        {
                            profileCardTwo.map((data, index) => {
                                return <ProfileCard key={index} image={data.profileImage} name={data.name} p={data.p} />
                            })
                        }
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Profiles

{/* <div className='profile-one'>
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />

                    </div> */}

{/* <div className='profile-two'>
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </div> */}
