import Heading from '@/components/Heading'
import Service from '@/components/Service'
import Team from '@/components/Team'

import about from '../data/about.json'
import aboutHeading from '../data/heading.json'

import { Title, Meta, Link as HeadLink } from 'react-head';
import { motion } from "motion/react"



const About = () => {

    const { p1, p2, p3, p4 } = about.content
    const { one, oneColor, two, twoColor } = aboutHeading.aboutus


    return (

        <>
            <AboutPageSEO />
            <main className='nav-about content-container'>
                <div>
                    <Heading
                        one={one}
                        oneColor={oneColor}
                        two={two}
                        twoColor={twoColor}
                    />
                </div>

                <div className='nav-about-grid'>

                    <div className='nav-about-box-one'></div>
                    <div className='nav-about-box-two'></div>
                    <div className='nav-about-box-three'></div>
                    <div className='nav-about-box-four'>
                        <motion.p
                            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {p1}
                        </motion.p>
                    </div>
                    <div className='nav-about-box-five'>
                        <motion.p
                            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {p4}
                        </motion.p>
                    </div>
                    <div className='nav-about-box-six'>
                        <motion.p
                            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {p2}
                        </motion.p>
                    </div>
                    <div className='nav-about-box-seven'>
                        <motion.p
                            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}

                        >
                            {p3.map((part, i) =>
                                typeof part === 'string' ? (
                                    part
                                ) : (
                                    <span key={i} className={part.className}>
                                        {part.text}
                                    </span>
                                )
                            )}
                        </motion.p>
                    </div>
                    {
                        about.socialsLinks.map((data) => (
                            <motion.a
                                initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                href={data.link}
                                target='blank'
                                className={data.className}>
                                <div key={data.id}>
                                    <img className="about-box-img" src={data.img} alt="Background" />
                                    <a target='blank' href={data.link}>{data.linkName}</a>

                                </div>
                            </motion.a>
                        ))
                    }
                    <div className='nav-about-box-eleven'></div>
                </div>

                <div className='team-container'>
                    <Team />
                </div>

                <div className='service-container'>
                    <Service />
                </div>
            </main >

        </>
    )
}

export default About

const AboutPageSEO = () => (
    <>
        <Title>About Us | Creative Bugs Media</Title>
        <Meta name="description" content="Meet the team behind Creative Bugs Media. Learn how we craft powerful visual stories that connect with audiences and elevate brands." />
        <HeadLink rel="canonical" href="https://the-creative-bugs-media.vercel.app/about" />
        <Meta property="og:title" content="About Us | Creative Bugs Media" />
        <Meta property="og:description" content="Discover the creative minds at Creative Bugs Media. Our story, mission, and people behind the lens." />
        <Meta property="og:url" content="https://the-creative-bugs-media.vercel.app/about" />
        <Meta property="og:image" content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp" />
        <Meta name="twitter:title" content="About Us | Creative Bugs Media" />
        <Meta name="twitter:description" content="Discover the story and vision of the team behind Creative Bugs Media." />
        <Meta name="twitter:image" content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.jpg" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Creative Bugs Media",
                        "url": "https://www.the-creative-bugs.vercel.app",
                        "logo": "https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp",
                        "description": "Creative Bugs Media is a creative video editing and production company specializing in storytelling and brand development."
                    }
                }),
            }}
        />
    </>
);
