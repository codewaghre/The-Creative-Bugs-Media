import Heading from '@/components/Heading'
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';


const Workflow = () => {
    useEffect(() => {
        const container = document.querySelector('.workflow-card');
        if (container) container.scrollTo({ left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <main className='workflow'>

                <div>
                    <Heading
                        one={"Seamless Workflow. "}
                        oneColor={"var(--bg-orange)"}

                        two={"Cinematic Precision. "}
                        twoColor={"var(--bg-green)"}
                    />
                </div>

                <div className='workflow-para'>
                    <p>
                        At The Creative Bugs Media, we don’t just manage projects we orchestrate creativity. From that first spark of an idea to the final frame on screen, every step in our workflow is designed to keep the <span className='bg-green'> energy high</span> and <span className='bg-green'>the chaos low.</span>
                    </p>

                    <p>
                        Think of it as a creative assembly line, powered by passion and precision — where brainstorming turns into storyboards, and concepts evolve into captivating content. From scripting to shooting, editing to animation, our pipeline runs like clockwork — <span className='bg-green'>without ever losing its soul.</span>
                    </p>

                    <p>Our process isn’t just smooth — <span className='bg-green'>it’s cinematic.</span></p>
                </div>


                <div className='workflow-card'>

                    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor={"var(--glare-color-orange)"} glarePosition="top" glareBorderRadius="1px" className='tilt'>

                        <div className='workflow-card-one'>

                            <div className='card-one-lottie'>
                                <div className='workflow-lottie'>
                                    <Player
                                        autoplay
                                        loop
                                        src="/lottie/run.json"
                                    />
                                </div>
                            </div>

                            <div className='card-one-data'>
                                <h1 className='bg-orange'>Strategic Content Planning</h1>
                                <p>Where Ideas Take Shape</p>
                                <p>Before the cameras roll, the strategy unfolds. We dive deep into your brand, audience, and goals to craft content with purpose. From scripting and storyboarding to mood boards and shot lists, this is where vision meets direction — and clarity becomes creativity.</p>
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
                                        src="/lottie/run.json"
                                    />
                                </div>
                            </div>

                            <div className='card-one-data'>
                                <h1 className='bg-pink'>Strategic Content Planning</h1>
                                <p>Where Ideas Take Shape</p>
                                <p>Before the cameras roll, the strategy unfolds. We dive deep into your brand, audience, and goals to craft content with purpose. From scripting and storyboarding to mood boards and shot lists, this is where vision meets direction — and clarity becomes creativity.</p>
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
                                        src="/lottie/run.json"
                                    />
                                </div>
                            </div>

                            <div className='card-one-data'>
                                <h1 className='bg-red'>Strategic Content Planning</h1>
                                <p>Where Ideas Take Shape</p>
                                <p>Before the cameras roll, the strategy unfolds. We dive deep into your brand, audience, and goals to craft content with purpose. From scripting and storyboarding to mood boards and shot lists, this is where vision meets direction — and clarity becomes creativity.</p>
                            </div>
                        </div>
                    </Tilt>

                </div>

            </main>
        </>

    )
}

export default Workflow