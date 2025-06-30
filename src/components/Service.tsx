import Heading from "./Heading"

import service from '../data/services.json'
import serviceHeading from '../data/heading.json'

import { motion } from "motion/react"

const Service = () => {
    const { one, two, twoColor, oneColor } = serviceHeading.services
    return (
        <>
            <main className="service">
                <div>
                    <Heading
                        one={one}
                        oneColor={oneColor}
                        two={two}
                        twoColor={twoColor}
                    />
                </div>

                <div className="service-para-container">
                    <motion.p
                        initial={{ opacity: 0, y: 6, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {service.p1.map((part, i) =>
                            typeof part === 'string' ? (
                                part
                            ) : (
                                <span key={i} className={part.className}>
                                    {part.text}
                                </span>
                            )
                        )}
                    </motion.p>
                </div>

                <div className="services-container">
                    {
                        service.services.map((service) => (
                            <motion.div
                                initial={{ opacity: 0, y: 6, filter: 'blur(8px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                key={service.id}
                                className={service.className}
                            >
                                <h1 className="font-paytone">{service.h1}</h1>
                                <p>{service.p}</p>
                            </motion.div>
                        ))

                    }


                </div>


            </main>
        </>
    )
}

export default Service