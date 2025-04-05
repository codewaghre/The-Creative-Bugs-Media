import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "../css/numbers.css";

import CountUp from "react-countup";
import Heading from "../components/Heading";

import numbers from '../data/Numbers.json'


function Numbers() {

    const targetRef = useRef(null);
    const [counterState, setCounterState] = useState(false)

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["0.4 1", "1.33 1"],
    });

    // Map scroll progress to a flipping effect
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);

    // Listen for scroll changes and update state
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest > 0.3) {
                setCounterState(true);
            } else {
                setCounterState(false);
            }
        });

        return () => unsubscribe(); // Cleanup function
    }, [scrollYProgress]);

    return (

        <div className="number-container" ref={targetRef}>

            <motion.div
                className="heading-head"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
            >
                <Heading textOne={numbers.headingOne} textTwo={numbers.headingTwo} />
            </motion.div>



            <div className="main-infinity">

                <div className="infinity">
                    <motion.img
                        src="./icon/infinity.png"
                        alt="infinity img"
                        className="infinity-img"
                        style={{
                            rotateX,
                            transformStyle: "preserve-3d",
                            objectFit: "cover",
                            transformPerspective: "1000px",
                        }}
                    />


                </div>

                <div className="down-count">
                    <div className="flexy">
                        <div className="counter-list">
                            <div className="count">
                                {counterState && (
                                    <>
                                        <h1>
                                            <CountUp
                                                start={0}
                                                end={25}
                                                duration={3}
                                                suffix="+"
                                            />
                                        </h1>
                                        <p>Happy Clients</p>
                                    </>
                                )}

                            </div>

                            <div className="count">
                                {counterState && (
                                    <>
                                        <h1>
                                            <CountUp
                                                start={0}
                                                end={3}
                                                duration={3}
                                                suffix="M+"
                                            />
                                        </h1>
                                        <p>Views</p>
                                    </>
                                )}
                            </div>

                            <div className="count">
                                {counterState && (
                                    <>
                                        <h1>
                                            <CountUp
                                                start={0}
                                                end={2000}
                                                duration={2}
                                                suffix="+"
                                            />
                                        </h1>
                                        <p>Videos</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default Numbers;
