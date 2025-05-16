import ImgMarquee from "@/components/ImgMarquee"

import brands from '../data/Brand.json'
import Dummy from "@/components/Dummy"
import Heading from "@/components/Heading"

import { Player } from '@lottiefiles/react-lottie-player';

const Numbers = () => {

    return (
        <>
            <main className="numbers inline-gradient">

                {/* Heading Section */}
                <section aria-labelledby="main-heading">
                    <Heading
                        one={"We Shoot.  "}
                        two={"We Edit.  "}
                        three={"We Deliver. "}
                        oneColor={"var(--bg-orange)"}
                        twoColor={"var(--bg-red)"}
                        threeColor={"var(--bg-pink)"} />
                </section>

                {/* Main Content */}
                <div className="numbers-content">

                    {/* Statistics Section */}
                    <section aria-labelledby="stats-heading" className="stats-main">
                        <div className="stats">

                            <h2 id="stats-heading" className="sr-only">Our Impact in Numbers</h2>

                            <div className="stats-container" role="list">
                                {/* Stat Item 1 */}
                                <div className="stats-data-one" role="listitem">

                                    <div className="lottie-container">
                                        <div className="lottie">
                                            <Player
                                                autoplay
                                                loop
                                                src="/lottie/client.json"
                                                className="lottie-anime-one"
                                            />
                                        </div>
                                    </div>

                                    <div className="stats-one-data">
                                        <div className="stata-data-container">
                                            <p className="font-paytone" aria-label="25 plus">25+</p>
                                            <h3>Clients</h3>
                                            <p>Brands Found Their Creative Edge</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat Item 2 */}
                                <div className="stats-data-two" role="listitem">


                                    <div className="lottie-container">
                                        <div className="lottie">
                                            <Player
                                                autoplay
                                                loop
                                                src="/lottie/taget.json"
                                                className="lottie-anime-two"
                                            />
                                        </div>
                                    </div>

                                    <div className="stats-two-data">
                                        <img className="about-box-img" src="/bg.png" alt="Background" />
                                        <div className="stata-data-container">
                                            <p className="font-paytone" aria-label="25 plus">25+</p>
                                            <h3>Clients</h3>
                                            <p>Brands Found Their Creative Edge</p>
                                        </div>
                                    </div>

                                </div>

                                {/* Stat Item 3 */}
                                <div className="stats-data-three" role="listitem">


                                    <div className="lottie-container">
                                        <div className="lottie">
                                            <Player
                                                autoplay
                                                loop
                                                src="/lottie/view.json"
                                                className="lottie-anime-three"
                                            />
                                        </div>
                                    </div>

                                    <div className="stats-three-data">
                                        <img className="about-box-img" src="/bg.png" alt="Background" />
                                        <div className="stata-data-container">
                                            <p className="font-paytone" aria-label="25 plus">25+</p>
                                            <h3>Clients</h3>
                                            <p>Brands Found Their Creative Edge</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Brand Marquee Section */}
                    <section aria-label="Our partners" className="img-marquee">
                        <ImgMarquee images={brands} from={0} to={"-100%"} />
                    </section>
                </div>

                {/* Decorative Elements */}
                <div aria-hidden="true">
                    <Dummy width={"77.15%"} />
                </div>
            </main>
        </>
    )
}

export default Numbers