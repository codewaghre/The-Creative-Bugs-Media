

import Dummy from "@/components/Dummy";
import Heading from "@/components/Heading"
import SVGComponent from "@/components/SVGComponent";
import Tilt from 'react-parallax-tilt';

import aboutusHeading from '../data/heading.json'
import about from '../data/about.json'

import { motion } from "motion/react"

const About = () => {
    const { one, two, oneColor, twoColor } = aboutusHeading.aboutus

    return (
        <main className="about">
            <div className="about-heading">
                <Heading
                    one={one}
                    oneColor={oneColor}
                    two={two}
                    twoColor={twoColor}
                />
            </div>

            <div className="about-grid">
                <div className="about-box-seven">
                    <Tilt className="tilt-about" tiltMaxAngleX={3} tiltMaxAngleY={8} transitionSpeed={250} glareEnable={true}
                        glareMaxOpacity={0.1}
                        glareColor={"var(--glare-color-about)"}
                        glarePosition="all">
                        <motion.div
                            initial={{ opacity: 0, y: 2, filter: 'blur(4px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="about-img">
                            <SVGComponent />
                        </motion.div>
                    </Tilt>
                </div>

                <div className="about-box-one">
                    <motion.p
                        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {about.content.p1}
                    </motion.p>
                </div>

                <div className="about-box-two">
                    <motion.p
                        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {about.content.p2}
                    </motion.p>
                </div>


                {
                    about.socialsLinkAbout.map((data) => (
                        <div className={data.className}>
                            <motion.a
                                initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                href={data.link} target="_blank">
                                {data.linkName}
                            </motion.a>
                            <img className="about-box-img" src={data.img} alt="Background" />
                        </div>
                    ))

                }

                <div className="about-box-six">
                    <motion.p
                        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {about.content.p3.map((part, i) =>
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

                <div className="about-box-nine"></div>
                <div className="about-box-ten"></div>
                <div className="about-box-eleven"></div>
                <div className="about-box-twelve"></div>
            </div>

            <div>
                <Dummy width={"77%"} />
            </div>

        </main>
    );
};


export default About