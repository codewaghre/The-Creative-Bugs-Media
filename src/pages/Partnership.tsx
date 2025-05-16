import Heading from "@/components/Heading"
import { Player } from '@lottiefiles/react-lottie-player';


const Partnership = () => {
    return (
        <>
            <main className="partner">
                <div className="partner-heading">
                    <Heading
                        one={"Mutual Trust. "}
                        two={"Magnetic Outcomes."}
                        oneColor={"var(--bg-orange)"}
                        twoColor={"var(--bg-red)"}
                    />
                </div>

                <div className="partner-para">
                    <p>We immerse ourselves in your world, aligning our expertise with your goals to build content that doesn’t just meet expectations — it exceeds them. Because when strategy meets artistry, and vision meets execution, it’s not just teamwork —</p>
                    <p>it’s the perfect partnership — <span className="bg-red">in motion.</span></p>
                </div>

                <div className="partner-card-container">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                    <div className="circle-three"></div>

                    <div className="partner-card-one">
                        <h1 className="font-paytone  bg-pink">Save Time, Stay Focused</h1>
                        <p>Before the cameras roll, the strategy unfolds. We dive deep into your brand, audience, and goals to craft content with purpose. From scripting and storyboarding to moodboards and shot lists, this is where vision meets direction — and clarity becomes creativity.</p>
                    </div>

                    <div className="partner-card-two">
                        <h1 className="font-paytone  bg-green">Save Time, Stay Focused</h1>
                        <p>Before the cameras roll, the strategy unfolds. We dive deep into your brand, audience, and goals to craft content with purpose. From scripting and storyboarding to moodboards and shot lists, this is where vision meets direction — and clarity becomes creativity.</p>
                    </div>

                    <div className="partner-card-three">
                        <h1 className="font-paytone  bg-blue">Save Time, Stay Focused</h1>
                        <p>Before the cameras roll, the strategy unfolds. We dive deep into your brand, audience, and goals to craft content with purpose. From scripting and storyboarding to moodboards and shot lists, this is where vision meets direction — and clarity becomes creativity.</p>
                    </div>

                    <div className="partner-card-four">
                        <h1 className="font-paytone  bg-orange">Save Time, Stay Focused</h1>
                        <p>Before the cameras roll, the strategy unfolds. We dive deep into your brand, audience, and goals to craft content with purpose. From scripting and storyboarding to moodboards and shot lists, this is where vision meets direction — and clarity becomes creativity.</p>
                    </div>

                    

                    <div className="drone">
                        <div className="drone-lottie-anime">
                            <Player
                                autoplay
                                loop
                                src="/lottie/drone.json"
                                className="drone-lottie"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Partnership