import CraftVideoOne from "@/components/CraftVideoOne"
import CraftVideoTwo from "@/components/CraftVideoTwo"
import Heading from "@/components/Heading"

import craftHeading from '../data/heading.json'
import work from '../data/work.json'

import { Helmet } from 'react-helmet-async';

const Work = () => {

    const { one, two, oneColor, twoColor } = craftHeading.work
    const { p1, p2, hashImg, craftOne, craftThree, craftTwo } = work
    return (
        <>
            <main className="work">

                <Helmet>
                    <title>Our Work | Creative Bugs Media</title>
                    <meta name="description" content="Explore our portfolio of video editing and production projects including reels, music videos, commercials, and corporate content." />
                    <link rel="canonical" href="https://the-creative-bugs-media.vercel.app/work" />
                    <meta property="og:title" content="Our Work | Creative Bugs Media" />
                    <meta property="og:description" content="Browse our curated selection of projects — from brand films to YouTube content and short-form reels." />
                    <meta property="og:url" content="https://the-creative-bugs-media.vercel.app/work" />
                    <meta property="og:image" content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp" />
                    <meta name="twitter:title" content="Our Work | Creative Bugs Media" />
                    <meta name="twitter:description" content="See how we transform ideas into powerful, polished video content." />
                    <meta name="twitter:image" content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp" />
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "Creative Bugs Media Portfolio",
                            "description": "A curated showcase of our best video editing and production projects.",
                            "url": "https://the-creative-bugs-media.vercel.app/work"
                        })}
                    </script>
                </Helmet>

                <div>
                    <Heading
                        one={one}
                        oneColor={oneColor}
                        two={two}
                        twoColor={twoColor}
                    />
                </div>

                <div className="connect-para">
                    <p>{p1}</p>
                    <span className="bg-green">{p2}</span>
                </div>

                <div className="work-container">
                    <div>
                        <CraftVideoOne filter={"filter-grey"} hashImg={hashImg} video={craftOne.video} reelOne={craftOne.reelOne} reelTwo={craftOne.reelTwo} />
                    </div>

                    <div>
                        <CraftVideoTwo filter={"filter-grey"} hashImg={hashImg} video={craftTwo.video} reelOne={craftTwo.reelOne} reelTwo={craftTwo.reelTwo} />
                    </div>

                    <div>
                        <CraftVideoOne filter={"filter-grey"} hashImg={hashImg} video={craftThree.video} reelOne={craftThree.reelOne} reelTwo={craftThree.reelTwo} />
                    </div>
                </div>

            </main>
        </>
    )
}

export default Work