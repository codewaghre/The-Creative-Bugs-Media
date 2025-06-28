import Heading from '@/components/Heading'
import Service from '@/components/Service'
import Team from '@/components/Team'

import about from '../data/about.json'
import aboutHeading from '../data/heading.json'

// import { Helmet } from 'react-helmet-async';



const About = () => {

    const { p1, p2, p3, p4 } = about.content
    const { one, oneColor, two, twoColor } = aboutHeading.aboutus
    return (
        <main className='nav-about content-container'>

            {/* <Helmet>
                <title>About Us | Creative Bugs Media</title>
                <meta name="description" content="Meet the team behind Creative Bugs Media. Learn how we craft powerful visual stories that connect with audiences and elevate brands." />
                <link rel="canonical" href="https://the-creative-bugs-media.vercel.app/about" />
                <meta property="og:title" content="About Us | Creative Bugs Media" />
                <meta property="og:description" content="Discover the creative minds at Creative Bugs Media. Our story, mission, and people behind the lens." />
                <meta property="og:url" content="https://the-creative-bugs-media.vercel.app/about" />
                <meta property="og:image" content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp" />
                <meta name="twitter:title" content="About Us | Creative Bugs Media" />
                <meta name="twitter:description" content="Discover the story and vision of the team behind Creative Bugs Media." />
                <meta name="twitter:image" content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.jpg" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Creative Bugs Media",
                            "url": "https://www.the-creative-bugs.vercel.app",
                            "logo": "https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp",
                            "description": "Creative Bugs Media is a creative video editing and production company specializing in storytelling and brand development."
                        }
                    })}
                </script>
            </Helmet> */}

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
                    <p>{p1}</p>
                </div>
                <div className='nav-about-box-five'>
                    <p>{p4}</p>
                </div>
                <div className='nav-about-box-six'>
                    <p>{p2}</p>
                </div>
                <div className='nav-about-box-seven'>
                    <p>
                        {p3.map((part, i) =>
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
                {
                    about.socialsLinks.map((data) => (
                        <a href={data.link} target='blank' className={data.className}>
                            <div key={data.id}>
                                <img className="about-box-img" src={data.img} alt="Background" />
                                <a target='blank' href={data.link}>{data.linkName}</a>

                            </div>
                        </a>
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
        </main>
    )
}

export default About