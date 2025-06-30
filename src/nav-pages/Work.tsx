import CraftVideoOne from "@/components/CraftVideoOne"
import CraftVideoTwo from "@/components/CraftVideoTwo"
import Heading from "@/components/Heading"

import craftHeading from '../data/heading.json'
import work from '../data/work.json'

import { Title, Meta, Link as HeadLink } from 'react-head';

import { motion } from "motion/react"


const Work = () => {

    const { one, two, oneColor, twoColor } = craftHeading.work
    const { p1, p2, hashImg, craftOne, craftThree, craftTwo } = work
    return (
        <>
            <WorkPageSEO />
            <main className="work">

                <div>
                    <Heading
                        one={one}
                        oneColor={oneColor}
                        two={two}
                        twoColor={twoColor}
                    />
                </div>

                <div className="connect-para">
                    <motion.p
                        initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {p1}
                    </motion.p>
                    <motion.span
                        initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="bg-green"
                    >
                        {p2}
                    </motion.span>
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




const WorkPageSEO = () => (
    <>
        <Title>Our Work | Creative Bugs Media</Title>
        <Meta name="description" content="Explore our portfolio of video editing and production projects including reels, music videos, commercials, and corporate content." />
        <HeadLink rel="canonical" href="https://www.the-creative-bugs.vercel.app/work" />
        <Meta property="og:title" content="Our Work | Creative Bugs Media" />
        <Meta property="og:description" content="Browse our curated selection of projects — from brand films to YouTube content and short-form reels." />
        <Meta property="og:url" content="https://www.the-creative-bugs.vercel.app/work" />
        <Meta property="og:image" content="https://www.the-creative-bugs.vercel.app/creativeBugsMedia.jpg" />
        <Meta name="twitter:title" content="Our Work | Creative Bugs Media" />
        <Meta name="twitter:description" content="See how we transform ideas into powerful, polished video content." />
        <Meta name="twitter:image" content="https://www.the-creative-bugs.vercel.app/creativeBugsMedia.jpg"
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Creative Bugs Media Portfolio",
                    "description":
                        "A curated showcase of our best video editing and production projects.",
                    "url": "https://www.the-creative-bugs.vercel.app/work",
                }),
            }}
        />
    </>
);


