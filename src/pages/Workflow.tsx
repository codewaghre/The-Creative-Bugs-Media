import Heading from '@/components/Heading'
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

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

                {/* <div className='workflow-para'>
                    <p>
                        Our process runs on <span className='bg-green'>SOPs</span>, <span className='bg-green'>timelines</span>, and <span className='bg-green'>trust </span> — so your content doesn’t wait, and your brand never feels off-track
                    </p>

                    <p>
                        It’s a creative flow where ideas become scripts, shoots, and stunning edits — <span className='bg-green'>all with passion and precision.</span>
                    </p>

                    <p>Our process isn’t just smooth — <span className='bg-green'>it’s cinematic.</span></p>
                </div> */}


                {/* Workflow Paragraphs */}
                <div className="workflow-para">
                    {workflowData.paragraphs.map((para, index) => (
                        <p key={index}>
                            {para.textParts.map((part, i) =>
                                typeof part === 'string' ? (
                                    part
                                ) : (
                                    <span key={i} className={part.className}>
                                        {part.text}
                                    </span>
                                )
                            )}
                        </p>
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



                    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor={"var(--glare-color-pink)"} glarePosition="top" glareBorderRadius="1px" className='tilt'>

                        <div className='workflow-card-two'>

                            <div className='card-one-lottie'>
                                <div className='workflow-lottie'>
                                    <Player
                                        autoplay
                                        loop
                                        src="/lottie/studio.json"
                                    />
                                </div>
                            </div>

                            <div className='card-one-data'>
                                <h1 className='bg-pink'>Production & Execution</h1>
                                <p>We handle the scripting, shoots, logistics, all on autopilot, with timely approvals.
                                </p>
                                <p>At CreativeBugs Media, we specialize in video production, turning your ideas into visually stunning stories. Our experienced team excels in every aspect of video production, from pre-production planning to shooting on location or in the studio.</p>
                            </div>
                        </div>
                    </Tilt>


                    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor={"var(--glare-color-red)"} glarePosition="top" glareBorderRadius="1px" className='tilt'>
                        <div className='workflow-card-three'>

                            <div className='card-one-lottie'>
                                <div className='workflow-lottie'>
                                    <Player
                                        autoplay
                                        loop
                                        src="/lottie/editing.json"
                                    />
                                </div>
                            </div>

                            <div className='card-one-data'>
                                <h1 className='bg-red'> Post-Production & Delivery</h1>
                                <p>Editing, polishing, and packaging content that’s on-brand, on-message, and on time.</p>
                                <p>We transform raw footage into captivating videos that elevate your brand. Our skilled editors enhance visuals, perfect sound quality, and add dynamic effects to ensure every frame aligns with your vision. Whether it's a promotional video or a social media clip.</p>
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
                            <div className={card.className}>
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
                            </div>
                        </Tilt>
                    ))}
                </div>

            </main>
        </>

    )
}

export default Workflow