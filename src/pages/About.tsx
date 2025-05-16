

import Dummy from "@/components/Dummy";
import Heading from "@/components/Heading"
import SVGComponent from "@/components/SVGComponent";
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <main className="about">
            <div className="about-heading">
                <Heading
                    one={"Who We Are Is What We Create"}
                    oneColor={"var(--bg-orange)"}
                />
            </div>

            <div className="about-grid">
                <div className="about-box-seven">
                    <Tilt className="tilt-about" tiltMaxAngleX={3} tiltMaxAngleY={8} transitionSpeed={250} glareEnable={true}
                        glareMaxOpacity={0.1}
                        glareColor={"var(--glare-color-about)"}
                        glarePosition="all">
                        <div className="about-img">
                            <SVGComponent />
                        </div>
                    </Tilt>

                </div>

                <div className="about-box-one">
                    At The Creative Bugs Media, we believe creativity is in the details — and like the tiniest bugs in the digital world, we’re always crawling through pixels, frames, and soundwaves to find what truly makes a story stick.
                </div>

                <div className="about-box-two">
                    At The Creative Bugs Media, we believe creativity is in the details — and like the tiniest bugs in the digital world, we’re always crawling through pixels, frames, and soundwaves to find what truly makes a story stick.
                </div>

                <div className="about-box-three"><a href="">X</a>
                    <img className="about-box-img" src="/bg.png" alt="Background" />

                </div>

                <div className="about-box-four">
                    <a href="">Linked</a>
                    <img className="about-box-img" src="/bg.png" alt="Background" />
                </div>

                <div className="about-box-five"><a href="">Instagram</a>
                    <img className="about-box-img" src="/bg.png" alt="Background" />
                </div>
                <div className="about-box-six">
                    <p>At The Creative Bugs, we don’t just produce. We collaborate. adapt. craft.
                    </p>
                    <p> And above all — we create <span className="bg-red">content that bites.</span></p>
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