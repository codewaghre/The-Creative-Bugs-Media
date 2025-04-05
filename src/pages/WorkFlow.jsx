import React from 'react'
import '../css/Workflow.css'

import Heading from "../components/Heading"
import workflow from '../data/Workflow.json'

import { motion } from "motion/react"


function WorkFlow() {



    return (
        <section className='workflow'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className='workflow-heading'
            >
                <Heading textOne={workflow.headingOne} textTwo={workflow.headingTwo} />

            </motion.div>

            <div className='workflow-container'>
                {
                    workflow.card.map((data) => {
                        return (
                            <motion.div
                                whileInView={{ y: 0, scale: 1 }}
                                initial={{ y: 50, scale: 0.8 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                                key={data.id}
                                className='workflow-card'>

                                <h1>
                                    {data.h1}
                                </h1>

                                <p>
                                    {data.p}
                                </p>

                                <div className='card-icon'>
                                    <img src={data.icon} />
                                </div>
                            </motion.div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default WorkFlow