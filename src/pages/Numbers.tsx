import ImgMarquee from "@/components/ImgMarquee"

import brands from '../data/Brand.json'
import number from '../data/number.json'
import numberHeading from '../data/heading.json'
import Dummy from "@/components/Dummy"
import Heading from "@/components/Heading"

import { Player } from '@lottiefiles/react-lottie-player';

const Numbers = () => {

    const { one, two, three, oneColor, twoColor, threeColor } = numberHeading.numberPage

    return (
        <>
            <main className="numbers inline-gradient">

                {/* Heading Section */}
                <section aria-labelledby="main-heading">
                    <Heading
                        one={one}
                        two={two}
                        three={three}
                        oneColor={oneColor}
                        twoColor={twoColor}
                        threeColor={threeColor} />
                </section>

                {/* Main Content */}
                <div className="numbers-content">

                    {/* Statistics Section */}
                    <section aria-labelledby="stats-heading" className="stats-main">
                        <div className="stats">

                            <h2 id="stats-heading" className="sr-only">Our Impact in Numbers</h2>

                            <div className="stats-container" role="list">
                                {number.map((data) => (
                                    <div key={data.id} className={data.statsClassName} role="listitem">
                                        <div className="lottie-container">
                                            <div className="lottie">
                                                <Player
                                                    autoplay
                                                    loop
                                                    src={data.lottieFile}
                                                    className={data.playerClassName}
                                                />
                                            </div>
                                        </div>

                                        <div className={data.statsDataClassName}>
                                            <img className="about-box-img" src={data.bgImg} alt="Background" />
                                            <div className="stata-data-container">
                                                <p className="font-paytone" aria-label="25 plus">{data.number}</p>
                                                <p>{data.slogan}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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