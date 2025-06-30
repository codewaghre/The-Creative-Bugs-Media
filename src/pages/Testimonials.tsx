import Heading from "@/components/Heading"
import TestimonialsSlider from "@/components/TestimonialsSlider"

import { motion } from "motion/react"

const Testimonials = () => {
    return (
        <main className="testimonials">
            <div>
                <Heading one={"Work That Speaks for Itself"}
                    oneColor={"var(--bg-orange)"}
                />
            </div>

            <div className="testimonials-para">
                <motion.p
                    initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    At Creative Bugs Media, we don’t just deliver visuals — we craft stories that stick. Here’s what our clients have to say about working with us
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    High-trust content for founders and <span className='bg-green'>experts - tailored, distributed</span>, and designed to grow across platforms.
                </motion.p>
            </div>

            <div>
                <TestimonialsSlider />
            </div>

        </main >
    )
}

export default Testimonials