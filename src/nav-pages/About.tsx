import Heading from '@/components/Heading'
import Service from '@/components/Service'
import Team from '@/components/Team'

const About = () => {
    return (
        <main className='nav-about content-container'>

            <div>
                <Heading
                    one={"Who We Are Is What We Create"}
                    oneColor={"var(--bg-orange)"}
                />
            </div>

            <div className='nav-about-grid'>

                <div className='nav-about-box-one'></div>
                <div className='nav-about-box-two'></div>
                <div className='nav-about-box-three'></div>
                <div className='nav-about-box-four'>
                    <p>At The Creative Bugs Media, we believe creativity is in the details — and like the tiniest bugs in the digital world, we’re always crawling through pixels, frames, and soundwaves to find what truly makes a story stick.</p>
                </div>
                <div className='nav-about-box-five'>
                    <p>At The Creative Bugs Media, we believe creativity is in the details — and like the tiniest bugs in the digital world, we’re always crawling through pixels, frames, and soundwaves to find what truly makes a story stick.</p>
                </div>
                <div className='nav-about-box-six'>
                    <p>In just over 3 years, we’ve grown from a small collective of creators into a multidisciplinary powerhouse — covering everything from video production, editing, and animation to reels, podcasts, and full-scale storytelling. We've partnered with startups, creators, and visionary brands, always driven by one goal: to make content that moves people — visually, emotionally, and memorably.</p>
                </div>
                <div className='nav-about-box-seven'>
                    <p>
                        At The Creative Bugs, we don’t just produce. We collaborate. adapt. craft.

                    </p>
                    <p>And above all — we create <span className='bg-green'>content that bites.</span></p>

                    <img className="about-box-img" src="/bg.png" alt="Background" />
                </div>
                <div className='nav-about-box-eight'>
                    <a href="">Instagram</a>
                    <img className="about-box-img" src="/bg.png" alt="Background" />
                </div>
                <div className='nav-about-box-nine'>
                    <a href="">Instagram</a>
                    <img className="about-box-img" src="/bg.png" alt="Background" />
                </div>
                <div className='nav-about-box-ten'>
                    <a href="">Instagram</a>
                    <img className="about-box-img" src="/bg.png" alt="Background" />
                </div>
                <div className='nav-about-box-eleven'></div>


            </div>

            <div className='team-container'>
                <Team />
            </div>

            <div className='service-container'>
                <Service />
            </div>
        </main>
    )
}

export default About