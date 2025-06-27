

import Dummy from "@/components/Dummy";
import Heading from "@/components/Heading"
import SVGComponent from "@/components/SVGComponent";
import Tilt from 'react-parallax-tilt';

import aboutusHeading from '../data/heading.json'
import about from '../data/about.json'

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
                        <div className="about-img">
                            <SVGComponent />
                        </div>
                    </Tilt>
                </div>

                <div className="about-box-one">
                    <p>{about.content.p1}</p>
                </div>

                <div className="about-box-two">
                    <p>{about.content.p2}</p>
                </div>

                <div className="about-box-four">
                    <a href="">Linked</a>
                    <img className="about-box-img" src="/bg.png" alt="Background" />
                </div>

                <div className="about-box-five"><a href="">Instagram</a>
                    <img className="about-box-img" src="/bg.png" alt="Background" />
                </div>

                <div className="about-box-six">
                    <p>
                        {about.content.p3.map((part, i) =>
                            typeof part === 'string' ? (
                                part
                            ) : (
                                <span key={i} className={part.className}>
                                    {part.text}
                                </span>
                            )
                        )}
                    </p>
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