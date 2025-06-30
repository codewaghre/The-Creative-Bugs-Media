import Hero from "@/pages/Hero"
import Numbers from "@/pages/Numbers"
import Craft from "../pages/Craft"
import Workflow from "@/pages/Workflow"
// import Partnership from "@/pages/Partnership"
import About from "@/pages/About"
import Connect from '../nav-pages/Connect'
import Testimonials from "@/pages/Testimonials"

import { Title, Meta, Link as HeadLink } from 'react-head';

const username = import.meta.env.VITE_USERNAME;
const eventId = import.meta.env.VITE_EVENT_ID;



const Index = () => {
    return (
        <>
            <IndexPageSEO />
            <div className='content-container'>
                <Hero />
                <Numbers />
                <Craft />
                <Workflow />
                <Testimonials />
                {/* <Partnership /> */}
                <About />
                <Connect username={username} eventId={eventId} />
            </div>
        </>
    )
}

export default Index

const IndexPageSEO = () => (
    <>
        <Title>Creative Bugs Media | Video Editing & Storytelling Studio</Title>
        <Meta
            name="description"
            content="Creative Bugs Media is your go-to creative studio for cinematic video editing, storytelling, and branded content. Explore our work and connect with our talented team."
        />
        <HeadLink rel="canonical" href="https://the-creative-bugs-media.vercel.app/" />
        <Meta property="og:type" content="website" />
        <Meta
            property="og:title"
            content="Creative Bugs Media | Video Editing & Storytelling Studio"
        />
        <Meta
            property="og:description"
            content="Explore Creative Bugs Media's creative journey in cinematic editing, storytelling, reels, podcast production, and brand videos."
        />
        <Meta property="og:url" content="https://the-creative-bugs-media.vercel.app/" />
        <Meta
            property="og:image"
            content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp"
        />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta
            name="twitter:title"
            content="Creative Bugs Media | Video Editing & Storytelling Studio"
        />
        <Meta
            name="twitter:description"
            content="Explore our creative works in editing, reels, and production. We bring stories to life through visuals."
        />
        <Meta
            name="twitter:image"
            content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.jpg"
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "url": "https://the-creative-bugs-media.vercel.app",
                    "name": "Creative Bugs Media",
                    "description":
                        "Creative Bugs Media is a video editing and creative production company specializing in brand storytelling, reels, podcast editing, and cinematic content.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Creative Bugs Media",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp",
                        },
                    },
                }),
            }}
        />
    </>
);
