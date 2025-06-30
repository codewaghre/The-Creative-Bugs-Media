import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "motion/react"
import { useEffect } from 'react';

import Tilt from 'react-parallax-tilt';
import Heading from '@/components/Heading'

import workflowHeading from '../data/heading.json'
import workflowData from '../data/workflow.json';



const Workflow = () => {


    const { one, two, oneColor, twoColor } = workflowHeading.workflow

    useEffect(() => {
        const container = document.querySelector('.workflow-card');
        if (container) container.scrollTo({ left: 0, behavior: 'smooth' });
    }, []);


    return (
        <>
            <main className='workflow'>

                <div>
                    <Heading
                        one={one}
                        oneColor={oneColor}

                        two={two}
                        twoColor={twoColor}
                    />
                </div>


                {/* Workflow Paragraphs */}
                <div className="workflow-para">
                    {workflowData.paragraphs.map((para, index) => (
                        <motion.p
                            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            key={index}>
                            {para.textParts.map((part, i) =>
                                typeof part === 'string' ? (
                                    part
                                ) : (
                                    <span key={i} className={part.className}>
                                        {part.text}
                                    </span>
                                )
                            )}
                        </motion.p>
                    ))}
                </div>


                {/* <div className='workflow-card'>
                    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor={"var(--glare-color-orange)"} glarePosition="top" glareBorderRadius="1px" className='tilt'>

                        <div className='workflow-card-one'>

                            <div className='card-one-lottie'>
                                <div className='workflow-lottie'>
                                    <Player
                                        autoplay
                                        loop
                                        src="/lottie/thinking.json"
                                    />
                                </div>
                            </div>

                            <div className='card-one-data'>
                                <h1 className='bg-orange'>Strategy & Planning</h1>
                                <p>We define what to say, who it’s for, and how it drives your goals.
                                </p>
                                <p>We specialize in crafting effective content strategies that drive your brand forward. Our careful planning ensures your content resonates with your audience and achieves your goals. Let's take your content strategy to the next level.</p>
                            </div>
                        </div>
                    </Tilt>
                </div> */}


                {/* Workflow Cards */}
                <div className="workflow-card">
                    {workflowData.cards.map((card, index) => (
                        <Tilt
                            key={index}
                            glareEnable={true}
                            glareMaxOpacity={0.8}
                            glareColor={card.glareColor}
                            glarePosition="top"
                            glareBorderRadius="1px"
                            className="tilt"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 2, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                viewport={{ once: false, amount: 0.5 }}
                                className={card.className}>
                                <div className="card-one-lottie">
                                    <div className="workflow-lottie">
                                        <Player autoplay loop src={card.lottieSrc} />
                                    </div>
                                </div>

                                <div className="card-one-data">
                                    <h1 className={card.h1_className}>{card.title}</h1>
                                    {card.paragraphs.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>

            </main>
        </>

    )
}

export default Workflow